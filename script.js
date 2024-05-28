let imagesArray = [];

function loadImage(imageName) {
  const image = new Image();
  image.src = `./css/img/${imageName}`;
  image.onload = function() {
    imagesArray.push(this);
    console.log('Изображение загружено и добавлено в массив.');
  };
  image.onerror = function() {
    console.error('Ошибка при загрузке изображения.');
  };
}

loadImage('slid__mini1.png');
loadImage('slid__mini2.png');
loadImage('slid__mini3.png');


const back = document.getElementById('back');
const next = document.getElementById('next');
const sliderContainer = document.getElementById('slider__mini'); 
const imageElements = sliderContainer.querySelectorAll('img'); 


let currentImageIndex = 0;


window.addEventListener('load', () => {
  imagesArray.forEach((imageName) => {
    loadImage(imageName);
  });

  updateSliderImages();
});

function updateSliderImages() {
  imageElements.forEach((image, index) => {
    const imageClass = `image-${index + 1}`;
    image.src = imagesArray[(currentImageIndex + index) % imagesArray.length].src;
    image.classList.add(imageClass);
  });
}

back.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
  updateSliderImages();
});

next.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
  updateSliderImages();
});
