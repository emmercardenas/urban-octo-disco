// Frases románticas
const frases = [
  "Cada día contigo es mi favorito 💖",
  "Gracias por existir 🌟",
  "Contigo todo es mejor 💑",
  "Eres mi persona favorita 🥰",
  "Nuestro amor es infinito ♾️"
];
let indice = 0;

function mostrarFrase() {
  const frase = document.getElementById("frase");
  frase.innerText = frases[indice];
  indice = (indice + 1) % frases.length;
}

// Contador de tiempo juntos
function actualizarContador() {
  const inicio = new Date("2024-05-25"); // Cambia esta fecha si lo necesitas
  const hoy = new Date();

  let anios = hoy.getFullYear() - inicio.getFullYear();
  let meses = hoy.getMonth() - inicio.getMonth();
  let dias = hoy.getDate() - inicio.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anios--;
    meses += 12;
  }

  document.getElementById("contador").innerText =
    `Llevamos juntos ${anios} años, ${meses} meses y ${dias} días ❤️`;
}
actualizarContador();

// Efecto de corazones volando
const canvas = document.getElementById("corazones");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let corazones = [];

function Corazon() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();

  this.draw = function () {
    ctx.globalAlpha = this.opacity;
    ctx.font = `${this.size}px Arial`;
    ctx.fillText("❤️", this.x, this.y);
  };

  this.update = function () {
    this.y -= this.speed;
    if (this.y < -50) {
      this.y = canvas.height + 100;
      this.x = Math.random() * canvas.width;
    }
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  corazones.forEach(c => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(animate);
}

function iniciarCorazones() {
  for (let i = 0; i < 50; i++) {
    corazones.push(new Corazon());
  }
  animate();
}

iniciarCorazones();

const vales = [
  "Vale por un beso 😘",
  "Vale por una cita sorpresa 💫",
  "Vale por una película juntos 🎬",
  "Vale por un masaje 👐",
  "Vale por desayuno en la cama ☕🍞",
  "Vale por una noche de juegos 🎲",
  "Vale por elegir la playlist 🎧",
  "Vale por decirte algo bonito 💌",
  "Vale por un día sin preocupaciones 🌈",
  "Vale por un abrazo eterno 🤗"
];

function mostrarVale(elemento) {
  if (!elemento.classList.contains("abierto")) {
    const index = Array.from(document.querySelectorAll(".vale")).indexOf(elemento);
    elemento.innerText = vales[index];
    elemento.classList.add("abierto");
  }
}
// Calendario de recuerdos
function seleccionarMes(mesIndex) {
  const input = document.getElementById("fotoInput");
  input.onchange = function (event) {
    const archivo = event.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = function (e) {
        const imgData = e.target.result;
        const mesElement = document.querySelectorAll(".mes")[mesIndex];
        mesElement.innerHTML = mesElement.innerHTML.split("<")[0]; // Limpiar contenido anterior
        const img = document.createElement("img");
        img.src = imgData;
        mesElement.appendChild(img);
        // Guardar en localStorage
        localStorage.setItem(`mes-foto-${mesIndex}`, imgData);
      };
      lector.readAsDataURL(archivo);
    }
  };
  input.click();
}

// Cargar fotos guardadas al recargar
window.onload = function () {
  for (let i = 0; i < 12; i++) {
    const data = localStorage.getItem(`mes-foto-${i}`);
    if (data) {
      const mesElement = document.querySelectorAll(".mes")[i];
      const img = document.createElement("img");
      img.src = data;
      mesElement.appendChild(img);
    }
  }
};


