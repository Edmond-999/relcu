$(document).ready(function () {
  $(".burger").click(function () {
    if ($(".nav-wrapper").hasClass("opened")) {
      $(".nav-wrapper").removeClass("opened");
    } else {
      $(".nav-wrapper").addClass("opened");
    }
  });
});
