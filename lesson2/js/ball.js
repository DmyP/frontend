var canvas;
var canvasContext;
var ballX = 500;
var ballY = 200;
var gravityAbs = 150;
var directionDown = true;
var lastHeight = ballY;
var maxY;
var ballSpeedY = 20;

var bg_img = new Image();
var ball_img = new Image();
bg_img.src = "png/bg1280-900.png";
ball_img.src = "png/ball.png";

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    maxY = canvas.height - 110;
    setInterval(startGame, 25);
    canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        if (mousePos.x > ballX  && mousePos.x < ballX  + 100 && mousePos.y > ballY && mousePos.y < ballY + 100) {
        console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
            dragBall();
        }
    }, false)
};

function startGame(){
    moveEverything();
    drawEverything();
}

function moveEverything() {
    if(ballSpeedY > 1) {
        if (ballY < maxY) {
            ballY = ballY + ballSpeedY;
        } else if (ballY >= maxY) {
            ballSpeedY -= 1;
            ballSpeedY = -ballSpeedY;
            lastHeight = lastHeight + gravityAbs;
        }
    } else if (ballSpeedY < -1) {
        if (ballY > lastHeight) {
            ballY = ballY + ballSpeedY;
        } else if (ballY <= lastHeight){
            ballSpeedY += 1;
            ballSpeedY = -ballSpeedY;
        }
    } else {
        ballSpeedY = 0;
    }
}

function drawEverything() {
    console.log("down ? " + directionDown + " ball y " + ballY + " lastHigh " + lastHeight + " ballSpeedY " + ballSpeedY);
    var pattern_bg = canvasContext.createPattern(bg_img, 'repeat');
    canvasContext.rect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = pattern_bg;
    canvasContext.fill();
    canvasContext.drawImage(ball_img, ballX, ballY);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function dragBall() {
    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);

    function moveHandler(e) {
        if(!e) e = window.event;
        ballX = (e.clientX - 50);
        ballY = (e.clientY - 50);
        drawEverything();
    }
    function upHandler(e) {
        if(!e) e = window.event;

        document.removeEventListener("mouseup", upHandler, true);
        document.removeEventListener("mousemove", moveHandler, true);
        ballSpeedY = 20;
        lastHeight = ballY;
        startGame();
    }
}

