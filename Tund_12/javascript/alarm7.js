var alarm_music = new Audio("../../../../~anassel/veeb_ja_meedia/Materials/EarlyRiser.mp3");
alarm_music.loop = true;

var h2 = document.getElementById('alarm_txt');

var current_time = setInterval(function(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
h2.textContent = hours + ":" + minutes + ":" + seconds;
},1000);

function selectHour(){
var select = document.getElementById('alarmhrs');
var hrs = 24

for (i=1; i <= hrs; i++) {
  select.options[select.options.length] = new Option(i);
}
}
selectHour();

function selectMin(){
var select = document.getElementById('alarmmins');
var min = 59;

for (i=0; i <= min; i++) {
  select.options[select.options.length] = new Option(i);
}
}
selectMin();

function selectSec(){
var select = document.getElementById('alarmsecs');
var sec = 59;

for (i=0; i <= sec; i++) {
  select.options[select.options.length] = new Option(i);
}
}
selectSec();


function setAlarm() {
var hr = document.getElementById('alarmhrs');
var min = document.getElementById('alarmmins');
var sec = document.getElementById('alarmsecs');

  var selected_hrs = hr.options[hr.selectedIndex].value;
  var selected_min = min.options[min.selectedIndex].value;
  var selected_sec = sec.options[sec.selectedIndex].value;

  var alarm_time = selected_hrs + ":" + selected_min + ":" + selected_sec;
  console.log('alarm_time:' + alarm_time);

  document.getElementById('alarmhrs').disabled = true;
document.getElementById('alarmmins').disabled = true;
document.getElementById('alarmsecs').disabled = true;
var h2 = document.getElementById('alarm_txt');
alarm_music.pause();

setInterval(function(){

var date = new Date();
  var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var current_time = h2.textContent = hours + ":" + minutes + ":" + seconds;


if (alarm_time == current_time) {
  alarm_music.play();
      document.getElementById('reset_btn').innerHTML = "OFF";
}

},1000);
}


function resetAlarm() {

document.getElementById('alarmhrs').disabled = false;
document.getElementById('alarmmins').disabled = false;
document.getElementById('alarmsecs').disabled = false;
alarm_music.pause();
  document.getElementById('reset_btn').innerHTML = "OFF";

}
