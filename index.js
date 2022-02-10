$(document).ready(function(){
  $(function() {
    $('#draggableTimeline').draggable({
  axis: "x",
  start: function (event, ui) {
      start = ui.position.top;
  },
  stop: function (event, ui) {
      stop = ui.position.top;

      if (start > stop) {
          $('.draggable').css({top: ui.originalPosition.top + 'px'});
      }
  }
});
  });
var timer = setInterval(function(){
  progressTimeline();
}, 100);
});

function progressTimeline(){
  var offset = parseInt($("#draggableTimeline").offset().left);
  var winWidth = $(window).width();
  if(offset < winWidth)
  {
    var winWidthPCT = Math.floor(offset/winWidth * 100);
  $("#timelinePB").css("width", winWidthPCT + "%");
}
}
