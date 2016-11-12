$(document).ready(function(){

function hideAll() {
  $('#aphrodite').hide();
  $('#x').hide();
  $('#fever').hide();
  $('#kiss').hide();
  $('#aphroditetext').hide();
  $('#xtext').hide();
  $('#fevertext').hide();
  $('#kisstext').hide();
}

hideAll();

$('.albumCover').click(function() {

    hideAll();

  switch ($(this).attr("id")) {
    case "aphroditealbum":
      $('#aphrodite').show();
      break;
    case "xalbum":
      $('#x').show();
      break;
    case "feveralbum":
      $('#fever').show();
      break;
    case "kissalbum":
      $('#kiss').show();
      break;
  }
  $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
  });
})

$('#aphroditealbum').click(function() {
  $('#aphroditetext').slideToggle();
})
$('#xalbum').click(function() {
  $('#xtext').slideToggle();
})
$('#feveralbum').click(function() {
  $('#fevertext').slideToggle();
})
$('#kissalbum').click(function() {
  $('#kisstext').slideToggle();
})

});
