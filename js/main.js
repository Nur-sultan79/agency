$(function () {
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".header-bottom__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
  });

  $(".header-btn, .menu a").on("click", function () {
    $(".header-top").toggleClass("header-top--active");
  });

  $(".works__btn").on("click", function () {
    $(".works__item--right").addClass("works__item--active");
  });

  $(".works__btn--all").on("click", function () {
    $(".works__item--right").removeClass("works__item--active");
  });

  var mixer = mixitup(".works__items");
});
