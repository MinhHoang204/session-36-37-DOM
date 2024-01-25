let slideIndex = 0;

function showSlide() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
}

function prevSlide() {
    const slides = document.getElementsByClassName('slide');
    if (slideIndex === 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
    const slides = document.getElementsByClassName('slide');
    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

showSlide();