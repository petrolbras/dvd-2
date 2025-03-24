const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let velx = Math.round(4 + Math.random() * 5);
let vely = Math.round(4 + Math.random() * 5);
let assets = [
   "assets/alvorada.png",
   "assets/bravo.png",
   "assets/hyper.png",
   "assets/marcelo.png",
   "assets/marcus.png",
   "assets/miyuki.png",
];
let img = new Image();
let src = "";
setImage();

function setImage() {
   let probabilidade = Math.floor(Math.random() * 6);
   while (src == assets[probabilidade]) {
      probabilidade = Math.floor(Math.random() * 6);
   }
   img.src = assets[probabilidade];
   src = assets[probabilidade];
}

setInterval(() => {
   ctx.fillStyle = "white";
   ctx.fillRect(0, 0, 1200, 900);
   ctx.drawImage(img, x, y, 150, 150);
   x = x + velx;
   y = y + vely;

   if (y >= 900 - 150) {
      vely = vely * -1;
      setImage();
   }
   if (x >= 1200 - 150) {
      velx = velx * -1;
      setImage();
   }
   if (y <= 0) {
      vely = vely * -1;
      setImage();
   }
   if (x <= 0) {
      velx = velx * -1;
      setImage();
   }
}, 1000 / 60);
