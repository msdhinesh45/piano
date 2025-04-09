const keys = document.querySelectorAll('.key');
let playedNotes = [];

keys.forEach(key => {
  key.addEventListener("click", () => {
    playKey(key);
    playedNotes.push(key.dataset.note);
  });
});

function playKey(key) {
  const keyAudio = document.getElementById(key.dataset.note);
  if (keyAudio) {
    keyAudio.currentTime = 0;
    keyAudio.play();
    key.classList.add("active");
    keyAudio.addEventListener("ended", () => {
      key.classList.remove("active");
    });
  }
}

function playAllNotes() {
  let delay = 0;
  playedNotes.forEach(note => {
    setTimeout(() => {
      const audio = document.getElementById(note);
      const key = document.querySelector(`.key[data-note="${note}"]`);
      if (audio && key) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("active");
        audio.addEventListener("ended", () => {
          key.classList.remove("active");
        });
      }
    }, delay);
    delay += 600;
  });
}
