// funciones para el audio de fondo 
const audio = document.getElementById('bg-audio');
audio.volume = 0.2;
window.addEventListener('load', function() {
if (audio) {
audio.play().catch(function(err) {
console.warn('Autoplay bloqueado, espera interacción de usuario:', err);
});
}
});
// animaciones de inicio
const Login = document.querySelectorAll(".btn_R");
const CrearCuenta = document.querySelectorAll(".btn_I");
const inicio = document.getElementById("containerInit");
const botones = document.querySelectorAll(".btnS");
const clickSoundPath = "/🎵 Audios/click.mp3";
const clickSound =  "/🎵 Audios/btnClicksound.mp3";

function playHoverSound(audio) {
  const hoverSound = new Audio(audio);
  hoverSound.volume = 0.3;
  hoverSound.currentTime = 0;
  hoverSound.play().catch((err) => {
    console.warn('No se pudo reproducir click.mp3:', err);
  });
}

// Referencias adicionales para mostrar/ocultar secciones
const textoInicio = document.querySelector('.text_container');
const loginBlock = document.getElementById('login');
const registrerBlock = document.getElementById('registrer');

// Inicializar estado: solo texto inicio visible
if (loginBlock) loginBlock.classList.add('hidden');
if (registrerBlock) registrerBlock.classList.add('hidden');

function showLogin() {
  if (textoInicio) textoInicio.classList.add('hidden');
  if (loginBlock) loginBlock.classList.remove('hidden');
  if (registrerBlock) registrerBlock.classList.add('hidden');
}

function showRegister() {
  if (textoInicio) textoInicio.classList.add('hidden');
  if (registrerBlock) registrerBlock.classList.remove('hidden');
  if (loginBlock) loginBlock.classList.add('hidden');
}

// Eventos de movimiento
Login.forEach((btn) => {
  btn.addEventListener("click", () => {
    inicio.classList.add("animado");
    showLogin();
  });
});
CrearCuenta.forEach((btn) => {
  btn.addEventListener("click", () => {
    inicio.classList.add("animado");
    showRegister();
  });
});

// efecto de sonido al pasar el cursor (hover)
botones.forEach((btN) => {
  btN.addEventListener("mouseenter", () => {
    playHoverSound(clickSoundPath);
  });

  // opcional: click físico también puede usar el mismo sonido
  btN.addEventListener("click", () => {
    playHoverSound(clickSound);
  });
});