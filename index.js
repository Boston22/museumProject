let winWidthPCT;
let tempPCT;
$(document).ready(function(){
  $(function() {
    $('#draggableTimeline').draggable({
  axis: "x",
  containment:"window",
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
checkStop();
});

function progressTimeline(){
  var offset = parseInt($("#draggableTimeline").offset().left);
  var winWidth = $(window).width();
  if(offset < winWidth)
  {
    winWidthPCT = Math.floor(offset/winWidth * 100);
    if(winWidthPCT > .5){
      winWidthPCT += 2; // the 2.5 is the "offset"
    }
  $("#timelinePB").css("width", winWidthPCT + "%");
}
}

function checkStop(){
  var time = 0;
  var timerStoped = setInterval(function(){
    if(tempPCT == winWidthPCT)
    {
      goToPage(winWidthPCT);
    }
    tempPCT = winWidthPCT;
  }, 500);
}

function goToPage(distance){
  if(5 < distance && distance < 14) location.href = "Antonio/settlement.html";
  if(20 < distance && distance < 27) location.href = "Mathew/revolution.html";
  if(33 < distance && distance < 40) location.href = "Mathew/CivilWar.html";
  if(46 < distance && distance < 53) location.href = "Chris/worldwarone.html";
  if(60 < distance && distance < 67) location.href = "Boston/1920sUSMafia.html";
  if(72 < distance && distance < 79) location.href = "Boston/1920sStock.html";
  if(87 < distance && distance < 94) location.href = "Chris/worldwartwo.html";
}
