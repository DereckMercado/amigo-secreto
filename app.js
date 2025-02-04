// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    //Si el cuadro esta vacio
  if(document.getElementById("amigo").value == ""){
    //alerta que se necesita un nombre
        alert("Por favor, inserte un nombre.");
  }else{ //si no
    //agrega el nombre al array
    amigos.push(document.getElementById("amigo").value);
    //se vacia el cuadro de texto
    document.getElementById("amigo").value = "";
    //verifica que se guardan los nombres
    console.log(amigos); 
    //llama a la funcion para mostrar los nombres
    aniadirEtiquetaAmigo(amigos);
  }
}

function aniadirEtiquetaAmigo(amigos) {
    //selecciona el elemento donde se van a mostrar los nombres
    let lista = document.getElementById("listaAmigos");
    //se vacia la lista
    lista.innerHTML = "";
    //recorre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        //lo agrega a la lista
        lista.innerHTML += `<li>${amigos[i]}</li>`; 
    }
}

function sortearAmigo(){
    //si la lsta amigos esta vacia
    if(amigos.length == 0){ 
        alert("No hay amigos para sortear.");
    }
    //en otro caso
    else{
        //se selecciona un amigo al azar, math.floor redondea el numero aleatorio que da
        //math.random y al multiplicarlo por amigos.length se obtiene un numero entre 0 y la cantidad de amigos 
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        //se muestra el amigo sorteado
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }
}