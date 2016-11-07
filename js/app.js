$(document).ready(function() {
    var $start = $("#start");
    var $myCanvas = $("#myCanvas");

    var player1 = {
      name: "",
      gamesWon: 0,
      gamesLost: 0,
      gamesTied: 0
    };
    var player2 ={
      name: "",
      gamesWon: 0,
      gamesLost: 0,
      gamesTied: 0
    };

    function startGame() {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        //scoreboard
        localStorage.setItem(player1, player2);
        ctx.font = "21px serif";
        ctx.fillText("Player 1: "+player1.gamesWon, 400, 300);
        ctx.fillText("Player 2: "+player2.gamesWon, 400, 400);


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

        var x1 = 20;
        var y1 = 40;
        var x2 = 40;
        var y2 = 40;
        var speedCarOne = 5;
        var speedCarTwo = 5;

        drawCar1(x1, y1);
        drawCar2(x2, y2);

        $(document).keydown(function(event) {

            switch (event.keyCode) {
                case 38:
                event.preventDefault();
                    y1 -= speedCarOne;
                    drawCar1(x1, y1);
                    break;
                case 40:
                    event.preventDefault();
                    y1 += speedCarOne;
                    drawCar1(x1, y1);
                    break;
                case 37:
                event.preventDefault();
                    x1 -= speedCarOne;
                    drawCar1(x1, y1);
                    break;
                case 39:
                event.preventDefault();
                    x1 += speedCarOne;
                    drawCar1(x1, y1);
                    break;
                case 87:
                    y2 -= speedCarTwo;
                    drawCar2(x2, y2);
                    break;
                case 83:
                    y2 += speedCarTwo;
                    drawCar2(x2, y2);
                    break;
                case 65:
                    x2 -= speedCarTwo;
                    drawCar2(x2, y2);
                    break;
                case 68:
                    x2 += speedCarTwo;
                    drawCar2(x2, y2);
                    break;
            }

        if ((x1 > 15 && x1 < 50 && y1 < 400) || (x1 > 215 && x1 < 255 || y1 > 370 && y1 < 415) || (x1 > 515 && x1 < 565 || y1 < 55 && y1 > 20)) {
            speedCarOne = 5;
        } else {
            speedCarOne = 1;
        }
        if ((x2 > 15 && x2 < 50 && y2 < 400) || (x2 > 215 && x2 < 255 || y2 > 370 && y2 < 415) || (x2 > 515 && x2 < 565 || y2 < 55 && y2 > 20)) {
            speedCarTwo = 5;
        } else {
            speedCarTwo = 1;
        } if ((x1 > 525&& x1 < 565)&& y1 >  380) {
          alert(player1.name+"!! You Won!!");
          player1.gamesWon++;
          player2.gamesLost++;
        } if ((x2 > 525&& x2 < 565)&& y2 >  380) {
          alert(player2.name+"!! You Won!!");
          player2.gamesWon++;
          player1.gamesLost++;
        } if(((x1 > 525&& x1 < 565)&& y1 >  380)&&((x2 > 525&& x2 < 565)&& y2 >  380)){
          alert("It's a Tie!!");
          player1.gamesTied++;
          player2.gamesTied++;
        }


      });
        console.log("Game Started!");
        $start.hide();
        player1.name = window.prompt("Player 1! Please enter your name!");
        player2.name = window.prompt("Player 2! Please enter your name!");
    }
    $start.click(startGame);
});
