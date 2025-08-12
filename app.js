// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos
let amigos = []

// Función para agregar un amigo
function agregarAmigo() {
	let amigo = document.getElementById("amigo").value.trim();
	if (!amigo) {
		alert("Por favor, inserte un nombre.");
		return;
	}
	amigos.push(amigo);
	document.getElementById("amigo").value = "";
    mostrarAmigos();
}

// Función para mostrar amigos
function mostrarAmigos() {
	let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
	amigos.forEach((amigo) => {
		let li = document.createElement("li");
		li.textContent = amigo;
		lista.appendChild(li);
	});
}

// Función para sortear un amigo secreto
function sortearAmigo() {
	if (amigos.length === 0) {
		alert("No hay amigos para sortear.");
		return;
	}
	let indice = Math.floor(Math.random() * amigos.length);
	let amigoSorteado = amigos[indice];
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultado.appendChild(li);
}