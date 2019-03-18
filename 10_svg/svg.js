var pic=document.getElementById("vimage");
// var c= document.createElementNS("http://www.w3.org/2000/svg","circle");
// c.setAttribute("cx",0);
// c.setAttribute("cy",0);
// c.setAttribute("r",100);
// c.setAttribute("fill","red");
// c.setAttribute("stroke","black");
// pic.appendChild(c);


var cleS = document.getElementById("but_clear");
var drawn = 0;
var lastX=false
var lastY=false


var clear = function(evt) {
   console.log(drawn);
    if (drawn !=0){ //only if there was something drawn
      console.log("uhhh 2.0");
      pic.innerHTML="";
      drawn=0;
    }
    else{
      evt.preventDefault(); //prevents clear from happening unless something was drawn
       }
}


var dot = function(x,y) {
  console.log("h");

  console.log("h2");
  var c= document.createElementNS("http://www.w3.org/2000/svg","circle");
  c.setAttribute("cx",x);
  c.setAttribute("cy",y);
  c.setAttribute("r",30);
  c.setAttribute("fill","lightblue");
  c.setAttribute("stroke","black");
  pic.appendChild(c);
  drawn +=1;
  lastX=x;
  lastY=y;
};


cleS.addEventListener("click", clear );


pic.addEventListener('click', function(e) {
     //offset provides the offsets in the x and y coordinates of the mouse pointer and the canvas edge (left side)
     var x = e.offsetX;
     var y = e.offsetY;
     if (pic.hasChildNodes()){
       var children = pic.childNodes;
       console.log(children);
        var checkIfIn=false;
       for (var i = 0; i < children.length; i++) {
         if(children[i].cx){
          var temp = Math.sqrt(Math.abs(children[i].cx-x)**2+Math.abs(children[i].cy-y)**2);
          if(temp<50){
            checkIfIn=true;
            if (children[i].fill=="lightblue"){
              children[i].setAttribute("fill","green");
            }
            else{
              pic.removeChild(children[i]);
              newx=Math.floor(Math.random()*500);
              newy=Math.floor(Math.random()*500);
              dot(newx,newy);
            }
          }
         }
      }
      if (checkIfIn==false){
        dot(x,y);
      }
     }
     else{
       dot(x,y);
     }
});
