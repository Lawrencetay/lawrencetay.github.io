$(document).ready(function() {


// Add jQuery here


$('.nav_phone').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.phone').removeClass('hide');
$('.item.phone').addClass('show');

});

$('.nav_fingerprint').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.fingerprint').removeClass('hide');
$('.item.fingerprint').addClass('show');
});

$('.nav_bankcard').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.bankcard').removeClass('hide');
$('.item.bankcard').addClass('show');
});

$('.nav_cctv').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.cctv').removeClass('hide');
$('.item.cctv').addClass('show');
});

$('.nav_key').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.key').removeClass('hide');
$('.item.key').addClass('show');
});

$('.nav_lock').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.lock').removeClass('hide');
$('.item.lock').addClass('show');
});

$('.nav_lens').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.lens').removeClass('hide');
$('.item.lens').addClass('show');
});

$('.nav_blind').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.blind').removeClass('hide');
$('.item.blind').addClass('show');
});

$('.nav_screen').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.screen').removeClass('hide');
$('.item.screen').addClass('show');
});

$('.nav_password').click(function(event){
$('.item').removeClass('show');
$('.item').addClass('hide');

$('.item.password').removeClass('hide');
$('.item.password').addClass('show');
});

$('.nav_all').click(function(event){
$('.item').removeClass('hide');
$('.item').addClass('show');
});

$('.nav_thumbnail').click(function(event){
  $('.item').removeClass('col1of4');
  $('.item').removeClass('fullsize');
  $('.item').addClass('thumbnail');


});



$('.nav_fullsize').click(function(event){
  $('.item').removeClass('thumbnail');
  $('.item').addClass('fullsize');
  $('.item').removeClass('col1of4');

});










  });
