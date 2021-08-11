let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function jumpToSlide(n) {
  showSlides(slideIndex = n);
}

function keyFunc(event) {
  switch (event.key){
    case "ArrowRight":
      nextSlide();
      break;
    case "ArrowLeft":
      prevSlide();
      break;
}};

window.addEventListener("keydown", keyFunc);

function changeImage(image) {
  const slides = document.querySelectorAll(".slide");
  slides[slideIndex-1].querySelector("img").src = image; 
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const carouselDescription = document.querySelectorAll(".carousel__description");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      carouselDescription[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  carouselDescription[slideIndex-1].style.display = "block";
}