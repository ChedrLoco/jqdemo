$(document).ready(init);

function init(){
  $('#new').click(newgame);
  $('#flip').click(flip);
}

function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/games/new',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      console.log('rsp:', rsp);
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#heads').text(rsp.heads);
      $('#tails').text(rsp.tails);

    }
  })
}
function flip(){
  const flipResult = Math.floor(Math.random() * 2);
  const gameId = $('#id').text();
  $.ajax({
    url: `/games/${gameId}/flip`,
    method: 'put',
    dataType: 'json',
    data: { flipResult },
    success: function(rsp){
      console.log('rsp:', rsp);
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#heads').text(rsp.heads);
      $('#tails').text(rsp.tails);

    }
  })
}
