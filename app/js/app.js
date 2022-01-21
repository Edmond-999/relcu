$(document).ready(function() {
  $(window).scroll(function() {
       // Show service slider black content
       if (($(this).scrollTop()) > 150) {
         $('.header').addClass('fix')
       } else {
         $('.header').removeClass('fix')
       }
  });
});