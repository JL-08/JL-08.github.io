var currentSlide = 1;
var currentSlide2 = 1;
var carouselName = 'carouselImgs';
var carouselName2 = 'carouselImgs2';

function showSlide(slideIndex, className) {
  const slides = document.getElementsByClassName(className);

  if (className === carouselName) {
    if (slideIndex > slides.length) {
      currentSlide = 1;
    }
    if (slideIndex < 1) {
      currentSlide = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[currentSlide - 1].style.display = 'flex';
  } else {
    if (slideIndex > slides.length) {
      currentSlide2 = 1;
    }
    if (slideIndex < 1) {
      currentSlide2 = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[currentSlide2 - 1].style.display = 'flex';
  }
}

function nextSlide(className) {
  if (className === carouselName) {
    showSlide((currentSlide += 1), className);
  } else {
    showSlide((currentSlide2 += 1), className);
  }
}

function previousSlide(className) {
  if (className === carouselName) {
    showSlide((currentSlide -= 1), className);
  } else {
    showSlide((currentSlide2 -= 1), className);
  }
}

window.onload = function () {
  showSlide(currentSlide, carouselName);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide(carouselName);
  });
  document.getElementById('next').addEventListener('click', function () {
    nextSlide(carouselName);
  });

  showSlide(currentSlide2, carouselName2);
  document.getElementById('prev2').addEventListener('click', function () {
    previousSlide(carouselName2);
  });
  document.getElementById('next2').addEventListener('click', function () {
    nextSlide(carouselName2);
  });
};
