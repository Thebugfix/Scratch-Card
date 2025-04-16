let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let container = canvas.parentNode;

const init = ()=>{
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    context.fillStyle = "#77767b";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

let isDragging = false;

const scratch = (x , y)=>{
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 30, 0, 2 * Math.PI);
    context.fill();
}

canvas.addEventListener("mousedown",(eraser)=> {
    isDragging = true;
    scratch(eraser.offsetX,eraser.offsetY);
});

canvas.addEventListener("mousemove",(eraser)=>{
    if (isDragging) {
        scratch(eraser.offsetX,eraser.offsetY);
    }
});

canvas.addEventListener("mouseup",()=>{
    isDragging = false;
});

canvas.addEventListener("mouseleave",()=>{
    isDragging = false;
});

init();