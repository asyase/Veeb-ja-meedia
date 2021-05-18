let canvas;
let ctx;

window.onload = function() {
    document.getElementById("music").addEventListener("durationchange", act);
    document.getElementById("music").src="../../../~anassel/veeb_ja_meedia/Materials/tadi_anna.mp3";
}

function act(e) {
    document.getElementById("music").removeEventListener("durationchange", act);
    document.getElementById("music").addEventListener("play", hasStarted);
    document.getElementById("music").addEventListener("pause", hasStopped);
    document.getElementById("music").addEventListener("ended", hasStopped);
    document.getElementById("music").addEventListener("timeupdate", indicate);
}

function hasStarted() {
    document.getElementById("vinyl").style.animationPlayState = "running";
}

function hasStopped(e) {
    document.getElementById("vinyl").style.animationPlayState = "paused";
    if(e.type == "ended") {
        document.getElementById("bottom").innerHTML = '<p class="largemessage">Ongi kõik!)</p>'
    }
}

function indicate(e) {
    let lowLimit = -74;
    let highLimit = 74;
    let unit = (highLimit - lowLimit) / e.target.duration;
    let angel = e.target.currentTime * unit - Math.abs(lowLimit);
    document.getElementById("pin").style.transform = "rotate(" + angel + "deg)";
}
