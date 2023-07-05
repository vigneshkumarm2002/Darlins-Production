// $(document).ready(function () {

//     $("#owl-demo").owlCarousel({

//       items: 1,
//       nav: true,
//       navText: ["<span class='material-symbols-outlined nav-btn prev-slide'>chevron_left</span>", "<span class='material-symbols-outlined nav-btn prev-slide'>chevron_right</span>"],
//       loop: true,
//       autoplay: true,
//       autoplayTimeout: 2000,
//       // autoplayHoverPause: true,
//       slideSpeed: 300,
//       paginationSpeed: 400,
//       itemsDesktop: false,
//       itemsDesktopSmall: false,
//       itemsTablet: false,
//       itemsMobile: false,
//       dots: false,

//     });

//   });


  $(document).ready(function () {

    $("#owl-model").owlCarousel({
      
      autoPlay: 3000,
      nav: true,
      navText: ["<span class='material-symbols-outlined nav-btn prev-slide'>chevron_left</span>", "<span class='material-symbols-outlined nav-btn prev-slide'>chevron_right</span>"],
      autoWidth: true,
      dots: false,

    });

  });