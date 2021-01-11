$(document).ready(function() {
  // Open mobile menu
  $('.btn-menu').on('click', () => {
    $('.open-menu').toggle(400);
  });

  // Slide show Scripts
  let slideIndex = 1;
  showSlides(slideIndex);

  // Btn controls
  function btnControl(n) {
    showSlides(slideIndex += n);
  }

  $('.btn-prev').on('click', () => {
    btnControl(-1);
  });

  $('.btn-next').on('click', () => {
    btnControl(-1);
  });

  function showSlides(n) {
    let i;
    const slides = $(".slide");
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 2000);
  }
});