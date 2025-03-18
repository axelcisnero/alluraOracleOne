// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo (){
    let ingresoAmigo = document.getElementById("amigo");

    if (ingresoAmigo.value === ""){
        alert ("¡Debes ingresar un nombre válido!")
        return;
    }
        listaAmigos.push(ingresoAmigo.value);
        ingresoAmigo.value = "";
        console.log(listaAmigos);

        actualizarLista();
}

function actualizarLista () {
    document.getElementById("listaAmigos").innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++){
        let nuevali = document.createElement("li");
        document.getElementById("listaAmigos").appendChild(nuevali);
        nuevali.textContent = listaAmigos[i];
    }
}