window.onscroll = function() {navScroll()};

function navScroll() {
  if (window.pageYOffset > 500) {
    document.querySelector('nav').style.position = 'fixed';
    document.querySelector('nav').style.top = 0;
  } else {
    document.querySelector('nav').style.position = 'absolute';
    document.querySelector('nav').style.top = 500 + 'px';
  }
};

const photo1a = document.getElementById('photo1a');
const photo1b = document.getElementById('photo1b');
const photo2 = document.getElementById('photo2');
const photo3 = document.getElementById('photo3');
const photo4 = document.getElementById('photo4');
const caption1 = document.getElementById('photo1-caption');
const caption2 = document.getElementById('photo2-caption');
const caption3 = document.getElementById('photo3-caption');
const caption4 = document.getElementById('photo4-caption');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentSlide = 1;

next.onclick = () => {
  if (currentSlide < 4) {
    currentSlide++;
  } else {
    currentSlide = 1;
  };
  if (currentSlide === 1) {
    photo1a.style.display = 'block';
    photo1b.style.display = 'block';
    photo4.style.display = 'none';
    caption1.style.display = 'block';
    caption4.style.display = 'none';
  } else if (currentSlide === 2) {
    photo2.style.display = 'block';
    photo1a.style.display = 'none';
    photo1b.style.display = 'none';
    caption2.style.display = 'block';
    caption1.style.display = 'none';
  } else if (currentSlide === 3){
    photo3.style.display = 'block';
    photo2.style.display = 'none';
    caption3.style.display = 'block';
    caption2.style.display = 'none';
  } else {
    photo4.style.display = 'block';
    photo3.style.display = 'none';
    caption4.style.display = 'block';
    caption3.style.display = 'none';
  };
};

prev.onclick = () => {
  if (currentSlide > 1) {
    currentSlide--;
  } else {
    currentSlide = 4;
  };
  if (currentSlide === 1) {
    photo1a.style.display = 'block';
    photo1b.style.display = 'block';
    photo2.style.display = 'none';
    caption1.style.display = 'block';
    caption2.style.display = 'none';
  } else if (currentSlide === 2) {
    photo2.style.display = 'block';
    photo3.style.display = 'none';
    caption2.style.display = 'block';
    caption3.style.display = 'none';
  } else if (currentSlide === 3) {
    photo3.style.display = 'block';
    photo4.style.display = 'none';
    caption3.style.display = 'block';
    caption4.style.display = 'none';
  } else {
    photo4.style.display = 'block';
    photo1a.style.display = 'none';
    photo1b.style.display = 'none';
    caption4.style.display = 'block';
    caption1.style.display = 'none';
  };
};
