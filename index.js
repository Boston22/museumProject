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
      winWidthPCT += 3; // the 3 is the "offset"
    }
  $("#timelinePB").css("width", winWidthPCT + "%");
}
}

function checkStop(){
  var time = 0;
  var timerStoped = setInterval(function(){
    tempPCT = winWidthPCT;
  }, 1500);

  var timer = setInterval(function(){
    if(tempPCT == winWidthPCT)
    {
      goToPage(winWidthPCT);
    }
  }, 100);

}

function goToPage(distance){
  if(17 < distance && distance < 23) location.href = "Antonio/settlement.html";
  if(30 < distance && distance < 36) location.href = "Mathew/revolution.html";
  if(44 < distance && distance < 50) location.href = "Mathew/CivilWar.html";
  if(55 < distance && distance < 61) location.href = "Chris/worldwarone.html";
  if(70 < distance && distance < 76) location.href = "Boston/1920sUSMafia.html";
  if(80 < distance && distance < 86) location.href = "Boston/1920sStock.html";
  if(90 < distance && distance < 96) location.href = "Chris/worldwartwo.html";
}
