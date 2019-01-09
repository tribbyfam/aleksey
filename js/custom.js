/*======================= 
      Services      
========================*/
$(function () {
  // animate on scroll
  new WOW().init();
});

/*======================= 
      Students      
========================*/
$(function () {
  $("#students").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});
/*======================= 
      Gallery      
========================*/
$(function () {
  $("#gallery-pics").owlCarousel({
    items: 3,
    autoplay: true,
    mergeFit: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
/*======================= 
      Testimonials      
========================*/
$(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    mergeFit: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
/*=================================
            Navigation
=================================*/
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("alex-top-nav");
    } else {
      $("nav").addClass("alex-top-nav");
    }
  });
});