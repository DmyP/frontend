var canvas,
    canvasContext,
    ballX,
    ballY,
    gravityAbs,
    directionDown,
    lastHeight,
    maxY,
    ballSpeedY,
    ballSize = 70,
    score = 0,
    buttonPressed = false,
    bg_img = new Image(),
    ball_img = new Image();
    bg_img.src = "png/bg1280-900.png";
    ball_img.src = "png/ball.png";

window.onload = function () {
    drawCanvas();
    resetBall();
    setInterval(moveAndDraw, 25);
    canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        if (mousePos.x > ballX  && mousePos.x < ballX  + ballSize && mousePos.y > ballY && mousePos.y < ballY + ballSize) {
            buttonPressed = true;
            dragBall();
        }
    }, false)
};

function drawCanvas() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.canvas.width  = window.innerWidth - 50;
    canvasContext.canvas.height = window.innerHeight - 50;
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY  = canvas.height / 2;
    lastHeight = ballY;
    gravityAbs = 200;
    directionDown = true;
    ballSpeedY = 20;
    maxY = canvas.height - 80;
}

function moveAndDraw(){
    drawBackground();
    drawBall();
    drawScore();
    moveBall();
}

function drawBackground() {
    var pattern_bg = canvasContext.createPattern(bg_img, 'no-repeat');
    canvasContext.rect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = pattern_bg;
    canvasContext.fill();
}

function drawBall() {
    canvasContext.drawImage(ball_img, ballX, ballY, ballSize, ballSize);
    canvasContext.shadowBlur = 50;
    canvasContext.shadowColor = "black";
}

function moveBall() {
    moveBallVertically();
    moveBallHorizontally();
    detectCollision();
}

function moveBallVertically() {
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
            lastHeight = lastHeight + gravityAbs;
        }
    } else {
        ballSpeedY = 0;
    }
}

function moveBallHorizontally() {

}



function detectCollision() {
    if (!buttonPressed) {
        console.log("x " + ballX + "y " + ballY);
        if ((240 < ballX) && (ballX < 260)) {
            if ((240 < ballY) && (ballY < 260)) {
                score += 1;
                setTimeout(resetBall, 600);
            }
        }
    }
}

function dragBall() {
    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);

    function moveHandler(e) {
        if(!e) e = window.event;
        ballX = (e.clientX - 50);
        ballY = (e.clientY - 50);
        moveAndDraw();
    }
    function upHandler() {
        document.removeEventListener("mouseup", upHandler, true);
        document.removeEventListener("mousemove", moveHandler, true);
        ballSpeedY = 20;
        lastHeight = ballY;
        buttonPressed = false;
        moveAndDraw();

    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function drawScore() {
    canvasContext.fillStyle = "brown";
    canvasContext.font = "60px Georgia";
    canvasContext.fillText("Your score : " + score.toString(), 500,  100);
}

function drawWin() {
    canvasContext.globalAlpha = 1;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.globalAlpha = 1.0;
}

