// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const slides = Array.from(slider.querySelectorAll('img'));
const numChange = document.querySelector('.num-change')
const slideCount = slides.length;
let slideIndex = 0;


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  if(slideIndex == 0)
    numChange.innerHTML = "01"
  else
  numChange.innerHTML = "02"
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  if(slideIndex == 1)
    numChange.innerHTML = "02"
  else
  numChange.innerHTML = "01"
  updateSlider();
}


function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

updateSlider();