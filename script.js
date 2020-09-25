function play(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}
function startAction(e) {
  const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const key = button.querySelector("kbd");
  const instrument = button.querySelector("span");
  if (!button) return;
  button.classList.add("playing-bg");
  key.classList.add("playing-key");
  instrument.classList.add("playing-instrument");
}
function endAction(e) {
  const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const key = button.querySelector("kbd");
  const instrument = button.querySelector("span");
  if (!button) return;
  setTimeout(function () {
    button.classList.remove("playing-bg");
    key.classList.remove("playing-key");
    instrument.classList.remove("playing-instrument");
  }, 100);
}

window.addEventListener("keydown", (e) => {
  play(e);
  startAction(e);
});
window.addEventListener("keyup", endAction);
