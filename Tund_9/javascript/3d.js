let percent = 301;
let up = true;
let degree = 0;
let degree_z = 30;
let switching = 0;


window.onload = function() {
    cube_rotating();
}


function image_switching (target, side) {
    if (switching == 0) {
        target.src = "../../../~anassel/veeb_ja_meedia/Materials/piccube_" + side + ".png";
    } else if (switching == 1) {
        target.src = "../../../~anassel/veeb_ja_meedia/Materials/cube_" + side + ".png";
    } else {
        target.src = "../../../~anassel/veeb_ja_meedia/Materials/piccube_" + side + ".png";
    }
}

//---------------------------------------------------------------------------------------------------//

function image_changing(side) {
    let image;
    if (side == 1) {
        image = document.getElementById("front").getElementsByTagName("img")[0];
    } else if (side == 2) {
        image = document.getElementById("right").getElementsByTagName("img")[0];
    } else if (side == 3) {
        image = document.getElementById("back").getElementsByTagName("img")[0];
    } else {
        image = document.getElementById("left").getElementsByTagName("img")[0];
    }
    image_switching(image, side);
}


//-----------------------------------------------------------------------------------------------//

function cube_rotating() {
    let cube = document.getElementById("cube");
    if (degree == 360) {
        degree = 0;
        switching += 1;
        if (switching > 2) {
            switching = 0;
        }
    }

    if (percent >= 700) {
        up = false;
    }
    if (percent <= 0) {
        up = true;
    }
    document.getElementById("area").style.perspectiveOrigin = "0%" + (percent - 260) + "%";
    if (up) {
        percent += 1;
    } else {
        percent -= 1;
    }
    cube.style.transform = "rotateZ(" + degree_z + "deg) rotateY(" + degree + "deg)";
    degree += 2;
    if (degree % 90 == 0) {
        image_changing(degree / 90);
    }
    requestAnimationFrame(cube_rotating);
}
