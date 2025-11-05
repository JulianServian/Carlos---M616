let numeroSecreto;
let intentos;
const maxIntentos = 10;

// Inicia o reinicia el juego
export function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
}

// Comprueba el número introducido por el usuario
export function comprobarNumero(numeroUsuario) {
  intentos++;
  if (numeroUsuario === numeroSecreto) {
    return "¡Correcto!";
  } else if (numeroUsuario > numeroSecreto) {
    return "Demasiado alto";
  } else {
    return "Demasiado bajo";
  }
}

// Llamamos a iniciarJuego al cargar
iniciarJuego();