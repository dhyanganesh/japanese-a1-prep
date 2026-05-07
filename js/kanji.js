// ══════════════════════════════════════════
// KANJI GAME — Full randomizer, no repeats per round
// ══════════════════════════════════════════
let activeTopics = new Set([1, 2, 3, 4, 5]);
let kanjiPool = [];
let roundQueue = [];
let roundIdx = 0;
let currentKanji = null;
let answered = false;
let scoreCorrect = 0, scoreWrong = 0, streak = 0, roundNum = 1;

function shuffle(a) { return [...a].sort(() => Math.random() - 0.5); }

function buildKanjiPool() {
  kanjiPool = KANJI_DATA.filter(k => activeTopics.has(k.topic));
}

function startNewRound() {
  roundQueue = shuffle([...kanjiPool]);
  roundIdx = 0;
  roundNum++;
  document.getElementById('roundNum').textContent = 'Round ' + roundNum;
  document.getElementById('roundComplete').classList.remove('show');
  showKanji();
}

function buildKanjiPool_andReset() {
  buildKanjiPool();
  roundQueue = shuffle([...kanjiPool]);
  roundIdx = 0;
  roundNum = 1;
  document.getElementById('roundNum').textContent = 'Round 1';
  document.getElementById('roundComplete').classList.remove('show');
  showKanji();
}

function updateRoundProgress() {
  document.getElementById('roundProgress').textContent = roundIdx + ' / ' + kanjiPool.length;
}

function showKanji() {
  if (!roundQueue.length) return;
  answered = false;
  currentKanji = roundQueue[roundIdx];
  document.getElementById('kanjiDisplay').textContent = currentKanji.k;
  document.getElementById('kanjiDisplay').className = 'kanji-display' + (currentKanji.k.length > 3 ? ' multi' : '');
  document.getElementById('kTopicBadge').textContent = 'Topic ' + currentKanji.topic;
  document.getElementById('kanjiHint').textContent = 'What does this mean in English?';
  document.getElementById('kanjiCard').className = 'kanji-card';
  document.getElementById('revealArea').innerHTML = '';
  document.getElementById('nextKanjiBtn').disabled = true;
  document.getElementById('roundComplete').classList.remove('show');
  updateRoundProgress();

  const wrong = shuffle(KANJI_DATA.filter(k => k.en !== currentKanji.en)).slice(0, 3);
  const opts = shuffle([currentKanji, ...wrong]);
  document.getElementById('optionsGrid').innerHTML = opts.map(o =>
    '<button class="option-btn" onclick="checkKanji(\''
    + o.en.replace(/'/g, "\\'") + "','"
    + currentKanji.en.replace(/'/g, "\\'") + '\',this)">' + o.en + '</button>'
  ).join('');
}

function nextKanji() {
  roundIdx++;
  if (roundIdx >= roundQueue.length) {
    const pct = Math.round(scoreCorrect / (scoreCorrect + scoreWrong) * 100) || 0;
    document.getElementById('roundSummary').textContent =
      'Score this session: ' + scoreCorrect + ' correct, ' + scoreWrong + ' wrong (' + pct + '%). Starting new round!';
    document.getElementById('roundComplete').classList.add('show');
    document.getElementById('nextKanjiBtn').disabled = true;
    setTimeout(() => startNewRound(), 2200);
    return;
  }
  showKanji();
}

function checkKanji(chosen, correct, btn) {
  if (answered) return;
  answered = true;
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent.trim() === correct) b.classList.add('correct');
  });
  document.getElementById('nextKanjiBtn').disabled = false;

  if (chosen === correct) {
    btn.classList.add('correct');
    document.getElementById('kanjiCard').classList.add('correct');
    scoreCorrect++; streak++;
    document.getElementById('revealArea').innerHTML =
      '<div class="reveal-text">✅ Correct! ' + currentKanji.k + '</div>'
      + '<div class="reveal-romaji">' + currentKanji.r + '</div>';
    speak(currentKanji.k, 'ja', 0.8);
  } else {
    btn.classList.add('wrong');
    document.getElementById('kanjiCard').classList.add('wrong');
    scoreWrong++; streak = 0;
    document.getElementById('revealArea').innerHTML =
      '<div class="reveal-text">❌ It was: ' + currentKanji.en + '</div>'
      + '<div class="reveal-romaji">' + currentKanji.k + ' — ' + currentKanji.r + '</div>';
    speak(currentKanji.k, 'ja', 0.8);
  }
  document.getElementById('scoreCorrect').textContent = scoreCorrect;
  document.getElementById('scoreWrong').textContent = scoreWrong;
  document.getElementById('scoreStreak').textContent = streak;
}

function skipKanji() {
  if (!answered) {
    scoreWrong++; streak = 0;
    document.getElementById('scoreWrong').textContent = scoreWrong;
    document.getElementById('scoreStreak').textContent = streak;
  }
  roundIdx++;
  if (roundIdx >= roundQueue.length) { setTimeout(() => startNewRound(), 400); return; }
  showKanji();
}

function initKanjiGame() {
  const tf = document.getElementById('topicFilter');
  const topicLabels = ['Names & Identity', 'Family & Japan', 'Food', 'Home & Location', 'Time & Days'];
  [1, 2, 3, 4, 5].forEach(t => {
    const p = document.createElement('button');
    p.className = 'topic-pill active';
    p.textContent = 'T' + t + ': ' + topicLabels[t - 1];
    p.onclick = () => {
      if (activeTopics.has(t) && activeTopics.size > 1) {
        activeTopics.delete(t); p.classList.remove('active');
      } else {
        activeTopics.add(t); p.classList.add('active');
      }
      buildKanjiPool_andReset();
    };
    tf.appendChild(p);
  });

  buildKanjiPool();
  roundQueue = shuffle([...kanjiPool]);
  updateRoundProgress();
  showKanji();
}
