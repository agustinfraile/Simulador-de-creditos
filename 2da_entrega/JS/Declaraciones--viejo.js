/* ================================
        DECLARANDO VARIABLES
================================ */ 

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

const creditosDisponibles = [15000, 50000, 100000, 150000, 200000, 300000, 500000];
const interesMensual = [1.4, 4.8, 2.2, 2.6, 3];
let cuotaElegida;
let interes;
let cuotaConInteres;
let again = false; /* VARIABLE QUE GUARDA EL VALOR FALSO PARA PODER SEGUIR CON EL CICLO */ 
let creditoADevolver;
const sueldoMinimo = creditosDisponibles[0] * 2;
const sueldoMaximo = creditosDisponibles[1] * 3;


/* ================================
        CREANDO FUNCIONES
================================ */ 

// FUNCION QUE RETORNA EL VALOR TOTAL DE LA CUOTA MENSUAL PASANDO 3 PARAMETROS EL CREDITO, LA CUOTA Y EL INTERES
const calcularInteres = (a, c, i) => {
    let valorCuotaTotal = (a / c) * i;
    
    return valorCuotaTotal.toFixed(2);
}


// FUNCION PARA OBTENER EL VALOR DEL CREDITO A DEVOLVER POR EL CLIENTE
const sumarTodasLasCuotas = (cntCuotas, valorDeLaCuota) => cntCuotas * valorDeLaCuota;

// FUNCION PARA FILTRAR LOS CREDITOS PARA LOS SUELDOS MINIMOS
const filtrarMinimo = (listaDeCreditos) => {
    let creditosMinimo = listaDeCreditos.filter(creditos => creditos <= 100000);
    return creditosMinimo;
}

// FUNCION PARA FILTRAR LOS CREDITOS PARA LOS SUELDOS MAXIMOS
const filtrarMaximo = (listaDeCreditos) => {
    let creditosMaximo = listaDeCreditos.filter(creditos => creditos > 100000);
    return creditosMaximo;
}


/* ================================
        REASIGNACIONES
================================ */


creditosMinimo = filtrarMinimo(creditosDisponibles);
// console.log(creditosMinimo);

creditosMaximo = filtrarMaximo(creditosDisponibles);
// console.log(creditosDisponibles);