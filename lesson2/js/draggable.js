window.addEventListener("load", init, false);

function init()
{
    var elem = document.getElementById("ball");
    elem.addEventListener("mousedown", function(e) {drag(this, e)});
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