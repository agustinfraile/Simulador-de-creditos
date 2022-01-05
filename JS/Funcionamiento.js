/* ================================
    FUNCIONAMIENTO DEL SIMULADOR
================================ */

// funcion para mostrar el select de manera dinamica 
const mostrarSelect = (arr, lugar) => {

    // guardo en una variable la primera linea del select
    let elementoSeleccionado = `<option selected disabled>-- Elegir crédito --</option>`;

    // ciclo que me permite escribir en html cada elemento option del select dependiento del array que quiero agregar
    for(let i = 0; i < arr.length; i++ ) {
        elementoSeleccionado += `<option value=${arr[i]}>$${arr[i]}</option>`
        lugar.innerHTML = elementoSeleccionado;
    }

}


// funcion para mostrar en el select los creditos disponibles dependiendo cada sueldo
salarioIngresado.addEventListener('change', function(){
    // obtengo el valor del select
    let valorSelect = salarioIngresado.value;

    // agrego condicional con respecto al valor ingresado
    if (valorSelect == 1) {
        // guardo en una variable el array recortado para este caso
        let creditosDisponiblesElegidos = creditosDisponibles.slice(1, 4);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(creditosDisponiblesElegidos, creditoIngresado);
    }
    else if (valorSelect == 2) {
        // guardo en una variable el array recortado para este caso
        let creditosDisponiblesElegidos = creditosDisponibles.slice(1, 6);
        // llamo a la funcion mostrarselect y le paso los parametros en donde quiero que se muestren
        mostrarSelect(creditosDisponiblesElegidos, creditoIngresado);

    }
    else if (valorSelect == 3) {
        // guardo en una variable el array recortado para este caso
        let creditosDisponiblesElegidos = creditosDisponibles.slice(1, creditosDisponibles.length);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(creditosDisponiblesElegidos, creditoIngresado);

    }
    else{
        // guardo en una variable el array recortado para este caso
        let creditosDisponiblesElegidos = creditosDisponibles.slice(0,1);
        // llamo a la funcion mostrarselecty le paso los parametros en donde quiero que se muestren
        mostrarSelect(creditosDisponiblesElegidos, creditoIngresado);
    }
})


// evento para guardar datos del formulario y ejecutar los calculos correspondientes
formularioCredito.addEventListener( "submit", function validarFormulario(e) {
    e.preventDefault(); //almaceno el formulario
    
    // ciclo while que permite reescribir el html con nueva informacion del credito (cuando elijo otro credito y no puse el boton de limpiar)
    while(containerInformacion.firstChild) {
        
        containerInformacion.removeChild(containerInformacion.firstChild);

    }

    // condicional que permite mostrar un mensaje de error en caso de que no complete los datos necesarios
    if (    (salarioIngresado.value >= 0 && salarioIngresado.value <= 3) && 
            (creditoIngresado.value != 10) && 
            (cuotaIngresada.value >= 12 && cuotaIngresada.value <= 60)     ) 
    {
        // agrego la clase que oculta el mensaje de error 
        containerError.classList.add("container_error-form");
    } else {
        // elimino la clase que oculta el mensaje de error para poder mostrar el mensaje
        containerError.classList.remove('container_error-form');
    }

    // condicional que permite calcular los valores en caso de elegir sistema frances y en caso de elegir sistema aleman
    if (sistemaIngresado.value === 'frances') {
        calcularCuotaFrances(creditoIngresado.value, cuotaIngresada.value);
    } else if (sistemaIngresado.value === 'aleman') {
        calcularCuotaAleman(creditoIngresado.value, cuotaIngresada.value);
    } else {
        console.log('por favor elija un sistema valido');
    }


    // agrego el credito ingresado en el array de creditos que realice en las declaraciones
    listadoNuevosCreditos.push(new Usuario (salarioIngresado.value, creditoIngresado.value, cuotaIngresada.value, sistemaIngresado.value));

    // paso a JSON 
    let listadoNuevosCreditosJSON = JSON.stringify(listadoNuevosCreditos)

    // agrego al local storage el listado de creditos ya pasado a JSON
    localStorage.setItem('credito', listadoNuevosCreditosJSON)
});

// evento para limpiar el formulario con el click 
botonLimpiar.addEventListener('click', function limparForm() {
    
    // ciclo while que permite borrar el html agregado desde del dom
    while(containerInformacion.firstChild) {
        containerInformacion.removeChild(containerInformacion.firstChild);
    }
    
    // para limpiar el formulario
    formularioCredito.reset();

    // agrego la clase que oculta el mensaje de error para poder ocultar el mensaje
    containerError.classList.add("container_error-form");

});