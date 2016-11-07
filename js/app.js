$(document).ready(function() {
var $start = $("#start");
var $myCanvas = $("#myCanvas");

function startGame(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // set starting values
    var fps = 30;
    var percent = 0
    var direction = 1;

    // start the animation
  //  animate();

    function animate() {
    }

        // set the animation position (0-100)
        percent += direction;
        if (percent < 0) {
            percent = 0;
            direction = 1;
        };
        if (percent > 100) {
            percent = 100;
            direction = -1;
        };

        draw(percent);

        // request another frame
        setTimeout(function () {
            requestAnimationFrame(animate);
        }, 500 / fps);


    // draw the current frame based on sliderValue
    function draw(sliderValue) {

        // redraw path
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(20, 40);
        ctx.lineTo(20, 400);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 400);
        ctx.arcTo(20, 430, 35, 430, 35);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(55, 430);
        ctx.lineTo(200, 430);
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 430);
        ctx.arcTo(250, 430, 250, 380, 35);
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(250, 400);
        ctx.lineTo(250, 90);
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(250, 90);
        ctx.arcTo(250, 45, 450, 35, 45);
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(292, 43);
        ctx.lineTo(500, 43);
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(500, 43);
        ctx.arcTo(550, 45, 550, 90, 45);
        ctx.strokeStyle = 'blue';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(550, 85);
        ctx.lineTo(550, 400);
        ctx.strokeStyle = 'blue';
        ctx.stroke();


        // draw the tracking rectangle
        var xy;

        if (sliderValue < 25) {
            var percent = sliderValue / 24;
            xy = getLineXYatPercent({
                x: 100,
                y: 20
            }, {
                x: 200,
                y: 160
            }, percent);
        } else if (sliderValue < 50) {
            var percent = (sliderValue - 25) / 24
            xy = getQuadraticBezierXYatPercent({
                x: 200,
                y: 160
            }, {
                x: 230,
                y: 200
            }, {
                x: 250,
                y: 120
            }, percent);
        } else if (sliderValue < 75) {
            var percent = (sliderValue - 50) / 24
            xy = getCubicBezierXYatPercent({
                x: 250,
                y: 120
            }, {
                x: 290,
                y: -40
            }, {
                x: 300,
                y: 200
            }, {
                x: 400,
                y: 150
            }, percent);
        } else {
            var percent = (sliderValue - 75) / 25
            xy = getLineXYatPercent({
                x: 400,
                y: 150
            }, {
                x: 500,
                y: 90
            }, percent);
        }
        drawRect(xy, "red");

    }


    // draw tracking rect at xy
    function drawRect(point, color) {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(point.x - 94, point.y - 10, 20, 50);
        ctx.fill();
        ctx.stroke();
    }

    // draw tracking dot at xy
    function drawDot(point, color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    // line: percent is 0-1
    function getLineXYatPercent(startPt, endPt, percent) {
        var dx = endPt.x - startPt.x;
        var dy = endPt.y - startPt.y;
        var X = startPt.x + dx * percent;
        var Y = startPt.y + dy * percent;
        return ({
            x: X,
            y: Y
        });
    }

    // quadratic bezier: percent is 0-1
    function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
        var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
        var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
        return ({
            x: x,
            y: y
        });
    }

    // cubic bezier percent is 0-1
    function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
        var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
        var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
        return ({
            x: x,
            y: y
        });
    }

    // cubic helper formula at percent distance
    function CubicN(pct, a, b, c, d) {
        var t2 = pct * pct;
        var t3 = t2 * pct;
        return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
    }


  // function drawMap(){
/*  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var centerX = 50;
  var centerY = 50;
  var radius = 40;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke(); */
    $myCanvas.css("background-size", "0 0");
    var carOne = '<div id="car1"></div>';
   $myCanvas.html(carOne);
   var $car1 = $("#car1");
   var position1 = $car1.position();

  $(document).keydown(function(event) {


switch (event.keyCode) {
case 38:
    event.preventDefault();
    console.log("Up key is pressed");
    $car1.css('top', position1.top=(position1.top-10));

    break;
case 40:
    event.preventDefault();
    console.log("Down key is pressed");
    $car1.css('top', position1.top=(position1.top+10));
    break;
case 37:
    event.preventDefault();
    console.log("Left key is pressed");
    $car1.css('left', position1.left=(position1.left-10));


    break;
case 39:
    event.preventDefault();
    console.log("Right key is pressed");
    $car1.css('left', position1.left=(position1.left+10));
    break;
}
});

  console.log("Game Started!");
  $start.hide();

  //$board.attr("src","images/track.jpg");
  //$car1.html("<img src='images/car1.png' class='cars'></img>");
  //$car2.append("<img src='images/car2.png' class='cars'></img>");



}





$start.click(startGame);


});
