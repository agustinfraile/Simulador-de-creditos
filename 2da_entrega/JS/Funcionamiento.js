/* ================================
    FUNCIONAMIENTO DEL SIMULADOR
================================ */

// funcion para mostrar el select  
const mostrarSelect = (arr, lugar) => {

    // guardo en una variable la primera linea del select
    let elementoSeleccionado = `<option selected disabled>-- Elegir crédito --</option>`;

    // ciclo que me permite escribir en html cada elemento option del select dependiento del array que quiero agregar
    for(let i = 0; i < arr.length; i++ ) {
        elementoSeleccionado += `<option value=${arr[i]}>$${arr[i]}</option>`
        lugar.innerHTML = elementoSeleccionado;
    }

}


// funcion para cuando elijo un sueldo en el select
salarioIngresado.addEventListener('change', function(){
    // obtengo el valor del select
    let valorSelect = salarioIngresado.value;

    // agrego condicional con respecto al valor ingresado
    if (valorSelect == 1) {
        // guardo en una variable el array recortado para este caso
        let arrayRecortado = creditosDisponibles.slice(1, 4);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(arrayRecortado, creditoIngresado);
    }
    else if (valorSelect == 2) {
        // guardo en una variable el array recortado para este caso
        let arrayRecortado = creditosDisponibles.slice(1, 6);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(arrayRecortado, creditoIngresado);

    }
    else if (valorSelect == 3) {
        // guardo en una variable el array recortado para este caso
        let arrayRecortado = creditosDisponibles.slice(1, creditosDisponibles.length);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(arrayRecortado, creditoIngresado);

    }
    else{
        // guardo en una variable el array recortado para este caso
        let arrayRecortado = creditosDisponibles.slice(0,1);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(arrayRecortado, creditoIngresado);
    }
})



// evento para guardar datos del formulario
formularioCredito.addEventListener("submit", function validarFormulario(e){
    e.preventDefault();
    
    // ciclo while que permite reescribir el html con nueva informacion del credito
    while(containerCuotasImpresas.firstChild) {
        containerCuotasImpresas.removeChild(containerCuotasImpresas.firstChild)
    }

    
    // ciclo que permite escribir en el html cada cuota del credito
    for(let i = 1; i <= cuotaIngresada.value; i++) {

        // guardo en una variable el calculo 
        let valorCuotaTotal = (creditoIngresado.value / cuotaIngresada.value);
    
        // creo el elemento li
        let listado = document.createElement("li");

        // lo que voy a poner en el html
        listado.innerHTML = `Cuota ${i}: ${valorCuotaTotal.toFixed(2)}`;

        // agrego el listado al container del html
        containerCuotasImpresas.appendChild(listado);
        
    }
});

// evento para limpiar el formulario con el click 
botonLimpiar.addEventListener('click', function limparForm() {

    // ciclo while que permite borrar el html
    while(containerCuotasImpresas.firstChild) {
        containerCuotasImpresas.removeChild(containerCuotasImpresas.firstChild)
    }
    
    // limpando formulario
    formularioCredito.reset();  
    console.log('form limpiado con exito');

});