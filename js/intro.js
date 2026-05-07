// ══════════════════════════════════════════
// SELF INTRO
// ══════════════════════════════════════════
function playFullIntro() {
  let i = 0;
  function next() {
    if (i >= INTRO.length) return;
    speak(INTRO[i++], 'ja', 0.85, () => setTimeout(next, 800));
  }
  next();
}

function playIntroSlow() {
  let i = 0;
  function next() {
    if (i >= INTRO.length) return;
    speak(INTRO[i++], 'ja', 0.65, () => setTimeout(next, 1600));
  }
  next();
}

function initVivaQA() {
  const container = document.getElementById('vivaQA');
  VIVA_QA.forEach(item => {
    const d = document.createElement('div');
    d.className = 'qa-item';
    const safeJa = item.ja.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    d.innerHTML =
      '<div class="qa-q">' + item.q + ' <span class="qa-arrow">▼</span></div>'
      + '<div class="qa-answer">'
      +   '<div class="qa-ja">' + item.ja + '</div>'
      +   '<div class="qa-en">' + item.en + '</div>'
      +   '<button class="qa-play" onclick="event.stopPropagation();speak(\'' + safeJa + '\',\'ja\',0.8)">▶ Listen</button>'
      + '</div>';
    d.onclick = () => d.classList.toggle('open');
    container.appendChild(d);
  });
}
