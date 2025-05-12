// Declara variáveis do canvas
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

// Variáveis
let assets = [
	"assets/alvorada.png",
	"assets/bravo.png",
	"assets/hyper.png",
	"assets/marcelo.png",
	"assets/marcus.png",
	"assets/miyuki.png"
];
let bolinhas = [];
let tamanhox = 1200;
let tamanhoy = 900;
let tamanhoicone = 150;
let contadortexto = 0

// Função para inserir bolinha
function criarbolinha() {
	let img = new Image();
	setImage(img);

	let velx = 6 + Math.random() * 7;
	let vely = 4 + Math.random() * 7;
	if (Math.round(Math.random()) == 1) {
		velx = velx * -1;
		vely = vely * -1;
	}
	let x = Math.random() * (tamanhox - tamanhoicone);
	let y = Math.random() * (tamanhoy - tamanhoicone);
	bolinhas.push({ x, y, velx, vely, img });

	atualizarcontador()
}

// Função para remover uma bolinha
function removerbolinha() {
	bolinhas.pop()

	atualizarcontador()
}

// Função para remover todas as bolinhas
function removertodas() {
	bolinhas = []

	atualizarcontador()
}

// Função para contar a quantidade de bolinhas
function atualizarcontador(){
	document.getElementById('contador').innerHTML = `A quantidade de bolinhas é ${bolinhas.length}`
}

atualizarcontador()

// Função para mudar as imagens a cada toque na borda
function setImage(img) {
	let probabilidade = Math.floor(Math.random() * assets.length);
	if (img.src.includes(assets[probabilidade])) {
		probabilidade = (probabilidade + 1) % assets.length;
	}
	img.src = assets[probabilidade];
}

// Intervalo de criação/movimentação das bolinhas
setInterval(() => {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, tamanhox, tamanhoy);

	for (var i = 0; i < bolinhas.length; i++) {
		ctx.drawImage(bolinhas[i].img, bolinhas[i].x, bolinhas[i].y, tamanhoicone, tamanhoicone);

		bolinhas[i].x = bolinhas[i].x + bolinhas[i].velx;
		bolinhas[i].y = bolinhas[i].y + bolinhas[i].vely;

		if (bolinhas[i].y >= tamanhoy - tamanhoicone) {
			bolinhas[i].vely = bolinhas[i].vely * -1;
			setImage(bolinhas[i].img);
		}
		if (bolinhas[i].x >= tamanhox - tamanhoicone) {
			bolinhas[i].velx = bolinhas[i].velx * -1;
			setImage(bolinhas[i].img);
		}
		if (bolinhas[i].y <= 0) {
			bolinhas[i].vely = bolinhas[i].vely * -1;
			setImage(bolinhas[i].img);
		}
		if (bolinhas[i].x <= 0) {
			bolinhas[i].velx = bolinhas[i].velx * -1;
			setImage(bolinhas[i].img);
		}
	}
}, 1000 / 60);