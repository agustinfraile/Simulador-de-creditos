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
// obtengo del formulario el boton del html y le asigno una variable
let botonEnviar = document.getElementById("boton-calculador");
// obtengo del formulario el boton del html para limpiarlo y le asigno una variable
let botonLimpiar = document.getElementById("boton-limpiador");
// obtengo el container del html donde voy a imprimir las cuotas 
let containerCuotasImpresas = document.getElementById("container-creditos");

/* PARA GUARDAR ARRAYS */
const creditosDisponibles = [0, 15000, 50000, 100000, 150000, 200000, 300000, 500000];
const interesMensual = [1.4, 2.8, 2.2, 2.6, 3];

// DECLARACIONES SIN ASIGNAR UN VALOR
let valorCuotaTotal;
let listaDeCreditos = [];
