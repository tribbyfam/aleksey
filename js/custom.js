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
    autoplayHoverPause: true,
    responsive: {
      //breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      },
      // breakpoint from 768 up
      768: {
        items: 3
      }
    }
  });
});

$(function () {
  $("#gallery").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
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
      $("#back-to-top").fadeOut();
    } else {
      $("nav").addClass("alex-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});
// smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function () {
    event.preventDefault();
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

// Close mobile menu on click //
$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});