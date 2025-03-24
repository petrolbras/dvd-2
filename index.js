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
let assets = ['assets/alvorada.png', 'assets/bravo.png', 'assets/hyper.png', 'assets/marcelo.png', 'assets/marcus.png', 'assets/miyuki.png']
let img = new Image()
img.src = assets[Math.floor(Math.random()*6)]

setInterval(() => {
ctx.fillStyle = "white"
ctx.fillRect(0, 0, 1200, 900)
ctx.drawImage(img, x, y, 150, 150)
x = x + velx
y = y + vely

if (y >= 900-150) {
   vely = vely*-1
   img.src = assets[Math.floor(Math.random()*6)]
}
if (x >= 1200-150) {
   velx = velx*-1
   img.src = assets[Math.floor(Math.random()*6)]
}
if (y <= 0) {
   vely = vely*-1
   img.src = assets[Math.floor(Math.random()*6)]
}
if (x <= 0) {
   velx = velx*-1
   img.src = assets[Math.floor(Math.random()*6)]
}


}, 1000/60);
