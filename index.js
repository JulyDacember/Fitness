const slmContainer = document.getElementById('slm__container');
const children = slmContainer.children;
const slider = document.getElementById('slm__container');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slider__slid');

let currentSlide = 0;

backButton.addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

nextButton.addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

function updateSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (currentSlide == 0) {
    
  }
  slides[currentSlide].style.display = 'flex';
}

updateSlide();
