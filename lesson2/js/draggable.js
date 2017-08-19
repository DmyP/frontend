window.addEventListener("load", init, false);

var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

function init()
{
    myGameArea.start();
    addBall();
}

function drag(elementToDrag, event) {
    var startX = event.clientX,
        startY = event.clientY;
    var origX = elementToDrag.offsetLeft,
        origY = elementToDrag.offsetTop;

    var deltaX = startX - origX,
        deltaY = startY - origY;

    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);

    function moveHandler(e) {
        if(!e) e = window.event;
        elementToDrag.style.left = (e.clientX - deltaX) + "px";
        elementToDrag.style.top = (e.clientY - deltaY) + "px";
    }
    function upHandler(e) {
        if(!e) e = window.event;
        document.removeEventListener("mouseup", upHandler, true);
        document.removeEventListener("mousemove", moveHandler, true);
    }
}



var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = x - 100;
        this.canvas.height = y - 100;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
};


function addBall() {
    var elem = document.getElementById("ball");
    elem.addEventListener("mousedown", function(e) {drag(this, e)});
}