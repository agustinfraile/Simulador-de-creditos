/* ================================
        DECLARANDO VARIABLES
================================ */ 
let sueldo;
let creditoElegido;
const creditosDisponibles = [15000, 50000, 100000, 150000, 200000, 300000, 500000];
let cuotaElegida;
const elegirCuotaMensual = [12, 24, 36];
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