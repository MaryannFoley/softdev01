var pic=document.getElementsById("vimage");
var c= document.createElementNS("http://www.w3.org/2000/svg","circle");
c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r",100);
c.setAttribute("fill","red");
c.setAttribute("stroke","black");
pic.appendChild(c);

children=[]

var cleS = document.getElementById("but_clear");
var drawn = 0;
var lastX=false
var lastY=false




var clear = function clr_canvas(evt) {
   console.log("uhhh");
    if (drawn !=0){ //only if there was something drawn
      console.log(pic.getElementByTagName("circle"))
    }
    else{
      evt.preventDefault(); //prevents clear from happening unless something was drawn
       }
}


var dot = function make_dot() {
  var rect = pic.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;


  if (drawn !=0){
    var c= document.createElementNS("http://www.w3.org/2000/svg","line");
    c.setAttribute("x1",lastX);
    c.setAttribute("y1",lastY);
    c.setAttribute("x2",x);
    c.setAttribute("y2",y);
    c.setAttribute("stroke","black");
    pic.appendChild(c);
    }
    var c= document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",100);
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    pic.appendChild(c);
    drawn +=1;
    lastX=x;
    lastY=y;
};

cleS.addEventListener("click", clear );


pic.addEventListener('click', function(e) {
     //offset provides the offsets in the x and y coordinates of the mouse pointer and the canvas edge (left side)
     console.log("uhhh");
      dot();
});
