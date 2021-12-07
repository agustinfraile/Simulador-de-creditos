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

// funcion para calcular el valor de la cuota sin el interes
const valorCuota = (credito, cuota) => (credito/cuota).toFixed(2);




// funcion para añadir el interes a las cuotas de acuerdo al valor de la cuota elegida
const cuotaConInteres = (cuota, valorCuota) => {
    let interesConCuota;

    if (cuota == 12) {
        interesConCuota = valorCuota * interesMensual[0];
        return interesConCuota.toFixed(2);
    }
    else if (cuota == 24) {
        interesConCuota = valorCuota * interesMensual[1];
        return interesConCuota.toFixed(2);
    }
    else if (cuota == 36) {
        interesConCuota = valorCuota * interesMensual[2];
        return interesConCuota.toFixed(2);
    }
    else if (cuota == 48) {
        interesConCuota = valorCuota * interesMensual[3];
        return interesConCuota.toFixed(2);
    }
    else if (cuota == 60) {
        interesConCuota = valorCuota * interesMensual[4];
        return interesConCuota.toFixed(2);
    }
    

}


// funcion para calcular el total a devolver del credito
const creditoADevolver = (cuota, valorDeLaCuota) => (cuota * valorDeLaCuota);


 


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
        valorDivision = valorCuota(creditoIngresado.value, cuotaIngresada.value);
        valorCuotaTotal = cuotaConInteres(cuotaIngresada.value, valorDivision);
        

        // creo el elemento li
        let listado = document.createElement("li");

        // lo que voy a poner en el html
        listado.innerHTML = `Cuota ${i}: $${valorCuotaTotal}`;

        // agrego el listado al container del html
        containerCuotasImpresas.appendChild(listado);
        
    }

    // creando usuario a partir de los datos ingresados anteriormente
    const creditoUsuario = new Usuario(salarioIngresado.value, creditoIngresado.value, cuotaIngresada.value);
    
    // agrego el credito ingresado por el usuario al array
    listaDeCreditos.push(creditoUsuario);
    console.log(listaDeCreditos);

    // agrego al local storage la lista de objetos en formato JSON 
    localStorage.setItem('listaDeCreditos', JSON.stringify(listaDeCreditos));



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