/* ================================
    FUNCIONAMIENTO SIST. FRANCES
================================ */

// FUNCION PARA OBTENER LA CUOTA PURA EN EL SISTEMA FRANCES
// const calcularCuotaPuraFrances = (capitalOtorgado, tasaMensual, cuotas) => {
//     let cuotaFrances = (capitalOtorgado * tasaMensual) /[ 1 - [ Math.pow( (1 + tasaMensual), -cuotas ) ]];

//     return cuotaFrances.toFixed(1);
// }


// FUNCION PARA OBTENER LOS INTERESES EN EL SISTEMA FRANCES
// const calcularInteresFrances = (capitalOtorgado, tasaMensual, saldoCapitalAnterior) => {
//     // let primerInteres = capitalOtorgado * tasaMensual;
//     // let interesSiguientes = saldoCapitalAnterior * tasaMensual;
// }

// FUNCION PARA OBTENER EL CAPITAL PAGADO EN EL SISTEMA FRANCES
// const calcularCapitalPagadoFrances = (cuotaPura, intereses, cuotas) => {
//     // let capitalPagado;

//     for (let i = 1; i <= cuotas; i++) {
//         // capitalPagado = cuotaPura - intereses;
//     }
// }

// FUNCION PARA OBTENER LA CUOTA CON IVA EN EL SISTEMA FRANCES
// const calcularIVAFrances = (cuotaPura) => {
//     const IVA = 1.21;

//     let cuotaConIVA = cuotaPura * IVA;

//     return cuotaConIVA;
// }

// FUNCION PARA OBTENER LOS SALDOS CAPITALES EN EL SISTEMA FRANCES
// const calcularSaldosCapital = (capitalOtorgado, capitalPagado, cuotas) => {
//     let saldoCapital = capitalOtorgado - capitalPagado;


//     for(let i = 2; i <= cuotas; i++) {
//         saldoCapital =  saldoCapital - capitalPagado;
//     }

// }









const calcularSistemaFrances = (capitalOtorgado, cuotas)  => {
    
    // DECLARO VARIABLE PARA LUEGO OBTENER LA CUOTA PURA EN EL SISTEMA FRANCES
    let cuotaFrances;
    
    // VARIABLE PARA OBTENER EL PRIMER INTERES  EN EL SISTEMA FRANCES
    let primerInteres;

    // VARIABLE PARA OBTENER EL CAPITAL PAGADO
    let primerCapitalPagado;

    // VARIABLE QUE ALMACENA EL VALOR DEL IVA
    const IVA = 0.21;

    // DECLARO VARIABLE QUE ALMACENARA EL IVA DE LA CUOTA 
    let valorIVA;

    // VARIABLE QUE ALMACENA EL VALOR DE LA CUOTA CON EL IVA
    let cuotaConIVA;

    // VARIABLE QUE ALMACENA EL VALOR DEL PRIMER SALDO CAPITAL
    let saldoCapital;
    

    // CONDICIONAL QUE PERMITE REGULAR EL VALOR DE LA TASA MENSUAL DEPENDIENDO DE LA CUOTA ELEGIDA
    if(cuotas == 12) {
        tasaMensual =  0.046;
    } else if (cuotas == 24) {
        tasaMensual = 0.05;
    } else if (cuotas == 36) {
        tasaMensual = 0.052;
    } else if (cuotas == 48) {
        tasaMensual = 0.054;
    } else if (cuotas == 60) {
        tasaMensual = 0.056;
    } else {
        console.log('ingrese un valor valido de cuota')
    }

    cuotaFrances = ((capitalOtorgado * tasaMensual) /[ 1 - [ Math.pow( (1 + tasaMensual), -cuotas ) ]]).toFixed(1);
    console.log(`Cuota pura 1: $${cuotaFrances}`);

    primerInteres = (capitalOtorgado * tasaMensual).toFixed(1);
    console.log(`Interes cuota 1: $${primerInteres }`);

    capitalPagado = (cuotaFrances - primerInteres).toFixed(1);
    console.log(`Capital cuota 1: $${capitalPagado}`);

    valorIVA = (cuotaFrances * IVA).toFixed(1);
    console.log(`IVA cuota 1: $${valorIVA}`);

    cuotaConIVA = parseFloat(cuotaFrances) + parseFloat(valorIVA);
    console.log(`Cuota 1: $${cuotaConIVA.toFixed(1)}`);

    saldoCapital =  (capitalOtorgado - capitalPagado).toFixed(1);
    console.log(`Saldo capital cuota 1: $${saldoCapital}`);

    for(let i = 2; i <= cuotas; i++) {
        console.log(`------------------------------`)

        console.log(`Cuota pura $${i}: ${cuotaFrances}`);
        
        let intereseSiguiente = (saldoCapital * tasaMensual).toFixed(1);
        console.log(`Interes cuota ${i}: $${intereseSiguiente}`);

        capitalPagado = (cuotaFrances - intereseSiguiente).toFixed(1);
        console.log(`Capital cuota ${i}: $${capitalPagado}`);

        console.log(`IVA cuota ${i}: $${valorIVA}`);

        console.log(`Cuota ${i}: $${cuotaConIVA.toFixed(1)}`);

        saldoCapital = (saldoCapital - capitalPagado).toFixed(1);
        console.log(`Saldo capital cuota ${i}: $${saldoCapital}`)

        console.log(`------------------------------`)
    }
}


calcularSistemaFrances(1000000, 36);