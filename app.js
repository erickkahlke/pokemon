let path = "https://pokeapi.co/api/v2/pokemon/";

let numero = Math.floor(Math.random() * 100);

let promesa1 = fetch(path + numero);

numero = Math.floor(Math.random() * 100);

let promesa2 = fetch(path + numero);


numero = Math.floor(Math.random() * 100);

let promesa3 = fetch(path + numero);

//que falta??

Promise.race([promesa1, promesa2, promesa3])
    .then((respuesta) => {
            return respuesta.json();
            console.log(respuesta);
        }



        function dibujarPokemon() {
            let ctn = document.getElementById("Ctn")
            ctn.innerHTML += `
    <img src="${informacion.sprites.front_default}" />
    `;
        }