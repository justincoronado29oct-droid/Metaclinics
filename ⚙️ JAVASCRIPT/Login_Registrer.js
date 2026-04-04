// funciones para el audio de fondo 
const audio = document.getElementById('bg-audio');
audio.volume = 0.1;
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
function setHeaderActive(mode) {
const headerLoginBtn = document.querySelector('header #crearCuenta');
const headerRegisterBtn = document.querySelector('header #registrate');
if (headerLoginBtn) headerLoginBtn.classList.toggle('active', mode === 'login');
if (headerRegisterBtn) headerRegisterBtn.classList.toggle('active', mode === 'register');
if (mode === null) {
if (headerLoginBtn) headerLoginBtn.classList.remove('active');
if (headerRegisterBtn) headerRegisterBtn.classList.remove('active');
}
}

function showLogin() {
if (textoInicio) textoInicio.classList.add('hidden');
if (loginBlock) loginBlock.classList.remove('hidden');
if (registrerBlock) registrerBlock.classList.add('hidden');
setHeaderActive('login');
}
function showRegister() {
if (textoInicio) textoInicio.classList.add('hidden');
if (registrerBlock) registrerBlock.classList.remove('hidden');
if (loginBlock) loginBlock.classList.add('hidden');
setHeaderActive('register');
}

function showInicio() {
if (textoInicio) textoInicio.classList.remove('hidden');
if (loginBlock) loginBlock.classList.add('hidden');
if (registrerBlock) registrerBlock.classList.add('hidden');
setHeaderActive(null);
inicio.classList.remove('animado');
moveCirclesUp();
}

function moveCirclesUp() {
if (circlesContainer) {
circlesContainer.classList.remove('circles-moved');
}
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
// activar clase `.active` en botones del header al seleccionarlos
const headerButtons = document.querySelectorAll('header .btn_container .btn_header, header .btn_container .btn_headerAlt');
headerButtons.forEach((btn) => {
btn.addEventListener('click', () => {
headerButtons.forEach((b) => b.classList.remove('active'));
btn.classList.add('active');

if (btn.id === 'crearCuenta') {
inicio.classList.add('animado');
showLogin();
} else if (btn.id === 'registrate') {
inicio.classList.add('animado');
showRegister();
}

moveCirclesDown();
});
});

// Event listener para todos los botones volver
const volverBtns = document.querySelectorAll('.goback');
volverBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    showInicio();
    playHoverSound(clickSound);
  });
  btn.addEventListener('mouseenter', () => {
    playHoverSound(clickSoundPath);
  });
});

const cancelBtns = document.querySelectorAll('.btni.cancel');
cancelBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    showInicio();
    playHoverSound(clickSound);
  });
  btn.addEventListener('mouseenter', () => {
    playHoverSound(clickSoundPath);
  });
});

// mover el contenedor de círculos hacia abajo al interactuar con botones
const circlesContainer = document.querySelector('.cicles_container');
const moveCirclesButtons = document.querySelectorAll('.btnS, header .btn_header, header .btn_headerAlt');
function moveCirclesDown() {
if (circlesContainer) {
circlesContainer.classList.add('circles-moved');
}
}
moveCirclesButtons.forEach((btn) => {
btn.addEventListener('click', moveCirclesDown);
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

// Mostrar mensaje de ayuda para contraseña
const fullNameInput = document.getElementById('Nombrecompleto');
const emailInput = document.getElementById('CorreoElectronico');
const passwordInput = document.getElementById('Contraseña');
const confirmPasswordInput = document.getElementById('ConfirmarContraseña');
const passwordHelp = document.getElementById('passwordHelp');
const togglePasswordCheckbox = document.getElementById('togglePassword');
const createAccountBtn = document.getElementById('createAccountBtn');
const registerMessage = document.getElementById('registerMessage');
const loginEmailInput = document.getElementById('CorreoElectronicoLogin');
const loginPasswordInput = document.getElementById('ContraseñaLogin');
const loginConfirmBtn = document.getElementById('loginConfirmBtn');
const loginMessage = document.getElementById('loginMessage');

let registeredName = '';
let registeredEmail = '';
let registeredPassword = '';

function showRegisterMessage(message, type = 'error') {
  if (!registerMessage) return;
  registerMessage.textContent = message;
  registerMessage.classList.toggle('success', type === 'success');
}

function clearRegisterMessage() {
  if (!registerMessage) return;
  registerMessage.textContent = '';
  registerMessage.classList.remove('success');
}

function showLoginMessage(message, type = 'error') {
  if (!loginMessage) return;
  loginMessage.textContent = message;
  loginMessage.classList.toggle('success', type === 'success');
}

function clearLoginMessage() {
  if (!loginMessage) return;
  loginMessage.textContent = '';
  loginMessage.classList.remove('success');
}

function togglePasswordVisibility(show) {
  const newType = show ? 'text' : 'password';
  if (passwordInput) passwordInput.type = newType;
  if (confirmPasswordInput) confirmPasswordInput.type = newType;
  if (loginPasswordInput) loginPasswordInput.type = newType;
}

if (togglePasswordCheckbox) {
  togglePasswordCheckbox.addEventListener('change', (event) => {
    togglePasswordVisibility(event.target.checked);
  });
}

const formInputs = document.querySelectorAll('.input');
formInputs.forEach((input) => {
  input.addEventListener('click', () => {
    input.value = '';
  });
});

if (createAccountBtn) {
  createAccountBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clearRegisterMessage();

    const nameValue = fullNameInput?.value.trim() || '';
    const emailValue = emailInput?.value.trim() || '';
    const passwordValue = passwordInput?.value || '';
    const confirmValue = confirmPasswordInput?.value || '';

    if (!nameValue || !emailValue || !passwordValue || !confirmValue) {
      showRegisterMessage('Todos los campos son obligatorios.', 'error');
      return;
    }

    if (passwordValue !== confirmValue) {
      showRegisterMessage('Las contraseñas no coinciden.', 'error');
      return;
    }

    registeredName = nameValue;
    registeredEmail = emailValue;
    registeredPassword = passwordValue;

    showRegisterMessage('Cuenta creada con éxito. Redirigiendo al login...', 'success');
    if (registrerBlock) registrerBlock.classList.add('hidden');
    setTimeout(() => {
      inicio.classList.add('animado');
      showLogin();
      moveCirclesDown();
    }, 400);
  });
}

if (loginConfirmBtn) {
  loginConfirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clearLoginMessage();

    const emailValue = loginEmailInput?.value.trim() || '';
    const passwordValue = loginPasswordInput?.value || '';

    if (!emailValue || !passwordValue) {
      showLoginMessage('Completa todos los campos para iniciar sesión.', 'error');
      return;
    }

    if (emailValue !== registeredEmail || passwordValue !== registeredPassword) {
      showLoginMessage('Correo o contraseña incorrectos.', 'error');
      return;
    }

    showLoginMessage('Ingreso exitoso. Bienvenido de nuevo.', 'success');
    setTimeout(() => {
      showInicio();
    }, 600);
  });
}

if (passwordInput && passwordHelp) {
  passwordInput.addEventListener('focus', () => {
    passwordHelp.style.opacity = '1';
    passwordHelp.style.visibility = 'visible';
  });
  passwordInput.addEventListener('blur', () => {
    passwordHelp.style.opacity = '0';
    passwordHelp.style.visibility = 'hidden';
  });
}