// Script Here
window.$ = window.jQuery = require("jquery");

let slideIndex = 1;

showSlide(slideIndex);

function showSlide(n) {
  var slides = $("#heroSlider").children(".slider__item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.addClass("d-none");
  $("#heroSlider")
    .children(".slider__item")
    .eq(slideIndex - 1)
    .removeClass("d-none");
}

function backSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

$(document).ready(function () {
  $("#slider1_prev").click(function () {
    backSlide();
  });
  $("#slider1_next").click(function () {
    nextSlide();
  });

  $("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").toggleClass("show");
    $("body").toggleClass("fixed");
  });
});
