$(document).ready(function(){
/*SCROLL TO TOP*/
window.addEventListener('scroll', e => {
  var el = document.getElementById('jsScroll');
  if(window.scrollY > 2000) {
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




/*SCROLL TO TOP*/
/*
$(document).ready(function(){
    $(this).scrollTop(0);
});
*/

// © Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others

// Works on internal links, ignores external links or links containing #
function internalLink(myLink) {
    return (myLink.host == window.location.host);
}
$('a').each(function() {
  if (internalLink(this) && (this).href.indexOf('#') === -1) {
  $(this).click(function(e){
  e.preventDefault();
  var moduleURL = jQuery(this).attr("href");
  setTimeout( function() { window.location = moduleURL }, 1000 );
  // Class that has page out interaction tied to click
  $('.page-transition').click();
});
    }
});


/*DROPDOWN LANGUAGE*/
jQuery(document).ready(function($) {
  
   $(".navbar-dropdown_wrapper").click(function(){
       $(".navbar-dropdown_wrapper ul").show();
     })
  $(".navbar-dropdown_wrapper ul").mouseleave(function(){
    $(".navbar-dropdown_wrapper ul").hide(); 
  });
   
  $(".navbar-dropdown_wrapper li a").click(function(){
       $(".navbar-dropdown_wrapper li a").removeClass('sel');
       $(this).addClass('sel');
       var selectedValue = $(this).text();
       var showLang = selectedValue.substring(0, 20);
       $('.navbar-dropdown_wrapper .nav-dropdown_current').html(showLang);
       $('.navbar-dropdown_wrapper .nav-dropdown_current').attr("title", selectedValue);
       $('.navbar-dropdown_wrapper .hover').html(selectedValue);
     })
     
   });    
     
     
     /*SHUFFLE*/
     
      
       



/*function loadallshuffle() { */

var Shuffle = window.Shuffle;
var element = document.querySelector('.flex-row');
var sizer = element.querySelector('.x-sizer');


var shuffleInstance = new Shuffle(element, {
	itemSelector: '.shuffle-box',
  sizer: sizer,
   buffer:0,
    speed: 200,
   roundTransforms: true,
   useTransforms: true,
});

$("#all").on("click", function(){
   shuffleInstance.filter();
});
$("#btnbar").on("click", function(){
   shuffleInstance.filter('bar');
});
$("#btnkrov").on("click", function(){
   shuffleInstance.filter('krov');
});
$("#btnkupola").on("click", function(){
   shuffleInstance.filter('kupola');
});

$("#btnwizdome").on("click", function(){
   shuffleInstance.filter('wizdome');
});


  setTimeout(() => {
      shuffleInstance.update();
    console.log("UUUUUUpdated");
  
   }, 2000)


  



/*}
/*
  setTimeout(() => {
    shuffle.layout();
    console.log("Hello world!");
   }, 200)
   */



/*
document.addEventListener("DOMContentLoaded", () => {

loadallshuffle();
});*/
/*
================================================================================
SWIPER HEADER
================================================================================
*/

var menu = ['', '', '', '', '', '']  
  var mySwiper = new Swiper ('.swiper-container', {
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
  
  
  
/*
================================================================================
SWIPER TESTIMONIALS
================================================================================
*/

var menu = ['', '', '', '', '', '']  
  var mySwiper = new Swiper ('.swiper-container_home-testimonials', {
   loop: true,
		speed: 1000,
   // spaceBetween: 100,
   // initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    updateOnWindowResize: true,
    // Optional parameters
  //  direction: 'vertical',
      // delay between transitions in ms
    
    effect: 'slide',
    
    /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/

    slidesPerView: 1,
    observer: true,
  observeParents: true,
  observeSlideChildren: true,
  longSwipes: false,
    grabCursor: true,
  })     
  
  
  /*
================================================================================
SWIPER TESTIMONIALS
================================================================================
*/

var menu = ['', '', '', '', '', '']  
  var mySwiper = new Swiper ('.swiper-container_home-clients', {
   loop: true,
		speed: 1000,
   // spaceBetween: 100,
   // initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    updateOnWindowResize: true,
    // Optional parameters
  //  direction: 'vertical',
      // delay between transitions in ms
    	autoplay: {
				delay: 3000,
				disableOnInteraction: false,
},
    effect: 'slide',
    
    /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/

    slidesPerView: 5,
    scrollbar: false,
    observer: true,
  observeParents: true,
  observeSlideChildren: true,
  longSwipes: false,
    grabCursor: true,
  })     
  
  
     
     
     
  });



  /* NEŠTO*/
  $('.navbar-link-wrapper').click(function() {
    if ($(this).is("active"))
      $('.navbar-link-wrapper').not(this).removeClass('active');
    else
      $(this).addClass('active');
    $('.navbar-link-wrapper').not(this).removeClass('active');
  });
  