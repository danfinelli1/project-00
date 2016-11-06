$(document).ready(function() {
var $start = $("#start");
var $board = $("#board");
var $car1 = $("#car1");
var $car2 = $("#car2");

function startGame(){
  console.log("Game Started!");
  $start.hide();
  $board.hide();
  //$board.attr("src","images/track.jpg");
  $car1.html("<img src='images/car1.png' class='cars'></img>");
  $car2.append("<img src='images/car2.png' class='cars'></img>");



}





$start.click(startGame);


});
