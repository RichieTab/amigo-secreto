// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar el array donde se guardarán los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios antes y después

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que no se repita
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue ingresado a la lista de amigos.");
        input.value = "";
        return;
    }

    // Agregar al arreglo
    amigos.push(nombre);

    // Actualizar la lista visible
    mostrarLista();

    // Limpiar campo
    input.value = "";
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido previo

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];

    // Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;
}
