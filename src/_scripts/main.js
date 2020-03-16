// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
//var Link = require('../_modules/link/link');

var par = require('parsleyjs');



  $('.mc-modal').click(function(){
    $('.newsletter-container').fadeOut("slow");
    $('#mailchimp-fields').delay( 400 ).fadeIn("slow");
    return false;
  });
 $('.mc-close').click(function(){
    $('#mailchimp-fields').fadeOut("slow");
    $('.newsletter-container').delay( 400 ).fadeIn("slow");
  });
    



$('.warning-close').click(function(){
$('.warning-container').fadeOut( "slow");
});
  
$('.menu').click(function(){
$('.menu-overlay').addClass('overlay-open');
$('#mobile-items').hide();

return false;
});

$('.close-button').click(function(){
$('.menu-overlay').removeClass('overlay-open');
});


//Market Mobile Navigation


$('#themarket').click(function(){
$('.market-overlay').addClass('overlay-open');
$('.menu-overlay').removeClass('overlay-open')

return false;
});


$('.close-button-2').click(function(){
$('.market-overlay').removeClass('overlay-open');
$('.menu-overlay').addClass('overlay-open');
});
       


if (window.location.href == "http://miesfelds.com/" || window.location.href == "http://miesfelds.com/index.html" ) {
    $('#button, #mobile-specials').click(function() {
    $('.menu-overlay').removeClass('overlay-open');
    $('html, body').animate({
    scrollTop: $('#market').offset().top}, 1000)});
    return false;

}

else{
  $('#button,#mobile-specials').click(function () {
  window.location = "http://miesfelds.com/images/Miesfelds_weekly_specials.pdf"; 

  
});
}


  $('#success-button').click(function(){
    window.location = "http://miesfelds.com/index.html";
    return false;
  });

 $('#fail-button').click(function(){
    window.location = "http://miesfelds.com/contact.html";
    return false;
  });

// Stop image theft -----
$('img').on('dragstart', function(event) { event.preventDefault(); });

