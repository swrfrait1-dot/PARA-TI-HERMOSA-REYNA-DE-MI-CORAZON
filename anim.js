// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando veo esos ojos👀" , time: 28 },
  { text: "Ahi es donde quiero vivir", time: 31 },
  { text: "Si me besan esos labios💋", time: 36 },
  { text: "Ay, asi quiero morir", time: 39 },
  { text: "Mi cancion de amor ahorita", time: 42 },
  { text: "Cuando me dices te amo <3", time: 45},
  { text: "Quiero ver esa sonrisa", time: 51 },
  { text: "En mi cama al amanecer", time: 55 },
  { text: "Siempre en mis sueños vi una luz", time: 60 },
  { text: "Tan tan bonita", time: 65 },
  { text: "Cantando pensamientos libres", time: 66 },
  { text: "Siempre fue mi favorita", time: 70 },
  { text: "Ay, como me enamore tan pesadamente", time: 75 },
  { text: "Tenia mil kilos rompiendo espina,", time: 83 },
  { text: "Pero no me importa si estas presente", time: 85 },
  { text: "Unos cambios tomaron lugar en mi vida", time: 93},
  { text: "Amorcito snriente, entraste sin advertirme", time: 99 },
  { text: "Pero no importa ya", time: 105 },
  { text: "Tenmos nuevas historias que contar", time: 110 },
  { text: "Amanecimos bien contentos", time: 113},
  { text: "Ahora vamos a dormirnos sin dudar", time: 118 },
  { text: "Cuando veo esos ojos👀", time: 122 },
  { text: "Ahi es donde quiero vivir😘", time: 126 },
  { text: "Si me besan esos labios💋", time: 129 },
  { text: "Ay asi quiero morir🥺", time: 133 },
  { text: "Mi cancion de amor ahorita💕", time: 137 },
  { text: "Cuando me dices te AMO <3", time: 141 },
  { text: "Quiero ver esa sonrisa", time: 145 },
  { text: "En mi cama al amanecer", time: 149 },
  { text: "Profundo como el mar es el hoyo de mi corazon", time: 157 },
  { text: "En tus manos esta llenarme con pura alegria", time: 163 },
  { text: "Yo jamas iba a pensar que mi existencia podria traer mas", time: 169 },
  { text: "Yo nunca vi lo bueno de mi vida hasta que me enseñaste a volar", time: 177 },
  { text: "Siempre veia a los contentos😊", time: 183 },
  { text: "Y mas que nada a los enamorados", time: 188 },
  { text: "Jamas pense que un dia me harias uno de ellos😭", time: 193 },
  { text: "Y ahora estamos aqui, TU Y YO, en la luna", time: 199 },
  { text: "Espero que todos algun dia tengan mi fortuna", time: 207 },
  { text: "CUANDO VEO ESOS OJOS 😍😍", time: 215 },
  { text: "AHI ES DONDE QUIERO VIVIR😘", time: 219 },
  { text: "SI ME BESAN ESOS LABIOS💋", time: 223 },
  { text: "AY ASI QUIERO MORIR🥺", time: 227 },
  { text: "MI CANCION DE AMOR AHORITA💕", time: 231 },
  { text: "CUANDO ME DICES TE AMO <3", time: 235 },
  { text: "QUIERO VER ESA SONRISA", time: 239},
  { text: "EN MI CAMA AL AMANECER (^///^) ", time: 243 },
  { text: "TE AMO MI NIÑA BELLA <333333", time: 254 },
  { text: "ME HACES FELIZ TODOS LOS DIASSSS <3", time: 260 },
  { text: "ERES LA MEJOR MUJER DEL MUNDO <3", time: 269 }, 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.3; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);