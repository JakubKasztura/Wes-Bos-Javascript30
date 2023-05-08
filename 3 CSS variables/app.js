const SPACING_SLIDER = document.getElementById("spacing"),
  BLUR_SLIDER = document.getElementById("blur"),
  COLOR_PICKER = document.getElementById("base"),
  IMAGE = document.querySelector("img");

function setStartingCSS() {
  IMAGE.style.cssText = `
  filter:blur(${BLUR_SLIDER.value}px);
  padding: ${SPACING_SLIDER.value}px;
  background: ${COLOR_PICKER.value}`;
}

SPACING_SLIDER.addEventListener("input", () => {
  const sliderValue = SPACING_SLIDER.value;
  IMAGE.style.padding = `${sliderValue}px`;
});

BLUR_SLIDER.addEventListener("input", () => {
  const sliderValue = BLUR_SLIDER.value;
  IMAGE.style.filter = `blur(${sliderValue}px)`;
});

COLOR_PICKER.addEventListener("input", () => {
  const sliderValue = COLOR_PICKER.value;
  IMAGE.style.background = `${sliderValue}`;
});
document.addEventListener("DOMContentLoaded", setStartingCSS);
