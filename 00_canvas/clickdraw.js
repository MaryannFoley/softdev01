var state=0;
var c = document.getElementById("slate");
var ctx=c.getContext("2d");
var main = function(e){
  if state==0{
    ctx.fillRect(e.clientX,50,100,1)
  }
  else{
    //h
  }
}

var changeState = function(){
  if state==0{
    state=1;
  }
  else{
    state=0;
  }
}
