
let rotation = 0;
let counter = 0;
let sound = new Audio("tilkumine.mp3");
window.onload = function() {
    console.log("töötab");
    rotateCube();
    changeRotationNr();


};

function rotateCube(){

    rotation++;
    requestAnimationFrame(rotateCube);
    document.querySelector("#kuup").style.transform = "rotateY("+rotation+"deg)";
    if(rotation % 90 == 0){
        counter++;
        changeRotationNr();
        if(rotation == 360){
            sound.play();
            rotation = 0;

        }
    }
}
function changeRotationNr(){
    document.querySelector("#front").innerHTML = "Kuup on teinud pöördeid kokku:" + counter;
    document.querySelector("#back").innerHTML = "Kuup on teinud pöördeid kokku:" + counter;
    document.querySelector("#right").innerHTML = "Kuup on teinud pöördeid kokku:" + counter;
    document.querySelector("#left").innerHTML = "Kuup on teinud pöördeid kokku:" + counter;
}
