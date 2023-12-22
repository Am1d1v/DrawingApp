

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let color = 'black';
let x;
let y;

//Draw Circle Function
function drawCircle(positionX, positionY){
    ctx.beginPath();
    ctx.arc(positionX, positionY, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}
drawCircle(100, 120);


// Draw Line
function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke()
}
drawLine(10, 10, 300, 300)