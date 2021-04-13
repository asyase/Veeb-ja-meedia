let mycanvas;
let context;

function init_mydraw(){
  console.log("Init tootab");
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
draw_moon();

}
