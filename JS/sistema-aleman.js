/* ================================
    FUNCIONAMIENTO SIST. ALEMAN
================================ */

calcularCuotaAleman = (credito, cuotas) =>{
    // INICIALIZO LAS VARIABLES EN 0
    let interesesAleman = 0;
    let capitalPagadoAleman = 0;
    let cuotasSistemaAleman = 0;
    let tasaMensual = 0;
    
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

    // VARIABLE QUE ALMACENA LA FORMULA DEL SISTEMA FRANCES
    capitalPagadoAleman = parseFloat(credito / cuotas).toFixed(2);

    console.log(capitalPagadoAleman);

    // CICLO QUE PERMITE IR CALCULANDO LOS INTERESES EL CAPITAL Y EL CREDITO DEL SISTEMA FRANCES 
    for (let i = 1; i <= cuotas; i++) {
        interesesAleman = parseFloat( credito * (tasaMensual) ).toFixed(2);
        credito = parseFloat( credito - capitalPagadoAleman).toFixed(2);
        cuotasSistemaAleman = (parseFloat(capitalPagadoAleman) + parseFloat(interesesAleman)).toFixed(2);


        // AGREGO AL DOM LOS ELEMENTOS CREADOS
        let filaCreada = document.createElement('tr');
        
        filaCreada.innerHTML = ` 

            <td>${i}</td>
            <td>$${cuotasSistemaAleman}</td>
            <td>$${capitalPagadoAleman}</td>
            <td>$${interesesAleman}</td>
            <td>$${credito}</td>
        `
        containerInformacion.appendChild(filaCreada);
    }
}