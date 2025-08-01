let listaAmigos = [] ;

function agregarAmigo () {
    const input = document.getElementById("amigo");
    //console.log(input.value);
    const nombre = input.value.trim(); //trim es para eliminar espacios al inicio y al final
    if (nombre === "") {
        alert ("Por favor inserte un nombre.");
        return;
    } else if (nombre.match(/\d/)) {
        alert("El nombre no debe contener números.");
        return;
    }
    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    } else if (listaAmigos.length === 1) {
        alert ("Solo hay un amigo en la lista, porfavor agregue a 1 mas para sortear.");
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const resultado = listaAmigos[indice];

    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; 

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${resultado}`;
    ulResultado.appendChild(li);
}

