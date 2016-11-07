$(document).ready(function() {
    var $start = $("#start");
    var $myCanvas = $("#myCanvas");

    function startGame() {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        // draw path
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 50;

        ctx.beginPath();
        ctx.moveTo(40, 40);
        ctx.lineTo(40, 365);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40, 365);
        ctx.arcTo(40, 400, 55, 399, 35);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60, 397);
        ctx.lineTo(200, 397);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 397);
        ctx.arcTo(250, 397, 250, 380, 35);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(250, 365);
        ctx.lineTo(250, 90);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(250, 90);
        ctx.arcTo(250, 45, 450, 35, 45);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(292, 43);
        ctx.lineTo(500, 43);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(500, 43);
        ctx.arcTo(550, 43, 550, 90, 45);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(550, 85);
        ctx.lineTo(550, 400);
        ctx.strokeStyle = 'black';
        ctx.stroke();


        // draw tracking rect at xy
        function drawCar1(x1, y1) {
            ctx.fillStyle = "white";
            ctx.strokeStyle = "gray";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.rect(x1, y1, 20, 20);
            ctx.fill();
            ctx.stroke();
        }

        function drawCar2(x2, y2) {
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'gray';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.rect(x2, y2, 20, 20);
            ctx.fill();
            ctx.stroke();
        }

        $myCanvas.css("background-size", "0 0");

        var $car1 = $("#car1");
        var position1 = $car1.position();
        var x1 = 20;
        var y1 = 40;
        var x2 = 40;
        var y2 = 40;
        var speedCarOne = 6;
        var speedCarTwo = 5;

        drawCar1(x1, y1);
        drawCar2(x2, y2);

        $(document).keydown(function(event) {


            switch (event.keyCode) {
                case 38:
                    event.preventDefault();
                    console.log("Up key is pressed");
                    console.log(x1, y1);
                    y1 -= speedCarOne;
                    drawCar1(x1, y1);
                    break;
                case 40:
                    event.preventDefault();
                    console.log("Down key is pressed");
                    drawCar1(x1, y1);
                    y1 += speedCarOne;
                    console.log(x1, y1);
                    break;
                case 37:
                    event.preventDefault();
                    console.log("Left key is pressed");
                    drawCar1(x1, y1);
                    x1 -= speedCarOne;
                    console.log(x1, y1);
                    break;
                case 39:
                    event.preventDefault();
                    console.log("Right key is pressed");
                    drawCar1(x1, y1);
                    x1 += speedCarOne;
                    console.log(x1, y1);
                    break;
            }
            if ((x1>15&&x1<50&&y1<400)||(x1>215&&x1<255||y1>370&&y1<415)||(x1>515&&x1<565||y1<55&&y1>20)) {
              speedCarOne=5;
            } else {
              speedCarOne=1;
            }


        });
        console.log("Game Started!");
        $start.hide();
    }
    $start.click(startGame);
});
