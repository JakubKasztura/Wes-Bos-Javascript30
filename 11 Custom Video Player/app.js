const player = document.querySelector(".player"),
  video = player.querySelector("video"),
  progress = player.querySelector(".progress"),
  progressFilled = player.querySelector(".progress__filled"),
  playButton = player.querySelector(".player__button"),
  inputVolume = player.querySelector("input[name='volume']"),
  inputSpeed = player.querySelector("input[name='playbackRate']"),
  backwardButton = player.querySelector("button[data-skip='-10']"),
  forwardButton = player.querySelector("button[data-skip='25']");

let videoStatus = false;
let intervalId;
const startAndStopPlaying = function () {
  if (!videoStatus) {
    video.play();
    playButton.innerHTML = "&#10074&#10074";
    videoStatus = true;
    intervalId = setInterval(changeProgressBar, 200);
  } else {
    video.pause();
    playButton.innerHTML = "►";
    videoStatus = false;
    clearInterval(intervalId);
  }
};
const changeVolume = function () {
  let inputVolumeValue = inputVolume.value;
  video.volume = inputVolumeValue;
};
const changeSpeed = function () {
  let inputSpeedValue = inputSpeed.value;
  video.playbackRate = inputSpeedValue;
};
const backward10s = function () {
  let seconds = 10;
  video.currentTime -= seconds;
};
const forward25s = function () {
  let seconds = 25;
  video.currentTime += seconds;
};

const changeProgressBar = function () {
  let currentTime = video.currentTime;
  progressFilled.style.flexBasis = `${currentTime}%`;
};

const initial = function () {
  inputSpeed.addEventListener("input", changeSpeed);
  inputVolume.addEventListener("input", changeVolume);
  playButton.addEventListener("click", startAndStopPlaying);
  backwardButton.addEventListener("click", backward10s);
  forwardButton.addEventListener("click", forward25s);
};

document.addEventListener("DOMContentLoaded", initial);
