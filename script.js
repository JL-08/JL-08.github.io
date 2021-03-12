$(document).ready(function () {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

window.onload = function () {
  const body = document.querySelector('body');
  var preloader = document.querySelector('.preloader');

  body.style.overflow = 'visible';
  preloader.style.display = 'block';
};

const toggleHandler = () => {
  const toggler = document.querySelector('.toggler');
  const body = document.querySelector('body');

  if (toggler.checked) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
};

const clickHandler = () => {
  const toggler = document.querySelector('.toggler');
  const body = document.querySelector('body');

  toggler.checked = false;
  body.style.overflow = 'visible';
};
