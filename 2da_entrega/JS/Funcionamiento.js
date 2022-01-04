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


// evento para guardar datos del formulario y ejecutar las funciones
formularioCredito.addEventListener( "submit", function validarFormulario(e) {
    e.preventDefault(); 
    
    // ciclo while que permite reescribir el html con nueva informacion del credito
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

    // condicional que permite calcular los valores en caso de elegir sistema frances
    if (sistemaIngresado.value === 'frances') {
        calcularCuotaFrances(creditoIngresado.value, cuotaIngresada.value);
    } else if (sistemaIngresado.value === 'aleman') {
        console.log('falta calcular sistema aleman')
    }
    

    
})














// evento para guardar datos del formulario
// formularioCredito.addEventListener("submit", function validarFormulario(e){
//     e.preventDefault();
    

//     if (    (salarioIngresado.value >= 0 && salarioIngresado.value <= 3) && 
//             (creditoIngresado.value != 10) && 
//             (cuotaIngresada.value >= 12 && cuotaIngresada.value <= 60) &&
//             (sistemaIngresado.value === 'frances')
//     ) {


//         // ciclo while que permite reescribir el html con nueva informacion del credito
//         while(containerCuotasImpresas.firstChild) {
//             containerCuotasImpresas.removeChild(containerCuotasImpresas.firstChild);
//         }
        
//         // agrego la clase que oculta el mensaje de error 
//         containerError.classList.add("container_error-form");

        
//         // ciclo que permite escribir en el html cada cuota del credito
//         for(let i = 1; i <= cuotaIngresada.value; i++) {
            
//             // guardo en una variable el calculo
//             // valorDivision = valorCuota(creditoIngresado.value, cuotaIngresada.value);
//             // valorCuotaTotal = cuotaConInteres(cuotaIngresada.value, valorDivision);
            

//             let mostrarCreditoFrances = calcularSistemaFrances(creditoIngresado.value, cuotaIngresada.value)
//             console.log(mostrarCreditoFrances);
            
//             // creo el elemento li
//             let listado = document.createElement("div");
            
//             // lo que voy a poner en el html
//             listado.innerHTML = `${mostrarCreditoFrances}`;
            
//             // agrego el listado al container del html
//             containerCuotasImpresas.appendChild(listado);
            
//         }


        
//         // creando usuario a partir de los datos ingresados anteriormente
//         const creditoUsuario = new Usuario(salarioIngresado.value, creditoIngresado.value, cuotaIngresada.value);
        
//         // agrego el credito ingresado por el usuario al array
//         listaDeCreditos.push(creditoUsuario);
//         console.log(listaDeCreditos);
        
//         // agrego al local storage la lista de objetos en formato JSON 
//         localStorage.setItem('listaDeCreditos', JSON.stringify(listaDeCreditos));

        
//     } else {
//         // elimino la clase que oculta el mensaje de error para poder mostrar el mensaje
//         containerError.classList.remove('container_error-form');
//     }


// });

// evento para limpiar el formulario con el click 
botonLimpiar.addEventListener('click', function limparForm() {
    
    // ciclo while que permite borrar el html
    while(containerInformacion.firstChild) {
        containerInformacion.removeChild(containerInformacion.firstChild);
    }
    
    // limpando formulario
    formularioCredito.reset();
    
    // agrego la clase que oculta el mensaje de error para poder ocultar el mensaje
    containerError.classList.add("container_error-form");

    console.log('form limpiado con exito');

});