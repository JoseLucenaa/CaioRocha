const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeControl = document.getElementById("volumeControl");

// Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
  } else {
    audio.pause();
    playPauseBtn.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  }
});

// Atualizar progresso
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

// Permitir arrastar a barra de progresso
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Controle de volume
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

// Função para formatar tempo (segundos → mm:ss)
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
