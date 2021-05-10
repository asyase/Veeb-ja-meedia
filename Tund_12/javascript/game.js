let canvas;
let ctx;
let gameElements = [];
let game_alphabet = [];
let elements_limit = 4;
let hitCount = 0;
let wrongHitCount = 0;
let missedHitCount = 0;
let played = false;
let begTime;
let endTime;
let scoreTimer;
let timer;
let score = 0;
let scoreSum = 0;

//
let correct_sound = new Audio ("../../../../~anassel/veeb_ja_meedia/Materials/correct.mp3");
let wrong_sound = new  Audio ("../../../../~anassel/veeb_ja_meedia/Materials/wrong.mp3");
let missed_sound = new  Audio ("../../../../~anassel/veeb_ja_meedia/Materials/neg.mp3");
let background_sound = new  Audio ("../../../../~anassel/veeb_ja_meedia/Materials/taust.mp3");

function check_background_music(){
    if(played == true){
        if(document.querySelector('#musicCheck').checked == false){
            background_sound.play();
            background_sound.addEventListener("ended", check_background_music);
        } else {
            background_sound.pause();
        }
    }
}

function checkTime(){
    let timeDifference = Date.now() - begTime;
    let formatted = convertTime(timeDifference);
    document.querySelector('#time').innerHTML = formatted;
}

function convertTime(miliseconds) {
    let totalSeconds = Math.floor(miliseconds/1000);
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds - minutes * 60;
    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    return minutes + ':' + seconds;
}


function checkHits(e){
    let hit = false;
    let mX = e.clientX - canvas.offsetLeft + window.scrollX;
    let mY = e.clientY - canvas.offsetTop + window.scrollY;
    for (let i = 0; i < gameElements.length; i++) {
        if(gameElements[i].hitted == false){
            if(gameElements[i].wasHit(mX,mY)){
                console.log("Pihtas");
                hit = true;
                //gameElements.splice (i, 1);
                if(gameElements[i].c == game_alphabet[hitCount]){
                    //toKill.push(i);
                    gameElements[i].hitted = true;
                    hitCount++;
                    correct_sound.play();
                    score += scoreSum;
                    scoreSum = 1000;
                    innerToHTML();
                    break;
                } else {
                    console.log("vale");
                    wrongHitCount++;
                    scoreSum -= 10;
                    innerToHTML();
                    wrong_sound.play();

                }
            }
        }
    }
    if(hit == false){
        console.log("täitsa mööda");
        missed_sound.play();
        missedHitCount++;
        scoreSum -= 50;
        innerToHTML();
    }
}

function makeField(){
    document.querySelector("#canvas").addEventListener('click', startGame);
    if(played == false){
        ctx.fillStyle = "#000000";
        ctx.font = "bold 40px myMontserrat3";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("MÄNGU ALUSTAMISEKS KLIKI!", canvas.width / 2,canvas.height / 2);
    } else {
        clearInterval(timer);
        endTime = document.querySelector('#time').innerHTML;

        ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "bold 40px myMontserrat";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.fillText("SINU AEG: "+ endTime, canvas.width / 2,canvas.height / 2);
        ctx.closePath();
        ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "bold 20px myMontserrat";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("UUE MÄNGU ALUSTAMISEKS KLIKI!", canvas.width / 2,canvas.height / 1.4);
        ctx.closePath();
    }
}

class GameElement {
    constructor(x, y, r, c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.speedX = 5 - Math.round(Math.random() * 10);
        this.speedY = 5 - Math.round(Math.random() * 10);
        this.color;
        this.hitted = false;

        this.setColor();
    }
    setColor(){
        this.color = "hsla("+ Math.round(Math.random()*360) +", 100%, 50%,0.8)";
    }
    drawElement(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
            ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold "+ Math.round(this.r * 1.4) +"px Verdana";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.c, this.x, this.y);
    }
    moveElement(){
        if(this.x <= this.r || this.x > canvas.width - this.r){
            this.speedX *= -1;
        }
        if(this.y <= this.r || this.y > canvas.height - this.r){
            this.speedY *= -1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
    wasHit(mX,mY){
        return pythagoras(this.x, this.y, mX, mY) < this.r;
    }
    shrink(){
        this.r--;
    }
}

window.onload = function (){
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    makeField();
};


function startGame(){
    begTime = Date.now();
    gameElements = [];
    game_alphabet = [];
    hitCount = 0;
    wrongHitCount = 0;
    missedHitCount = 0;
    score = 0;
    scoreSum = 0;
    innerToHTML();
    played = true;
    check_background_music();
    document.querySelector("#canvas").removeEventListener('click', startGame);
    createGameElements();
    canvas.addEventListener("mousedown", checkHits);

    scoreSum = 1000;
    scoreTimer = setInterval(decraseScore, 30);
    timer = setInterval(checkTime, 100);
}
function decraseScore(){
    if(scoreSum <= 1){
        scoreSum = 1;
    } else {
        scoreSum--;
    }
}

function createGameElements(){
    let baseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Š", "Z", "Ž", "T", "U", "V", "W", "Õ", "Ä", "Ö", "Ü", "X", "Y"];
    //loosin 10 tähte
    game_alphabet = baseAlphabet.slice(0);
    for (let i = 0; i < baseAlphabet.length - elements_limit; i++) {
        let oneToRemove = Math.round(Math.random()*(game_alphabet.length - 1));
        game_alphabet.splice(oneToRemove, 1);
    }
    console.log(game_alphabet);

    //for (let i = 0; i < elements_limit; i++) {
    for(let i = game_alphabet.length - 1; i > -1; i--){
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let r = 20 + Math.round(Math.random()* 10);
        gameElements.push(new GameElement(x,y,r, game_alphabet[i]));
    }
    console.log(gameElements);

    drawElements();
    moveElements();
}
function drawElements(){
    canvas.width = canvas.width;
    for (let i = 0; i < gameElements.length; i++) {
        gameElements[i].drawElement();
    }
}

function moveElements(){
    let toKill = [];

    for (let i = 0; i < gameElements.length; i++) {
        if(gameElements[i].hitted == false){
            gameElements[i].moveElement();
        } else {
            gameElements[i].shrink();
            if(gameElements[i].r <= 1){
                toKill.push(i);
            }
        }
    }
    if(toKill.length > 0){
        for (let i = toKill.length - 1; i > -1; i--) {
            gameElements.splice(toKill[i], 1);
        }
    }
    drawElements();
    if(gameElements.length > 0){
        requestAnimationFrame(moveElements);
    } else {
        console.log("Game Over");
        clearInterval(scoreTimer);
        makeField();

    }
}

function innerToHTML(){
    document.querySelector('#correct').innerHTML = "Õigeid: " + hitCount;
    document.querySelector('#wrong').innerHTML = "Valesid: " + wrongHitCount;
    document.querySelector('#missed').innerHTML = "Mööda: " + missedHitCount;
    document.querySelector('#score').innerHTML = "Punktid: " + score;

}

function pythagoras(eX, eY, mX, mY){
    return Math.sqrt(Math.pow(eX-mX, 2) + Math.pow(eY - mY, 2));
}


/*let canvas;
let ctx;
let ball_list = [];
let elements_limit = 10;
let game_alphabet = [];
let hit_count = 0;

function init_game() {
    add_elements();
    canvas.addEventListener("mousedown", check_hits);
}

function add_elements() {
    let base_alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Š", "Z", "Ž", "T", "U", "V", "W", "Õ", "Ä", "Ö", "Ü", "X", "Y"];
    // loosime soovitud arvu tähti
    game_alphabet = base_alphabet.slice(0);
    while (game_alphabet.length > elements_limit) {
        let one_to_remove = Math.round(Math.random() * (game_alphabet.length - 1));
        game_alphabet.splice(one_to_remove, 1);
    }
    // console.log(game_alphabet);
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    // let r = 15;
    for (let i = 0; i < elements_limit; i++) {
        let r = 15 + Math.round(Math.random() * 15);
        // let x = Math.round(Math.random() * (canvas.width - r)) + r;
        // let y = Math.round(Math.random() * (canvas.height - r)) + r;
        let symbol = game_alphabet[game_alphabet.length - 1 - i];
        ball_list.push(new Game_ball(x, y, r, symbol));
    }
    // move_1();
    // ball = new Game_ball(x, y, r);
    move_elements();
}

function move_elements() {
    canvas.width = canvas.width;
    // ball.move_self();
    // ball.draw_self();
    for (let i = 0; i < ball_list.length; i++) {
        ball_list[i].move_self();
        ball_list[i].draw_self();
    }
    if (ball_list.length > 0) {
        requestAnimationFrame(move_elements);
    }
}

function check_hits(e) {
    let m_x = e.clientX - canvas.offsetLeft + window.scrollX;
    let m_y = e.clientY - canvas.offsetTop + window.scrollY;
    for (let i = 0; i < ball_list.length; i++) {
        if (ball_list[i].was_hit(m_x, m_y)) {
            if (ball_list[i].symbol == game_alphabet[hit_count]) {
                ball_list.splice(i, 1);
                hit_count++;
            break;
            }
        }
    }
}

function pythagoras(b_x, b_y, m_x, m_y) {
    return Math.sqrt(Math.pow(b_x - m_x, 2) + Math.pow(b_y - m_y, 2)); //power (mis, mis astesse)
}

class Game_ball {
    constructor(x, y, r, symbol) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.symbol = symbol;
        this.speed_x = 0;
        this.speed_y = 0;
        this.set_speed();
        this.draw_self();
    }

    draw_self() {
        ctx.fillStyle = "#ffcc00";
        ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fill();
        ctx.closePath();
        // lisame tähe
        ctx.fillStyle = "#ffffff";
        // "bold 24px Verdana"
        ctx.font = "bold " + Math.round(this.r * 1.4) + "px Verdana";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.symbol, this.x, this.y);
    }

    set_speed() {
        while (this.speed_x == 0 && this.speed_y == 0) {
            // juhuslikud kiirused -5 ... 5
            this.speed_x = 5 - Math.round(Math.random() * 10);
            this.speed_y = 5 - Math.round(Math.random() * 10);
        }
    }

    move_self() {
        // edge of canvas
        if (this.x <= this.r || this.x >= canvas.width - this.r) {
            this.speed_x *= -1;
        }
        if (this.y <= this.r || this.y >= canvas.height - this.r) {
            this.speed_y *= -1;
        }
        this.x += this.speed_x;
        this.y += this.speed_y;
    }

    was_hit(m_x, m_y) {
        return pythagoras(this.x, this.y, m_x, m_y) <= this.r;
    }
}

function move_1() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.width; // Lähtestab kogu canvas elemendi
    ctx.fillStyle = "#ffcc00";
    x += speed_x;
    y += speed_y;
    // edge of canvas
    if (x <= r || x >= canvas.width - r) {
        speed_x *= -1;
    }
    if (y <= r || y >= canvas.height - r) {
        speed_y *= -1;
    }
    ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    ctx.closePath();
    requestAnimationFrame(move_1);
}*/
