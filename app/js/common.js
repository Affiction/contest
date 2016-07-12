$(document).ready(function() {
  $('.m-search-form__btn').on('click', function(e) {
    e.preventDefault();
    $('.m-search-form__input').toggleClass("m-search-form__input--active");
  });

  $('.m-search-form__input').on("keypress", function(e) {
   var code = (e.keyCode ? e.keyCode : e.which);
   if (code == 13) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest('form').submit();
  }
});
});
