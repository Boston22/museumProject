$(document).ready(function(){
  $(function() {
      $("#draggableTimeline").draggable();
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
