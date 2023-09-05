
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const images = document.querySelectorAll(".photos img");

let imageIndex = 0;

nextButton.onclick = function () {
  images[imageIndex].classList.remove("show");

  imageIndex = imageIndex + 1;

  if (imageIndex == 4) {imageIndex = 0};

  images[imageIndex].classList.add("show");
};

prevButton.onclick = function () {
  images[imageIndex].classList.remove("show");
  
  imageIndex = imageIndex - 1;

  if (imageIndex == -1) {imageIndex = 3};

  images[imageIndex].classList.add("show");
};


/*const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});*/
