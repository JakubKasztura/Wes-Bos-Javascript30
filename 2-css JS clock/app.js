const HOUR_HAND = document.querySelector(".hour-hand"),
  MIN_HAND = document.querySelector(".min-hand"),
  SECOND_HAND = document.querySelector(".second-hand");

const getDate = function () {
  const currentDate = new Date();
  let currentHours = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();
  console.log(currentHours, currentMinutes, currentSeconds);
  setStartPosition(currentHours, currentMinutes, currentSeconds);
};
const setStartPosition = function (cH, cM, cS) {
  if (cH > 12) {
    cH -= 12;
  } else if (cH === 0) {
    cH = 12;
  }
  HOUR_HAND.style.transform = `rotate(${cH * 30 + 90}deg)`;
  MIN_HAND.style.transform = `rotate(${cM * 6 + 90}deg)`;
  SECOND_HAND.style.transform = `rotate(${cS * 6 + 90}deg)`;
  startCountingTime(cS, cM, cH);
};

const startCountingTime = function (cS, cM, cH) {
  setInterval(function () {
    cS += 1;
    if (cS > 60) {
      cS = 1;
      cM += 1;
      if (cM > 60) {
        cM = 1;
        cH += 1;
        if (cH > 12) {
          cH -= 12;
        } else if (cH === 0) {
          cH = 12;
        }
      }
    }
    HOUR_HAND.style.transform = `rotate(${cH * 30 + 90}deg)`;
    MIN_HAND.style.transform = `rotate(${cM * 6 + 90}deg)`;
    SECOND_HAND.style.transform = `rotate(${cS * 6 + 90 + 1}deg)`;
    setTimeout(function () {
      console.log("timed");
      SECOND_HAND.style.transform = `rotate(${cS * 6 + 90}deg)`;
    }, 50);
    console.log(cH, cM, cS);
  }, 1000);
};
window.addEventListener("DOMContentLoaded", getDate);
