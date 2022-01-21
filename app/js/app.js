$(document).ready(function () {
  $(".burger").click(function () {
    if ($(".header-nav").hasClass("opened")) {
      $(".header-nav").removeClass("opened");
    } else {
      $(".header-nav").addClass("opened");
    }
  });
});
