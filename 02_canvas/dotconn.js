/*
Team GuptasCreatedMaf (Shafali Gupta, Maryann Foley)
SoftDev2 pd 8
K02 - Connecting the Dots
2019-02-03
*/


var c = document.getElementById('playground');
var context = c.getContext("2d");
var cleS = document.getElementById("clear");
var drawn = 0;
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";
var lastX=false
var lastY=false

context.beginPath();

function displayWarning(msg) { //display the warning and make sure it only stays for a while
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after the clear button
    cleS.parentNode.insertBefore(warningBox, cleS.nextSibling);
  }

  warningTimeout = window.setTimeout(function() {
      warningBox.parentNode.removeChild(warningBox);
      warningTimeout = -1;
    }, 2000);
}


var clear = function clr_canvas(evt) {
    if (drawn !=0){ //only if there was something drawn
      context.clearRect(0, 0, c.width, c.height);
      drawn = 0;
    }
    else{
      evt.preventDefault(); //prevents clear from happening unless something was drawn
      displayWarning( //displays this warning if the canvas was empty originally
              "You have to draw something to clear the canvas!"
            );    }
}


var dot = function make_dot(x, y) {
	context.strokeStyle = "#ff0000"; //beginPath starts a new path and gets rid of all other paths
  context.fillStyle="#000000";
  if (drawn !=0){
      context.beginPath();
      context.moveTo(lastX,lastY); //start at last point
      context.lineTo(x,y); //create a line to end point
      context.stroke(); //2 paths because one is stroke one is fill
      context.beginPath();
      context.ellipse(lastX,lastY,5,5,360,0,360); //draw over the last circle because if would have a red line otherwise
      context.fill();
    }
    lastX=x;
    lastY=y;
    context.beginPath();
    context.ellipse(x,y,5,5,360,0,360);
    context.fill();
    drawn +=1;

};
cleS.addEventListener("click", clear );


c.addEventListener('click', function(e) {
     //offset provides the offsets in the x and y coordinates of the mouse pointer and the canvas edge (left side)
      dot(e.offsetX, e.offsetY);
});
