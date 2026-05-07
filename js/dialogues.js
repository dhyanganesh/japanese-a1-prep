// ══════════════════════════════════════════
// CAN-DO DIALOGUE PRACTICE
// ══════════════════════════════════════════
let activeDialogueLesson = 1;
let dialoguePlayTimer = null;

function initDialogues() {
  const filter = document.getElementById('dialogueLessonFilter');
  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.className = 'topic-pill' + (i === 1 ? ' active' : '');
    btn.textContent = 'L' + i;
    btn.dataset.lesson = i;
    btn.onclick = () => {
      filter.querySelectorAll('.topic-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      activeDialogueLesson = i;
      renderDialogues();
    };
    filter.appendChild(btn);
  }
  renderDialogues();
}

function renderDialogues() {
  const container = document.getElementById('dialogueCards');
  const cards = DIALOGUES.filter(d => d.lesson === activeDialogueLesson);

  if (!cards.length) {
    container.innerHTML = '<p style="color:var(--muted);text-align:center;padding:30px;">No dialogues for this lesson yet.</p>';
    return;
  }

  container.innerHTML = cards.map(d => buildCard(d)).join('');
}

function buildCard(d) {
  const linesHTML = d.lines.map(line => buildLine(line, d.type)).join('');

  return `<div class="dialogue-card">
    <div class="cando-meta">
      <span class="cando-badge">L${d.lesson} · Can-do ${d.cando}</span>
      ${d.type === 'dialogue' ? '<span class="cando-type-tag">💬 Dialogue</span>' : '<span class="cando-type-tag">📋 Phrases</span>'}
    </div>
    <div class="cando-title">${d.title}</div>
    ${d.type === 'dialogue' ? '<div class="dhyan-hint">👤 Green lines = your answers (Dhyan)</div>' : ''}
    <div class="dialogue-lines">${linesHTML}</div>
    <button class="play-dialogue-btn" onclick="playDialogueFull(${d.lesson},${d.cando})">▶ Play Full ${d.type === 'dialogue' ? 'Dialogue' : 'All Phrases'}</button>
  </div>`;
}

function buildLine(line, type) {
  const isDhyan = !!line.dhyan;
  const dhyanClass = isDhyan ? ' dhyan' : '';

  // Speaker tag (dialogue only)
  const speakerHTML = line.speaker
    ? `<span class="line-speaker ${isDhyan ? 'speaker-dhyan' : ''}">${line.speaker}</span>`
    : '<span class="line-speaker"></span>';

  // Response tag (phrases with A→B pattern)
  const responseHTML = line.response
    ? `<span class="line-response"> → ${line.response}</span>`
    : '';

  // Note tag
  const noteHTML = line.note
    ? `<div class="line-note">${line.note}</div>`
    : '';

  // Dhyan badge
  const dhyanBadge = isDhyan ? '<span class="you-badge">あなた</span>' : '';

  // Safe string for onclick
  const safeJa = line.ja.replace(/'/g, "\\'");

  return `<div class="dialogue-line${dhyanClass}">
    ${type === 'dialogue' ? speakerHTML : ''}
    <div class="line-body">
      <div class="line-ja">${line.ja}${responseHTML} ${dhyanBadge}</div>
      <div class="line-en">${line.en}</div>
      ${noteHTML}
    </div>
    <button class="line-play-btn" onclick="speak('${safeJa}','ja',0.8)">▶</button>
  </div>`;
}

function playDialogueFull(lesson, cando) {
  clearTimeout(dialoguePlayTimer);
  synth.cancel();

  const d = DIALOGUES.find(d => d.lesson === lesson && d.cando === cando);
  if (!d) return;

  // Strip placeholder brackets for TTS: [なまえ] → empty
  let i = 0;
  function next() {
    if (i >= d.lines.length) return;
    const raw = d.lines[i++].ja;
    const ttsText = raw.replace(/［[^］]*］/g, '').replace(/\[[^\]]*\]/g, '').trim();
    if (!ttsText) { next(); return; }
    speak(ttsText, 'ja', 0.82, () => {
      dialoguePlayTimer = setTimeout(next, 600);
    });
  }
  next();
}
