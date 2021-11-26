/*$(document).ready(function(){


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

document.getElementById('jsScroll').onclick = function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


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
      }, 1000);
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


/* SWIPER - HOME - TESTIMONIALS */

var mySwiper = new Swiper('.swiper-container_home-clients', {
  loop: true,
  speed: 1000,
  autoHeight: false,
  updateOnWindowResize: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'slide',
  slidesPerView: 5,
  scrollbar: false,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  longSwipes: false,
  grabCursor: true,
})
  

/* SWIPER - SOLO PAGES */
  

 
//});

/* }); */