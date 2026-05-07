// ══════════════════════════════════════════
// AUDIO PLAYER
// ══════════════════════════════════════════
let currentLesson = null, currentQueue = [], currentIdx = 0;
let isPlaying = false, repeatMode = false;
let pauseDuration = 1500, jpSpeed = 0.8, playTimeout = null;

function initPlayer() {
  const grid = document.getElementById('lessonGrid');
  Object.keys(LESSONS).forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'lesson-btn';
    btn.textContent = name;
    btn.onclick = () => {
      stopAll();
      currentLesson = name;
      currentQueue = LESSONS[name];
      currentIdx = 0;
      document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderQueue();
      updateDisplay(null, null, true);
      document.getElementById('statusBar').textContent = name + ' — ' + currentQueue.length + ' items';
    };
    grid.appendChild(btn);
  });
}

function togglePlay() {
  if (!currentLesson) {
    document.getElementById('statusBar').textContent = '⚠️ Select a lesson first!';
    return;
  }
  isPlaying ? pausePlayback() : startPlayback();
}

function startPlayback() {
  isPlaying = true;
  document.getElementById('playBtn').textContent = '⏸';
  playNext();
}

function pausePlayback() {
  isPlaying = false;
  synth.cancel();
  clearTimeout(playTimeout);
  document.getElementById('playBtn').textContent = '▶';
  document.getElementById('statusBar').textContent = 'Paused';
}

function stopAll() {
  isPlaying = false;
  synth.cancel();
  clearTimeout(playTimeout);
  document.getElementById('playBtn').textContent = '▶';
}

function playNext() {
  if (!isPlaying) return;
  if (currentIdx >= currentQueue.length) {
    if (repeatMode) { currentIdx = 0; playNext(); }
    else { stopAll(); document.getElementById('statusBar').textContent = '✅ Lesson complete!'; }
    return;
  }
  const [lang, text] = currentQueue[currentIdx];
  updateDisplay(lang, text);
  renderQueue();

  const u = new SpeechSynthesisUtterance(text);
  if (lang === 'ja') {
    if (jaVoice) u.voice = jaVoice;
    u.lang = 'ja-JP'; u.rate = jpSpeed; u.pitch = 1.05;
  } else {
    if (enVoice) u.voice = enVoice;
    u.lang = 'en-US'; u.rate = 0.95;
  }
  u.onend = () => {
    if (!isPlaying) return;
    const p = lang === 'ja' ? pauseDuration * 1.5 : pauseDuration * 0.5;
    playTimeout = setTimeout(() => { currentIdx++; playNext(); }, p);
  };
  u.onerror = () => { currentIdx++; playTimeout = setTimeout(playNext, 200); };
  synth.speak(u);
}

function nextItem() {
  synth.cancel(); clearTimeout(playTimeout);
  currentIdx = Math.min(currentIdx + 1, currentQueue.length - 1);
  if (isPlaying) playNext();
  else { updateDisplay(...currentQueue[currentIdx]); renderQueue(); }
}

function prevItem() {
  synth.cancel(); clearTimeout(playTimeout);
  currentIdx = Math.max(currentIdx - 1, 0);
  if (isPlaying) playNext();
  else { updateDisplay(...currentQueue[currentIdx]); renderQueue(); }
}

function restart() {
  stopAll(); currentIdx = 0;
  updateDisplay(null, null, true);
  renderQueue();
}

function toggleRepeat() {
  repeatMode = !repeatMode;
  document.getElementById('repeatBtn').style.color = repeatMode ? 'var(--accent)' : '';
}

function updatePause(el) {
  pauseDuration = parseFloat(el.value) * 1000;
  document.getElementById('pauseVal').textContent = el.value + 's';
}

function updateSpeed(el) {
  jpSpeed = parseFloat(el.value);
  document.getElementById('speedVal').textContent = el.value + '×';
}

function updateDisplay(lang, text, idle) {
  const card = document.getElementById('nowPlaying');
  const badge = document.getElementById('langBadge');
  const textEl = document.getElementById('currentText');
  const fill = document.getElementById('progressFill');
  const prog = document.getElementById('progressLine');

  if (idle || !lang) {
    card.className = 'now-playing';
    badge.className = 'lang-badge idle';
    badge.textContent = 'Ready';
    textEl.className = 'current-text';
    textEl.style.color = '';
    textEl.textContent = currentLesson ? 'Press play' : 'Select a lesson';
    fill.style.width = '0%';
    prog.textContent = '';
    return;
  }
  if (lang === 'ja') {
    card.className = 'now-playing ja-active';
    badge.className = 'lang-badge ja';
    badge.textContent = '🇯🇵 Japanese — Repeat!';
    textEl.className = text.length > 15 ? 'current-text small' : 'current-text';
    textEl.style.color = 'var(--ja-color)';
  } else {
    card.className = 'now-playing en-active';
    badge.className = 'lang-badge en';
    badge.textContent = '🇺🇸 English';
    textEl.className = 'current-text en-text';
    textEl.style.color = 'var(--en-color)';
  }
  textEl.textContent = text;
  const pct = currentQueue.length > 0 ? Math.round((currentIdx / currentQueue.length) * 100) : 0;
  fill.style.width = pct + '%';
  prog.innerHTML = '<span>' + (currentIdx + 1) + '</span> / ' + currentQueue.length;
}

function renderQueue() {
  const list = document.getElementById('queueList');
  const count = document.getElementById('queueCount');
  if (!currentQueue.length) { list.innerHTML = ''; count.textContent = ''; return; }
  count.textContent = currentQueue.length + ' items';
  const s = Math.max(0, currentIdx - 2);
  const e = Math.min(currentQueue.length, currentIdx + 8);
  list.innerHTML = currentQueue.slice(s, e).map(([lang, text], i) => {
    const ri = s + i, cur = ri === currentIdx;
    return '<div class="queue-item ' + (cur ? 'current' : '') + '" onclick="jumpTo(' + ri + ')">'
      + '<div class="q-dot ' + (cur ? 'current-dot' : lang) + '"></div>'
      + '<div class="q-text">' + text + '</div>'
      + '<div class="q-lang">' + lang.toUpperCase() + '</div></div>';
  }).join('');
  list.querySelector('.current')?.scrollIntoView({ block: 'nearest' });
}

function jumpTo(idx) {
  synth.cancel(); clearTimeout(playTimeout);
  currentIdx = idx;
  if (isPlaying) playNext();
  else { updateDisplay(...currentQueue[idx]); renderQueue(); }
}
