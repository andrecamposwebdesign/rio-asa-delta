


$(".faq, .tandemflight, .blog, .contact, .abouthangglide, .aboutinstructors, .aboutrio, .photos, .videos").click(function() {
    $( ".animation" ).fadeOut( 2500 );
});

$(".home").click(function() {
    $( ".animation" ).fadeIn( 2500 );
});

$(".home").click(function() {
    $( ".faq-template, .tandemflight-template, .blog-template, .contact-template, .abouthangglide-template, .aboutinstructors-template, .aboutrio-template, .photos-template, .videos-template" ).fadeOut( 2500 );
});


$(document).ready(function() {
  	$( ".banner, .especialies" ).fadeIn( 2500 );
});


$( "a" ).click(function() {
  	$( ".banner" ).hide( 1000 );
});

$( ".link" ).click(function() {
  	$( ".link" ).hide( 10 );
});




$(window).load(function() {
	$('.loading').fadeOut();
});


$("document").ready(function() {
  $( ".hanggliding1" ).animate({
    left: 2071,
    top:450,
  }, 33500 );
  $( ".hanggliding2" ).animate({
    left: 2071,
  }, 113500 );
  $( ".hanggliding3" ).animate({
    left: -200,
  }, 113500 );
  $( ".hanggliding4" ).animate({
    left: -200,
    top:200,
  }, 53500 );
  $( ".hanggliding5" ).animate({
    left: -200,
    top:200,
  }, 23500 );
  $( ".hanggliding6" ).delay( 34000 ).animate({
    left: 2071,
  }, 4500 );
  $( ".logo-center" ).delay( 0 ).animate({
    left: 2036,
    
  }, 43500 );
  $( ".logo-center img" ).delay( 0 ).animate({
    height:70,
    
  }, 8500 );



  $( ".cloud1" ).animate({
    left: 11471,
  }, 673500 );
  $( ".cloud2" ).animate({
    left: 11471,
  }, 673500 );
  $( ".cloud3" ).animate({
    left: 11471,
  }, 1173500 );
  $( ".cloud4" ).animate({
    left: 8471,
  }, 1173500 );
  $( ".cloud5" ).animate({
    left: 8471,
  }, 1673500 );
});