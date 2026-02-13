const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x=canvas.width/2;
let y=canvas.height - 30;
const dx = 2;
const dy = -2;


function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#e9e9e9ff";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x+ dx>canvas.width- ballRadius|| x+dx < ballRadius){
        dx= -dx;
    }
    if(y+dy>canvas.height- ballRadius|| y+dy < ballRadius){
        dy= -dy;
    }
 
}
function startGame(){
    setInterval(draw, 10);
}
const runButton = document.getElementById("runButton");
const stopButton = document.getElementById("stopButton");

runButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);