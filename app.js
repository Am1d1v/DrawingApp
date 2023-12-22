

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const sizeControl = document.querySelector('#size');
const colorControl = document.querySelector('#color');
const clear = document.querySelector('#clear');

let size = 10;
let color = 'black';
let isPressed = false;
let x;
let y;


// If mouse is pressed set value isPressed to true
canvas.addEventListener('mousedown', (event) => {
    isPressed = true;

    x = event.offsetX
    y = event.offsetY
})

// If mouse is up set value isPressed to false
canvas.addEventListener('mouseup', (event) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

// If isPressed === true, we allow to draw on canvas
canvas.addEventListener('mousemove', (event) => {
    if(isPressed){
        const x2 = event.offsetX;
        const y2 = event.offsetY;
        
        drawCircle(x2, y2)

        // If we move pressed mouse very fast it creates gaps between circles
        // Fix gap between circles
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

//Draw Circle Function
function drawCircle(positionX, positionY){
    ctx.beginPath();
    ctx.arc(positionX, positionY, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}

// Draw Line
function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}

// Change Color
colorControl.addEventListener('change', (event) => {
    color = event.target.value;
});

// Increase Size
increaseButton.addEventListener('click', () => {
    size++;
    sizeControl.innerHTML = size;
})

// Decrease Size
decreaseButton.addEventListener('click', () => {
    size--;
    sizeControl.innerHTML = size;
})
