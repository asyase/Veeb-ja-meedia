
let canvas;
let ctx;


function init_draw() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d"); //olen kunstiku aktiveerinud ja voib hakata joonistama

      drawBackground();
      drawStars();
      drawRocket();
    drawMoon();



  }

  function drawBackground(){
     let gradient = ctx.createRadialGradient(0, 490, 25, 380, 310, 500);
     gradient.addColorStop(0, "#e6e6ff");
     gradient.addColorStop(0.2, "#6666ff");
     gradient.addColorStop(0.4, "#3333ff");
     gradient.addColorStop(0.5, "#0000ff");
     gradient.addColorStop(0.6, "#0000cc");
     gradient.addColorStop(0.7, "#000099");
     gradient.addColorStop(1, "#000066");
     ctx.fillStyle = gradient;
     ctx.fillRect(0, 0, 1000, 540);
   }

   function drawStars() {
      let rnd = Math.floor(Math.random() * (2000 - 500 + 1) + 500);
      for (let i = 0; i < rnd; i++) {
          let r = Math.floor(Math.random() * (2 - 1 + 1) + 1);
          let x = Math.floor(Math.random() * (960 - 1 + 1) + 1);
          let y = Math.floor(Math.random() * (540 - 1 + 1) + 1);
          let grd = ctx.createRadialGradient(x, y, 1, x - 1, y - 1, r);
          grd.addColorStop(0, "rgb(227, 220, 27)");
          ctx.beginPath();
          if (r >= 2) {
              grd.addColorStop(0.5, "rgba(227, 220, 27, 0.7)");
          }
          grd.addColorStop(1, "rgba(227, 220, 27, 0.7)");
          ctx.fillStyle = grd;
          ctx.arc(x, y, r, 0, 2 * Math.PI);
          ctx.fill();
          ctx.closePath();
      }

    }



  function drawRocket() {

  // raketi keha
      ctx.beginPath();
      ctx.lineJoin = 'round';
      ctx.moveTo(canvas.width / 5, 20);
      ctx.quadraticCurveTo(0, 200, 120, 450);
      ctx.lineTo(280, 450);
      ctx.quadraticCurveTo(400, 190, canvas.width / 5, 20);
    ctx.closePath();
      ctx.fillStyle = '#edb4ea';
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#222';
      ctx.stroke();



      // raketi aken
      ctx.beginPath();
      ctx.arc(200, 200, 60, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#222';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(200, 200, 40, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.lineWidth = 8;
    ctx.strokeStyle = '#222';
      ctx.stroke();

      // raketi tiivad
      ctx.beginPath();
      ctx.lineJoin = 'round';
      ctx.moveTo(120, 450);
      ctx.lineTo(90, 500);
      ctx.lineTo(310, 500);
      ctx.lineTo(280, 450);
      ctx.closePath();
      ctx.fillStyle = '#edb4ea';
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#222';
      ctx.stroke();

      // fuel
      ctx.beginPath();
      ctx.lineJoin = 'round';
      ctx.moveTo(150, 500);
      ctx.quadraticCurveTo(100, 600, 200, 650);
      ctx.quadraticCurveTo(300, 600, 250, 500);
      ctx.closePath();
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#222';
      ctx.stroke();

      ctx.beginPath();
      ctx.lineJoin = 'round';
      ctx.moveTo(180, 500);
      ctx.quadraticCurveTo(150, 550, 200, 580);
      ctx.quadraticCurveTo(250, 550, 220, 500);
      ctx.closePath();
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#222';
      ctx.stroke();


      ctx.beginPath();
      ctx.moveTo(75, 250);
      ctx.quadraticCurveTo(170, 320, 314, 340);
      ctx.lineTo(310, 355);
      ctx.quadraticCurveTo(180, 340, 76, 270);
      ctx.closePath();
      ctx.fillStyle = '#660000';
      ctx.fill();
      ctx.stroke();



    }

    function drawMoon() {
    let grd = ctx.createRadialGradient(100, 90, 5, 100, 90, 50);
    grd.addColorStop(0, "rgb(255, 255, 255)");
    grd.addColorStop(1, "rgba(170, 173, 173, 0.5)");
    ctx.fillStyle = grd;
    ctx.beginPath();
     ctx.arc(70, 75, 50, 0, 2* Math.PI, 1.6 * Math.PI);

    ctx.fill();
    ctx.closePath();
}







//function drawSpaceship()
//{
//  ctx.fill();
//      ctx.fillStyle = "pink";
//  ctx.beginPath();
  //     ctx.moveTo(680, 65); // Parempoolne katus - kГјlg
  //     ctx.bezierCurveTo(40, 200, 100, 200, 680, 45);
    //   ctx.bezierCurveTo(300, 225, 600, 500, 500, 390);
    //   ctx.quadraticCurveTo(470, 390, 460, 380);
    //   ctx.quadraticCurveTo(465, 400, 485, 390);
  //     ctx.bezierCurveTo(700, 300, 660, 260, 680, 100);
   //ctx.closePath();
//   ctx.fill();
//   ctx.fillStyle = "yellow";


//}





/*let canvas;
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
      ctx.strokeStyle = "black"; //pintsel
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
  */
