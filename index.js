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
console.log(winWidthPCT);
}

function checkStop(){
  var time = 0;
  var timerStoped = setInterval(function(){
    tempPCT = winWidthPCT;
  }, 2500);

  var timer = setInterval(function(){
    if(tempPCT == winWidthPCT)
    {
      goToPage(winWidthPCT);
    }
  }, 100);

}

function goToPage(distance){
  if(10 < distance && distance < 15) location.href = "Antonio/settlement.html";
  if(23 < distance && distance < 28) location.href = "Mathew/revolution.html";
  if(36 < distance && distance < 41) location.href = "Mathew/CivilWar.html";
  if(49 < distance && distance < 54) location.href = "Chris/worldwarone.html";
  if(62 < distance && distance < 67) location.href = "Boston/1920sUSMafia.html";
  if(75 < distance && distance < 79) location.href = "Boston/1920sStock.html";
  if(88 < distance && distance < 93) location.href = "Chris/worldwartwo.html";
}
