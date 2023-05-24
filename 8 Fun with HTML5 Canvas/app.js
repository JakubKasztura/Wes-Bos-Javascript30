const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.moveTo(0, 0);
ctx.lineTo(window.innerWidth, window.innerHeight);
ctx.stroke();

ctx.moveTo(window.innerWidth, 0);
ctx.lineTo(0, window.innerHeight);
ctx.stroke();

ctx.beginPath(100, 200);
ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.globalCompositeOperation = "xor";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) {
    return;
  }
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
  ctx.strokeStyle = `hsl(${lastX / 10 + lastY / 5},50%,50%)`;
  ctx.lineWidth = lastX / 10 + lastY / 15;
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
