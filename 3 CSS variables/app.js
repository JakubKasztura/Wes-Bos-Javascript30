const INPUTS = [...document.querySelectorAll("input")],
  IMAGE = document.querySelector("img");

const setCssProperties = function () {
  for (const input of INPUTS) {
    console.log(input);
    input.addEventListener("input", () => {
      const root = document.querySelector(":root");
      if (input.name === "spacing") {
        root.style.setProperty("--spacingValue", `${input.value}px`);
      } else if (input.name === "blur") {
        root.style.setProperty("--blurValue", `${input.value}px`);
      } else if (input.name === "base") {
        root.style.setProperty("--baseColor", `${input.value}`);
      } else return;
    });
  }
};

document.addEventListener("DOMContentLoaded", setCssProperties);
