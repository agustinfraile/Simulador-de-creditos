/* ================================
        DECLARANDO VARIABLES
================================ */ 


/* PARA EL DOM */
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
// obtengo del formulario el sistema a implementar y le asigno una variable
let sistemaIngresado = document.getElementById("formulario_sistema-credito");
// obtengo del formulario el boton del html y le asigno una variable
let botonEnviar = document.getElementById("boton-calculador");
// obtengo del formulario el boton del html para limpiarlo y le asigno una variable
let botonLimpiar = document.getElementById("boton-limpiador");
// obtengo el container del html donde voy a imprimir el titulo de las cuotas 
let containerCuotasImpresas = document.getElementById("mostrar-creditos");
// obtengo el container del html donde voy a imprimir toda la informacion de las cuotas 
let containerInformacion = document.getElementById("mostrar-cuotas");


// obtengo el container del html para mostrar un error
let containerError = document.getElementById("container-error");

/* PARA GUARDAR ARRAYS */
const creditosDisponibles = [0, 15000, 50000, 100000, 150000, 200000, 300000, 500000];
let listadoDeCreditos = []; //Lo voy a usar para guardar el credito y subirlo en local storage
