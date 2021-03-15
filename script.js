window.onload = function () {
  const body = document.querySelector('body');
  const preloader = document.querySelector('.preloader');

  body.style.overflowX = 'hidden';
  body.style.overflowY = 'visible';
  preloader.style.display = 'none';
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
