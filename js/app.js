// ══════════════════════════════════════════
// PAGE NAVIGATION
// ══════════════════════════════════════════
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  btn.classList.add('active');
  synth.cancel();
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initPlayer();
  initVivaQA();
  initKanjiGame();
  initSentences();
  initDialogues();
  initCounters();
  try { navigator.wakeLock?.request('screen'); } catch (e) {}
});
