let $slider = document.getElementsByClassName('slider')[0];
let slideIndex = 1;
let $btn = document.getElementById('sidebar-open-btn');
let $close_btn = document.getElementById('sidebar-close-btn');

showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  $slider.scrollLeft = slides[slideIndex - 1].offsetLeft;
}

$btn.addEventListener('click', function() {
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('sidebar-active');
});

$close_btn.addEventListener('click', function() {
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('sidebar-active');
});