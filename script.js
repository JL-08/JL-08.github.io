$(document).ready(function () {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    respondTo: 'slider',
    waitForAnimate: true,
  });
});

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
