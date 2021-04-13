let mycanvas;
let context;

function init_mydraw(){
  console.log("Init tootab");
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
draw_moon();

}

function draw_moon() {
    let grd = ctx.createRadialGradient(100, 90, 5, 100, 90, 50);
    grd.addColorStop(0, "rgb(255, 255, 255)");
    grd.addColorStop(1, "rgba(170, 173, 173, 0.5)");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0.2 * Math.PI, 1.6 * Math.PI);
    ctx.quadraticCurveTo(80, 110, 125, 120);
    ctx.fill();
    ctx.closePath();
}
