$(document).ready(initialize);

function initialize() {
  $('#btn1').click(doStuff);
  $('#btn2').click(timer);
  $('#btn3').click(clear);
  $('#btn4').click(numbers);
}

function doStuff() {
  $('h1').css('color', 'red');
  $('h2').css('background-color', 'blue');
  $('h3').text('new text');
  $('h3').toggleClass('awesome');
  $('#alpha').addClass('cool');
  let txt = $('#txt1').val();
  $('h1').css('background-color', txt);
  $('body').css('background-color', randomColor());
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random();

  return `rgba(${red}, ${g}, ${b}, ${a})`;
}

function timer() {
  id = setInterval(function(){
    $('body').css('background-color', randomColor());
  }, 100);
}

function clear() {
  clearInterval(id);
}

function numbers() {
  $('#numbers').empty();
  for (let i = 0; i < 20; i++)
  {
    let r = Math.random();
    $('#numbers').append(`<li>${r}</li>`);
  }
}
