// Script Here
window.$ = window.jQuery = require("jquery");

// let slideIndex = 1;
// let doctorIndex = 0;

// showSlide(slideIndex);
// doctorSlide();

// function showSlide(n) {
//   var slides = $("#heroSlider").children(".slider__item");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   slides.addClass("d-none");
//   $("#heroSlider")
//     .children(".slider__item")
//     .eq(slideIndex - 1)
//     .removeClass("d-none");
// }

// function doctorSlide() {
//   var doctors = $(".doctor__testimonial__say");
//   doctors.addClass("d-none");
//   if (doctorIndex >= doctors.length) {
//     doctorIndex = 0;
//   }

//   console.log(doctorIndex);
//   doctors.eq(doctorIndex).removeClass("d-none");
// }

function backSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function heroTransition() {
  $(".slider__item h1").addClass("fade");
  $(".slider__item h2").addClass("fade");
  $(".slider__item a").addClass("fade");
}

function heroRemoveTransition() {
  $(".slider__item h1").removeClass("fade");
  $(".slider__item h2").removeClass("fade");
  $(".slider__item a").removeClass("fade");
}

$(document).ready(function () {
  heroTransition();
  $("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").toggleClass("show");
    $("body").toggleClass("fixed");
  });

  $(".doctor__testimonial__slider").slick({
    autoplay: true,
    arrows: false,
  });
  $(".client__testimonial__slider").slick({
    autoplay: true,
    arrows: false,
  });

  $(".hero__slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    heroRemoveTransition();
  });

  $(".hero__slider").on("afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    heroTransition();
  });
  $(".hero__slider").slick({
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
  });

  $(".slider_prev").click(function () {
    $(".hero__slider").slick("slickPrev");
  });
  $(".slider_next").click(function () {
    $(".hero__slider").slick("slickNext");
  });
});
