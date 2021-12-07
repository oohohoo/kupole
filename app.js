/*$(document).ready(function(){

/* 100vh fix*/



/* window.addEventListener('resize', () => { 
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
})

 */

/*
================================================================================
OPEN CLOSE MOBILE MENU
================================================================================
*/
/*
function openMenu() {
  $("#mobmen").fadeIn();
  $("#open-menu").hide();
}

function closeMenu() {
  $("#mobmen").fadeOut();
  $("#open-menu").show();
}




/*
================================================================================
100 vh FIX - MOBILE MENU
================================================================================
*/
/*
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


/*
================================================================================
DISABLE SCROLL SCRIPT ?????
================================================================================
*/
var Webflow = Webflow || [];
Webflow.push(function () {
    var $body = $(document.body);
    var scrollPosition = 0;

    $('[scroll="disable"]').on('click', function () {
        var oldWidth = $body.innerWidth();
        scrollPosition = window.pageYOffset;
        $body.css('overflow', 'hidden');
        $body.css('position', 'fixed');
        $body.css('top', `-${scrollPosition}px`);
        $body.width(oldWidth);
    });
    $('[scroll="enable"]').on('click', function () {
        if ($body.css('overflow') != 'hidden') { scrollPosition = window.pageYOffset; }
        $body.css('overflow', '');
        $body.css('position', '');
        $body.css('top', '');
        $body.width('');
        $(window).scrollTop(scrollPosition);
    });
    $('[scroll="both"]').on('click', function () {
        if ($body.css('overflow') !== 'hidden') {
            var oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css('overflow', 'hidden');
            $body.css('position', 'fixed');
            $body.css('top', `-${scrollPosition}px`);
            $body.width(oldWidth);
        } else {
            $body.css('overflow', '');
            $body.css('position', '');
            $body.css('top', '');
            $body.width('');
            $(window).scrollTop(scrollPosition);
        }
    });
});



/* SCROLL TO TOP */

/* jQuery(document).ready(function ($) { */

 
window.addEventListener('scroll', e => {
  var el = document.getElementById('jsScroll');
  if (window.scrollY > 2000) {
    el.classList.add('visible');
  } else {
    el.classList.remove('visible');
  }
});
/* 
document.getElementById('jsScroll').onclick = function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
 */

/* PAGE TRANSITION */

function internalLink(myLink) {
  return (myLink.host == window.location.host);
}
$('a').each(function () {
  if (internalLink(this) && (this).href.indexOf('#') === -1) {
    $(this).click(function (e) {
      e.preventDefault();
      var moduleURL = jQuery(this).attr("href");
      setTimeout(function () {
        window.location = moduleURL
      }, 800);
      // Class that has page out interaction tied to click
      $('.page-transition').click();
    });
  }
});



/* DROPDOWN LANGUAGE */



  $(".navbar-dropdown_wrapper").click(function () {
    $(".navbar-dropdown_wrapper ul").show();
  })

  $(".navbar-dropdown_wrapper ul").mouseleave(function () {
    $(".navbar-dropdown_wrapper ul").hide();
  });

  $(".navbar-dropdown_wrapper li a").click(function () {
    $(".navbar-dropdown_wrapper li a").removeClass('sel');
    $(this).addClass('sel');
    var selectedValue = $(this).text();
    var showLang = selectedValue.substring(0, 20);
    $('.navbar-dropdown_wrapper .nav-dropdown_current').html(showLang);
    $('.navbar-dropdown_wrapper .nav-dropdown_current').attr("title", selectedValue);
    $('.navbar-dropdown_wrapper .hover').html(selectedValue);
  })


     

/* HOME SHUFFLE.JS */

/*function loadallshuffle() { */

var Shuffle = window.Shuffle;
var element = document.querySelector('.flex-row');
var sizer = element.querySelector('.x-sizer');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.shuffle-box',
  sizer: sizer,
  buffer: 0,
  speed: 300,
  roundTransforms: true,
  useTransforms: true,
});

$("#all").on("click", function () {
  shuffleInstance.filter();
});
$("#btnbar").on("click", function () {
  shuffleInstance.filter('bar');
});
$("#btnkrov").on("click", function () {
  shuffleInstance.filter('krov');
});
$("#btnkupola").on("click", function () {
  shuffleInstance.filter('kupola');
});

$("#btnwizdome").on("click", function () {
  shuffleInstance.filter('wizdome');
});

setTimeout(() => {
  shuffleInstance.layout();
  console.log("IDEMOO");

}, 3000)

/* SHUFFLE ACTIVE BUTTON */
$('.navbar-link-wrapper').click(function() {
  if ($(this).is("active"))
    $('.navbar-link-wrapper').not(this).removeClass('active');
  else
    $(this).addClass('active');
  $('.navbar-link-wrapper').not(this).removeClass('active');
});

/*
document.addEventListener("DOMContentLoaded", () => {

loadallshuffle();
});*/


/* SWIPER - HOME - HEADER */

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoHeight: false,
  updateOnWindowResize: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  longSwipes: false,
  grabCursor: true,
})
 

/* SWIPER - HOME - TESTIMONIALS */

var mySwiper = new Swiper('.swiper-container_home-testimonials', {
  loop: true,
  speed: 1000,
  autoHeight: false,
  updateOnWindowResize: true,
  effect: 'slide',
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  longSwipes: false,
  grabCursor: true,
})


/* SWIPER - HOME - CLIENTS */

var mySwiper = new Swiper('.swiper-container_home-clients', {
  loop: true,
  speed: 1000,
/*   autoHeight: false,
  updateOnWindowResize: true, */
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'slide',
  slidesPerView: 5,
/*   scrollbar: false,
  observer: true,
  observeParents: true,
  observeSlideChildren: true, */
  longSwipes: false,
  grabCursor: true,
  resistanceRatio : 0,
  breakpoints: {
      300: {
          slidesPerView: 2,
          spaceBetween: 24,
          resistanceRatio: 0.85
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 28,
          resistanceRatio: 0.85
      },
      980: {
          slidesPerView: 4,
          spaceBetween: 28,
          resistanceRatio: 0.85
      },
      1280: {
          slidesPerView: 5,
          spaceBetween: 32,
          resistanceRatio : 0
      }
  }
});
  

/* SWIPER - SOLO PAGES */
  

 
//});

/* }); */