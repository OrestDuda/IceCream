// Open the Modal
function openGallery() {
  document.getElementById('gallery-modal').style.display = 'block';
}

// Close the Modal
function closeGallery() {
  document.getElementById('gallery-modal').style.display = 'none';
}

var slideIndex = 1;
show_Slides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  show_Slides((slideIndex += n));
}
function gallerySlide(n) {
  show_Slides((slideIndex = n));
}

function show_Slides(n) {
  var i;
  var slides = document.getElementsByClassName('gallery-slide');
  var dots = document.getElementsByClassName('gallery-dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
