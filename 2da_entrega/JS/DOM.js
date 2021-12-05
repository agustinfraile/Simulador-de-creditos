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
        let valorCuotaTotal = (creditoIngresado.value / cuotaIngresada.value) * interesIngresado.value;
    
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