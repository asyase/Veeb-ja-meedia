let canvas;
let ctx;

function init_draw() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d"); //olen kunstiku aktiveerinud ja voib hakata joonistama
      draw_rect();
      draw_circle();
      draw_line();
      draw_pacman();

  }

function draw_pacman(){
  ctx.beginPath();
      ctx.arc(800, 110, 100, .1 * Math.PI, 1.9 * Math.PI);
      ctx.lineTo(800, 110);
      ctx.fill();
  
    ctx.closePath();
}


  function draw_line(){
    ctx.beginPath();
      ctx.moveTo(100,0);  //pliiatsi tostmine algupunkti
      ctx.lineTo(200,180);
//quadratic kontrollipunkti x, kontrollpunkti y,x,y
  ctx.quadraticCurveTo(480, 270, 200, 360);
  //bezier kontrollpunkti x, kontrollipunkti y, 2kontrollpunkti x, 2kontrollpunkti y,x,y
  ctx.bezierCurveTo(400, 400, 0, 450, 200, 540);
    ctx.closePath();
    ctx.stroke();
  }

function draw_circle() {
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
      ctx.beginPath();
      // kaar arc x, y, r, algusnurk, lГµpunurk
          ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
  }

function draw_rect() {
      ctx.strokeStyle = "red"; //pintsel
      ctx.lineWidth = 6;
      ctx.fillStyle = "#ffaaaa";

      // x, y, w, h
      ctx.beginPath();
          ctx.rect((canvas.width - 200) / 2, (canvas.height - 100) / 2, 200, 100);
      ctx.closePath();
      // ctx.stroke();
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = "green";
      ctx.fillStyle = "#aaffaa";
      ctx.beginPath();
          ctx.rect((canvas.width - 200) / 2 + 200 + 6, (canvas.height - 100) / 2, 200, 100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = "magenta";
      ctx.strokeRect((canvas.width - 200) / 2, (canvas.height - 100) / 2 - 100 - 6, 200, 100);
      ctx.fillStyle = "#ffff00";
      ctx.fillRect((canvas.width - 200) / 2, (canvas.height - 100) / 2 + 100 + 6, 200, 100);
  }
