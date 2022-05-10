const slides = document.getElementsByClassName("carousel-item");
const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");
const totalSlides = slides.length;
let slidePosition = 0;

//next button
nextBtn.addEventListener("click", moveToNextSlide);
function moveToNextSlide() {
  hideAllSlides();
  //if else statement
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

//previous button
prevBtn.addEventListener("click", moveToPrevSlide);
function moveToPrevSlide() {
  hideAllSlides();

  //check for position 0
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

//hides all slides
function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}
