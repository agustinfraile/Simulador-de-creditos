// obtengo el formulario del html y le asigno una variable
let formularioCredito = document.getElementById("formulario-credito");
// obtengo del formulario el salario del html y le asigno una variable
let salarioIngresado = document.getElementById("formulario_salario-ingresado");
// obtengo del formulario el credito del html y le asigno una variable
let creditoIngresado = document.getElementById("formulario_creditos-disponibles");
// obtengo del formulario el interes del html y le asigno una variable
let interesIngresado =  document.getElementById("formulario_interes");
// obtengo del formulario la cuota del html y le asigno una variable
let cuotaIngresada = document.getElementById("formulario_cuotas");
// obtengo del formulario el boton del html y le asigno una variable
let botonEnviar = document.getElementById("boton-calculador");
// obtengo el container del html donde voy a imprimir las cuotas 
let containerCuotasImpresadas = document.getElementById("container-creditos");


// evento para guardar datos del formulario
formularioCredito.addEventListener("submit", function validarFormulario(e){
    e.preventDefault();
    
    let valorCuotaTotal = (creditoIngresado.value / cuotaIngresada.value) * interesIngresado.value;

    for(let i = 1; i <= cuotaIngresada.value; i++) {
    
        // creo el elemento li
        let listado = document.createElement("li");

        // lo que voy a poner en el html
        listado.innerHTML = `Cuota ${i}: ${valorCuotaTotal.toFixed(2)}`;

        // agrego el listado al container del html
        containerCuotasImpresadas.appendChild(listado);
        
    }
});
