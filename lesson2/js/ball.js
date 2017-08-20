var canvas;
var canvasContext;
var ballX = 500;
var ballY = 200;
var gravity = 2;
var directionDown = true;
var lastHeight = ballY;
var maxY;
var ballSpeedY = 10;

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
            dragBall(canvas, evt);
        }
    }, false)
};

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}

function startGame(){
    moveEverything();
    drawEverything();
}
function moveEverything() {
    if ((lastHeight < canvas.height * 2)) {

        if (ballY < maxY) {
            ballY = ballY + ballSpeedY;
        }
        if (ballY >= maxY) {
            ballSpeedY = -ballSpeedY;
            ballY = ballY + ballSpeedY;
            lastHeight = lastHeight * gravity;
            ballSpeedY += 1;
        }
        if (ballY < lastHeight) {
            ballSpeedY = -ballSpeedY;
            ballSpeedY -= 1;
        }
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

function dragBall(elementToDrag, event) {
    var origX = elementToDrag.offsetLeft,
        origY = elementToDrag.offsetTop;

    var deltaX = origX + 50,
        deltaY = origY + 50 ;

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
        ballSpeedY = 10;
        lastHeight = ballY;
        startGame();
    }
}

