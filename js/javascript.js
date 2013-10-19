




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


$(document).ready(function() {
  $( ".hanggliding1" ).animate({
    left: 1571,
    top:450,
  }, 33500 );
  $( ".hanggliding2" ).animate({
    left: 1471,
  }, 113500 );
  $( ".hanggliding3" ).animate({
    left: 0,
  }, 113500 );
  $( ".hanggliding4" ).animate({
    left: 0,
    top:200,
  }, 53500 );
  $( ".hanggliding5" ).animate({
    left: 0,
    top:200,
  }, 23500 );
  $( ".hanggliding6" ).delay( 37000 ).animate({
    left: 1571,
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
});