// Lista de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let amigo = document.getElementById('amigo').value.trim();
  if (!amigo) {
    alert('Por favor, inserte un nombre.');
    return;
  }
  amigos.push(amigo);
  document.getElementById('amigo').value = '';
  mostrarAmigos();
}

// Función para eliminar un amigo por índice
function eliminarAmigo(indice) {
  if (indice >= 0 && indice < amigos.length) {
    amigos.splice(indice, 1);
    mostrarAmigos();
  }
}

// Función para editar un amigo por índice
function editarAmigo(indice) {
  if (indice >= 0 && indice < amigos.length) {
    let nuevoNombre = prompt('Ingrese el nuevo nombre:', amigos[indice]);
    if (nuevoNombre && nuevoNombre.trim() !== '') {
      amigos[indice] = nuevoNombre.trim();
      mostrarAmigos();
    } else {
      return;
    }
  } else {
    alert('Índice inválido.');
  }
}

// Función para mostrar amigos
function mostrarAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach((amigo, indice) => {
    let li = document.createElement('li');
    li.innerHTML = `${amigo} <div class='button-control'>
								<img src='assets/edit.svg' alt='Editar' title='Editar' onclick='editarAmigo(${indice})'>
	                			<img src='assets/trash.svg' alt='Eliminar' title='Eliminar' onclick='eliminarAmigo(${indice})'>
							 </div>`;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indice];
  resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  let li = document.createElement('li');
  li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
  resultado.appendChild(li);
}
