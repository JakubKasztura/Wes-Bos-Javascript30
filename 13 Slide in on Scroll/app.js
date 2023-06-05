// runs function every 20milliseconds
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const images = [...document.querySelectorAll("img")];
const getImagesOffset = function () {
  const imagesOffset = [];
  images.forEach((image) => {
    imagesOffset.push(image.offsetTop);
  });

  return imagesOffset;
};
const slideInImages = function () {
  const imagesOffset = getImagesOffset();
  let scrollYPos = window.scrollY.toFixed(0);
  console.log(scrollYPos);

  if (scrollYPos < 200) {
    for (image of images) {
      image.classList.remove("active");
    }
  }

  for (let i = 0; i < images.length; i++) {
    if (i === 1) {
      if (scrollYPos > imagesOffset[i] / 2.3) {
        images[i].classList.add("active");
      }
    } else if (i === 2 || i === 3) {
      if (scrollYPos > imagesOffset[i] / 1.8) {
        images[i].classList.add("active");
      }
    } else if (i === 4) {
      if (scrollYPos > imagesOffset[i] / 1.3) {
        images[i].classList.add("active");
      }
    } else if (scrollYPos > imagesOffset[i] / 3.1) {
      images[i].classList.add("active");
    }
  }
  for (let i = 0; i < images.length; i++) {
    if (i === 1) {
      if (scrollYPos > imagesOffset[i] * 1.3) {
        images[i].classList.remove("active");
      }
    } else if (i === 2 || i === 3) {
      if (scrollYPos > imagesOffset[i] * 1.2) {
        images[i].classList.remove("active");
      }
    } else if (i === 4) {
      if (scrollYPos > imagesOffset[i] * 1.1) {
        images[i].classList.remove("active");
      }
    } else if (scrollYPos > imagesOffset[i] * 1.5) {
      images[0].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", debounce(slideInImages));
