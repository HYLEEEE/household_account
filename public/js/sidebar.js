$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    title = $('.title'),
    sidebar = $('.sidebar a'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  var title_value = $('.title').attr('name');  
  $('.sidebar a.active').removeClass('active');
  $('.'+title_value).addClass('active');;

  function hamburger_cross() {

    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      title.removeClass('is-open');
      title.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      title.removeClass('is-closed');
      title.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
});