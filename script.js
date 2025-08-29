const messageDiv = document.getElementById("message");
const optionsDiv = document.getElementById("options");

// Inicio
function start() {
  messageDiv.innerHTML = "Haz sido invitada por un desconocido a una cena el día <b>29 de agosto de 2025</b>. ¿Aceptas?";
  optionsDiv.innerHTML = `
    <button onclick="decline()">Declinar</button>
    <button onclick="accept()">Aceptar</button>
  `;
}

// Declinar
function decline() {
  messageDiv.innerHTML = "Esa opción está deshabilitada 😅<br>Inténtalo en 2000 años.";
  optionsDiv.innerHTML = `<button onclick="start()">Volver</button>`;
}

// Aceptar
function accept() {
  messageDiv.innerHTML = "Perfecto 💖 Elige la hora para nuestra cita:";
  optionsDiv.innerHTML = `
    <button onclick="chooseHour('6:00 pm')">6:00 pm</button>
    <button onclick="chooseHour('7:00 pm')">7:00 pm</button>
    <button onclick="chooseHour('8:00 pm')">8:00 pm</button>
  `;
}

// Escoger hora
function chooseHour(hour) {
  if (hour === "6:00 pm") {
    messageDiv.innerHTML = "A esa hora no se puede, hay compromiso con el ejercicio 🏋️‍♀️. Intenta otra hora.";
    return accept();
  }
  if (hour === "7:00 pm") {
    messageDiv.innerHTML = "Así sudados nos van a ver mal en el restaurante 😅. Mejor date un baño relajante 🚿.";
    return accept();
  }
  if (hour === "8:00 pm") {
    messageDiv.innerHTML = "Ponte hermosa como siempre 💕, hoy la cena va por parte de tu novio 😍. <br><br>Elige el restaurante:";
    optionsDiv.innerHTML = `
      <button onclick="chooseRestaurant(1)">Fritos La Fortaleza</button>
      <button onclick="chooseRestaurant(2)">Perros Donde Pipe</button>
      <button onclick="chooseRestaurant(3)">Arepitas del Gordo</button>
      <button onclick="chooseRestaurant(4)">Piso 4</button>
    `;
  }
}

// Escoger restaurante
function chooseRestaurant(option) {
  if (option === 4) {
    messageDiv.innerHTML = "No comas mucho en el día 🍴 para que disfrutes a gusto tu cena en el Piso 4 😍.";
  } else {
    messageDiv.innerHTML = "Te amo 💖, eres una todo terreno 😘. Pero prueba de nuevo.";
    return accept(); // Se devuelve a la selección de hora
  }

  optionsDiv.innerHTML = `
    <p>🎉 Muchas gracias por participar. Esta invitación caducará en 30 minutos ⏳</p>
  `;
}

// Ejecutar al inicio
start();
