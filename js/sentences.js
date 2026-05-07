// ══════════════════════════════════════════
// SENTENCE READING
// ══════════════════════════════════════════
let sentenceIdx = 0, hintVisible = false;

function renderSentence() {
  const s = SENTENCES[sentenceIdx];
  document.getElementById('sentenceCounter').textContent =
    'Sentence ' + (sentenceIdx + 1) + ' of ' + SENTENCES.length;

  let html = '';
  s.jp.forEach(part => {
    if (Array.isArray(part)) {
      html += '<span class="kanji-word" onclick="showKanjiTip(\''
        + part[0].replace(/'/g, "\\'") + "','"
        + part[1].replace(/'/g, "\\'") + '\')">' + part[0] + '</span>';
    } else {
      html += part;
    }
  });
  document.getElementById('sentenceJP').innerHTML = html;
  document.getElementById('sentenceEN').textContent = s.en;
  document.getElementById('sentenceRomaji').textContent = s.romaji;
  document.getElementById('hintBox').classList.remove('show');
  document.getElementById('hintContent').textContent = s.hint;
  hintVisible = false;
}

function showKanjiTip(kanji, tip) {
  speak(kanji, 'ja', 0.8);
  document.getElementById('hintBox').classList.add('show');
  document.getElementById('hintContent').textContent = kanji + ' = ' + tip;
  hintVisible = true;
}

function toggleHint() {
  hintVisible = !hintVisible;
  document.getElementById('hintContent').textContent = SENTENCES[sentenceIdx].hint;
  document.getElementById('hintBox').classList[hintVisible ? 'add' : 'remove']('show');
}

function playSentence() {
  let t = '';
  SENTENCES[sentenceIdx].jp.forEach(p => { t += Array.isArray(p) ? p[0] : p; });
  speak(t, 'ja', 0.8);
}

function nextSentence() { sentenceIdx = (sentenceIdx + 1) % SENTENCES.length; renderSentence(); }
function prevSentence() { sentenceIdx = (sentenceIdx - 1 + SENTENCES.length) % SENTENCES.length; renderSentence(); }

function initSentences() {
  const ref = document.getElementById('kanjiRef');
  KANJI_DATA.forEach(k => {
    const chip = document.createElement('button');
    chip.style.cssText = 'background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-family:"Noto Sans JP",sans-serif;font-size:15px;color:var(--ja-color);transition:all 0.2s;margin-bottom:4px;';
    chip.title = k.en + ' (' + k.r + ')';
    chip.textContent = k.k;
    chip.onclick = () => {
      speak(k.k, 'ja', 0.8);
      chip.style.borderColor = 'var(--accent)';
      setTimeout(() => chip.style.borderColor = 'var(--border)', 1500);
    };
    ref.appendChild(chip);
  });
  renderSentence();
}
