$(document).ready(function () {
  $(".projects .thumbnail").hover(
    function () {
      $(this).children(".cust-caption").slideDown();
    },
    function () {
      $(this).children(".cust-caption").fadeOut();
    }
  );
});
