// ══════════════════════════════════════════
// TTS ENGINE
// ══════════════════════════════════════════
const synth = window.speechSynthesis;
let jaVoice = null, enVoice = null;

function loadVoices() {
  const v = synth.getVoices();
  jaVoice = v.find(x => x.lang === 'ja-JP' && x.name.includes('Google'))
         || v.find(x => x.lang === 'ja-JP' && !x.localService)
         || v.find(x => x.lang.startsWith('ja'));
  enVoice = v.find(x => x.lang === 'en-US' && x.name.includes('Google'))
         || v.find(x => x.lang === 'en-US')
         || v.find(x => x.lang.startsWith('en'));

  const bar = document.getElementById('statusBar');
  if (v.length && bar) {
    bar.textContent = jaVoice
      ? '✅ ' + v.length + ' voices ready — Japanese found!'
      : '⚠️ No Japanese voice — install Google TTS in phone settings';
  }
}

if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;
setTimeout(loadVoices, 600);

function speak(text, lang, rate, onend) {
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (lang === 'ja') {
    if (jaVoice) u.voice = jaVoice;
    u.lang = 'ja-JP';
    u.rate = rate || 0.85;
    u.pitch = 1.05;
  } else {
    if (enVoice) u.voice = enVoice;
    u.lang = 'en-US';
    u.rate = 0.95;
  }
  if (onend) u.onend = onend;
  synth.speak(u);
}
