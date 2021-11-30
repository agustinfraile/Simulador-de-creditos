// obtengo el contenedor del html
let cuotas = document.getElementById("container-creditos");


// FUNCION QUE MUESTRA CADA CUOTA CON SU RESPECTIVO VALOR TOMANDO LA CANTIDAD A PAGAR Y LA CANTIDAD DE CUOTAS COMO PARAMETROS E INICIALIZANDO 'i' EN 1
const mostrarCuotas = (c, e) => {
    for(let i = 1; i <= e; i++) {
    
        // creo el elemento li
        let listado = document.createElement("li");
        // lo que voy a poner en el html
        listado.innerHTML = `Cuota ${i}: ${c}`;
        // agrego el listado al container del html
        cuotas.appendChild(listado)
        
    }
}

// LLAMO A LAS FUNCIONES  
mostrarCuotas(cuotaConInteres, cuotaElegida);