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
  $("#gallery-pics").owlCarousel();
});