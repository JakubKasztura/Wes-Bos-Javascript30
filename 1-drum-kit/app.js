const playSound = function (event) {
  const eventKey = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${eventKey}"]`);
  const keyElement = document.querySelector(`div[data-key="${eventKey}"]`);
  if (audio) {
    audio.currentTime = 0;
    // audio.currentTime resets audio length and make it able to use multiple times every time from beggining
    audio.play();
    keyElement.classList.add("playing");
    setTimeout(function () {
      keyElement.classList.remove("playing");
    }, 70);
  } else return;
};

window.addEventListener("keydown", playSound);

// another option is to create EventListener to transitionend - Wes Bos Explanation, cons - dont have to set setTimeout timer it fires when transition ends.

// const styleElement = function (event) {
//   if (event.propertyName === "transform") {
//     event.target.classList.remove("playing");
//   } else return;
// };

// window.addEventListener("transitionend", styleElement);
