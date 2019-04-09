$(document).ready(function() {
  $('#number5').mouseenter(function() {
    $('#number5').toggleClass('steelblue');
  });
  $('#number5').mouseleave(function() {
    $('#number5').toggleClass ('white');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'white');
  });
  $('#number3').mouseenter(function() {
    $('#number3').css('color', '#C97A24');
  });
  $('#number2').click(function() {
    $('#number2').css('color', '#E4E4E6');
  });
  $('#number1').click(function() {
    $('#number1').toggleClass('open');
    $('#number1').css('color', 'goldenrod');
  });
});




















$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');
  // added a message to the console, helpful in debugging
  console.log('added white');
  $('body').toggleClass('bodyBG');
});
