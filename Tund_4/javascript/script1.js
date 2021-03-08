let message = "Töötab"; //varem oli var 
let picurl = "../../../~rinde/media/photos/TLU_600x400/";
let picnameprefix = "tlu_";
let picext = ".jpg";
let minpicnum = 1;
let maxpicnum = 43;


window.onload = function(){
    //alert(message);
    console.log("Sõnum on: " + message);
    putOpenTime();
    putRandomPic();
}

function putOpenTime(){
    let currenttime = new Date();
    let currenthour = currenttime.getHours();
    let currentminute = currenttime.getMinutes();
    let currentsecond = currenttime.getSeconds();
    document.getElementById("open_message").innerHTML = "Leht avati kell " + currenthour + ":" + currentminute + ":" + currentsecond + ".";
}

function putRandomPic(){
    let randomnum = minpicnum + Math.round(Math.random() * (maxpicnum - minpicnum));
    document.getElementById("tlu_pic").src = picurl + picnameprefix + randomnum + picext;
}

