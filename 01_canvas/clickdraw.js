/*
Team GuptasCreatedMaf (Shafali Gupta, Maryann Foley)
SoftDev2 pd 8
K1 - ...and I want to Paint It Better
2019-01-31
*/


var c = document.getElementById('slate');
var context = c.getContext("2d");
var cleS = document.getElementById("cle");
var swi = document.getElementById("draw_state");
var state = 0;
var drawn = 0;
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

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
              "You have to draw something to clear it first"
            );    }
}


var rectangle = function make_rect(x, y) {
    context.fillStyle = "#ff0000";
    context.fillRect(x, y, 50, 100);
    drawn +=1;
};

var dot = function make_dot(x, y) {
    context.fillStyle = "#00ff00";
    context.beginPath(); //beginPath starts a new path and gets rid of all other paths
    context.ellipse(x, y, 10, 10, 360, 0, 360);
    context.fill();
    drawn +=1;

};
cleS.addEventListener("click", clear );


c.addEventListener('click', function(e) {
    if (state==0) {
      rectangle(e.offsetX, e.offsetY); //provides the offsets in the x and y coordinates of the mouse pointer and the canvas edge (left side)
    }
    else{
      dot(e.offsetX, e.offsetY);
    }
});
swi.addEventListener('click', function() {
  if (state==0) {
        state = 1;
    }
    else{
        state = 0;
    }
});
