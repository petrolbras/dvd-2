/**
   * Explicando o propósito do código
   * @type {HTMLCanvasElement}
   */

const canvas = document.getElementById("mycanvas")
const ctx = canvas.getContext("2d")

let x = 0
let y = 0
let velx = Math.round(3+Math.random()*5)
let vely = Math.round(3+Math.random()*5)
setInterval(() => {
ctx.fillStyle = "white"
ctx.fillRect(0, 0, 1200, 900)
ctx.fillStyle = "orange"
ctx.fillRect(x, y, 200, 100)
x = x + velx
y = y + vely

if (y >= 900-100) {
   vely = vely*-1
}
if (x >= 1200-200) {
   velx = velx*-1
}
if (y <= 0) {
   vely = vely*-1
}
if (x <= 0) {
   velx = velx*-1
}


}, 1000/60);
