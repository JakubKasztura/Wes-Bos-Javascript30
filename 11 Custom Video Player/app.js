const player = document.querySelector(".player"),
  video = player.querySelector("video"),
  progressBgc = player.querySelector(".progress"),
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
    intervalId = setInterval(changeProgressBarAuto, 200);
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

const changeProgressBarAuto = function () {
  let currentTime = (video.currentTime * 100) / video.duration;
  progressFilled.style.flexBasis = `${currentTime}%`;
  if (currentTime === 100) {
    playButton.innerHTML = "►";
  }
};

const changeProgressBarClick = function (event) {
  let xCursorPosition = event.offsetX;
  let percentBarValue = ((xCursorPosition * 100) / 640).toFixed(1);
  let cursorTimeValue = ((xCursorPosition / 640) * video.duration).toFixed(1);
  progressFilled.style.flexBasis = `${percentBarValue}%`;
  video.currentTime = cursorTimeValue;
};

const bgcStartAndStopPlaying = function (event) {
  if (event.target === video) {
    startAndStopPlaying();
  } else return;
};

const initial = function () {
  inputSpeed.addEventListener("input", changeSpeed);
  inputVolume.addEventListener("input", changeVolume);
  playButton.addEventListener("click", startAndStopPlaying);
  backwardButton.addEventListener("click", backward10s);
  forwardButton.addEventListener("click", forward25s);
  progressBgc.addEventListener("click", changeProgressBarClick);
  player.addEventListener("click", bgcStartAndStopPlaying);
};

document.addEventListener("DOMContentLoaded", initial);
