// Script Here
window.$ = window.jQuery = require("jquery");

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

function showDoctor(n) {
  console.log($(".doctors").children());
  $(".doctors").children().removeClass("show");
  $(".doctors").children().eq(n).addClass("show");
}

$(".accordion__item__answer").hide();

$(document).ready(function () {
  $(".accordion__item").click(function () {
    $(this).children(".accordion__item__answer").slideToggle();
    $(this).children(".accordion__item__question").toggleClass("active");
    $(this).siblings().children(".accordion__item__answer").slideUp();
    $(this)
      .siblings()
      .children(".accordion__item__question")
      .removeClass("active");
  });

  showDoctor(0);

  heroTransition();

  $("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").toggleClass("show");
    $("body").toggleClass("fixed");
  });
  $(".doctor__testimonial__slider").on("afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    console.log(currentSlide);
    showDoctor(currentSlide);
  });
  $(".doctor__testimonial__slider").slick({
    autoplay: true,
    arrows: false,
  });
  $(".client__testimonial__slider").slick({
    autoplay: true,
    arrows: false,
  });
  $(".sop--testimonial__slider").slick({
    autoplay: true,
    arrows: false,
  });

  $(".hero__slider").on("beforeChange", function () {
    heroRemoveTransition();
  });

  $(".hero__slider").on("afterChange", function () {
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
