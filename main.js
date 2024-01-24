function slides() {
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
    if (slideIndex == 0)
      numChange.innerHTML = "01"
    else
      numChange.innerHTML = "02"
    updateSlider();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    if (slideIndex == 1)
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
}
slides();

// маска
function mask() {
  document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
}
mask();
// jrjirj
function windowA() {
  let num = document.querySelector('.phone');
  let email = document.querySelector('.email');
  let messege = document.querySelector('.textarea');
  let check = document.querySelector('#happy');
  let but = document.querySelector('#but');
  let popup = document.querySelector('.popup-ths');

  let closePup = document.querySelector('.close');
  let backPup = document.querySelector('#success-button');

  function openPopup() {
    if (num.value != "" && email.value != "" && messege.value != "" && check.checked == true) {
      popup.classList.remove('hidden-popup')
    }
    console.log(check.checked);
   
  }
  but.addEventListener("click", () => {
    openPopup();
  });

  function closePopup(){
    popup.classList.add('hidden-popup')
  }
  closePup.addEventListener("click", () => {
    closePopup()();
  })
  backPup.addEventListener("click", () => {
    closePopup()();
  })

}
windowA();