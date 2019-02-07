//Team NintendoDSI
//SofDev Period 8
//K03
//2019-2-4

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var requestID=false;
var radius = 0;
var growing = false;
var clear = function(e){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
var drawDot = function(event){
  if (requestID){
    stopIt();
}
  clear();
  ctx.fillStyle = "#00FFFF";
  ctx.beginPath();
  if(radius==0 || radius==c.width/2 || radius==c.height/2){
    growing=!growing;
  }
  if(growing){
    radius+=1;
  }
  else{
    radius-=1;
  }
  ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot);
}
var stopIt = function(){
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
  requestID=false;
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);


