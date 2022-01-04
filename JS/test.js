calcularCuotaFrances = (credito, cuotas) =>{
    // INICIALIZO LAS VARIABLES EN 0
    let interesesFrances = 0;
    let capitalPagado = 0;
    let cuotasSistema = 0;
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
    cuotasSistema = ((credito * tasaMensual) /[ 1 - [ Math.pow( (1 + tasaMensual), -cuotas ) ]]).toFixed(1);

    console.log(cuotasSistema);

    // CICLO QUE PERMITE IR CALCULANDO LOS INTERESES EL CAPITAL Y EL CREDITO DEL SISTEMA FRANCES 
    for (let i = 1; i <= cuotas; i++) {
        interesesFrances = parseFloat( credito * (tasaMensual) ).toFixed(2);
        capitalPagado = (cuotasSistema - interesesFrances).toFixed(2);
        credito = parseFloat( credito - capitalPagado).toFixed(1);


        // AGREGO AL DOM LOS ELEMENTOS CREADOS
        let filaCreada = document.createElement('tr');
        
        filaCreada.innerHTML = ` 
            <td>${i}</td>
            <td>$${cuotasSistema}</td>
            <td>$${capitalPagado}</td>
            <td>$${interesesFrances}</td>
            <td>$${credito}</td>
        `
        containerCuotasImpresas.appendChild(filaCreada);
    }



}

// evento para guardar datos del formulario
formularioCredito.addEventListener( "submit", function validarFormulario(e) {
    e.preventDefault(); 

    calcularCuotaFrances(creditoIngresado.value, cuotaIngresada.value);
    
})