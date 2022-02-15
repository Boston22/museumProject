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
  if(13 < distance && distance < 18) location.href = "Antonio/settlement.html";
  if(24 < distance && distance < 29) location.href = "Mathew/revolution.html";
  if(39 < distance && distance < 45) location.href = "Mathew/CivilWar.html";
  if(51 < distance && distance < 57) location.href = "Chris/worldwarone.html";
  if(66 < distance && distance < 72) location.href = "Boston/1920sUSMafia.html";
  if(79 < distance && distance < 84) location.href = "Boston/1920sStock.html";
  if(92 < distance && distance < 98) location.href = "Chris/worldwartwo.html";
}
