/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

var animating = false;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".reveal-image").addClass("full-image");
      $(".reveal-text").removeClass("hide");
      $(".reveal-text").removeClass("hidden");
      if (!$(".reveal-lead").hasClass("hidden") && !animating) {
        animating = true;
        setTimeout(function() {
          if ($(window).scrollTop() > 100) {
            $(".reveal-lead").addClass("hidden");
          }
          animating = false;
        }, 500);
      }
    } else {
      $(".reveal-image").removeClass("full-image");
      $(".reveal-text").addClass("hide");
      $(".reveal-text").addClass("hidden");
      $(".reveal-lead").removeClass("hidden");
    }
});