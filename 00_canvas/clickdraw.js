var state=0;
var c = document.getElementById("slate");
var ctx=c.getContext("2d");

var colors=["#FFFF00","#0000FF","#FF0000","#FF00FF","#00FF00","#00FFFF"]

c.addEventListener("click",function (e){
  console.log(e);
  var ref = c.getBoundingClientRect();
  var color = colors[Math.floor(Math.random()*colors.length)];
  console.log(color);
  ctx.fillStyle=color;
  ctx.strokeStyle=color;
  if (state==0){
    ctx.fillRect(e.clientX-ref.left,e.clientY-ref.top,100,15);
  }
  else{
    ctx.beginPath();
    ctx.ellipse(e.clientX-ref.left,e.clientY-ref.top,75,75,Math.PI,0,2*Math.PI);
    ctx.stroke();
  }

} );

var sChange = document.getElementById("state");

sChange.addEventListener("click",function (e){
  if (state==0){
    state=1;
    sChange.innerHTML="Change drawing state to rectangle";
  }
  else{
    state=0;
    sChange.innerHTML="Change drawing state to circle";
  }
});

var clear = document.getElementById("clear");

clear.addEventListener("click",function (e){
  ctx.clearRect(0,0,600,600);
});
