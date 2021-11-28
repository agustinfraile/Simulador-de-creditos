/* ================================
    FUNCIONAMIENTO DEL SIMULADOR
================================ */


// BUCLE PARA CUANDO INGRESA EL SUELDO SI ES CORRECTO SIGUE, EN CASO DE QUE NO CUMPLA LA CONDICION CORTA
do {
    // PIDO AL USUARIO QUE INGRESE CUANTO COBRA POR MES APROXIMADAMENTE
    sueldo = parseFloat(prompt('Ingrese un estimativo de cuanto cobra por mes'));
    
    // CONDICIONAL PARA VERIFICAR QUE EL SUELDO INGRESADO SEA MAYOR AL SUELDO PERMITIDO PARA SACAR UN CREDITO 
    if( (sueldo >= sueldoMinimo)){
        
        //MUESTROS LOS CREDITOS FILTRADOS
        alert('Muy bien, su sueldo fue cargado');

        if(sueldo >= sueldoMinimo && sueldo < sueldoMaximo) {
            alert(`Tenemos estos creditos para vos: ${creditosMinimo}`);
        }
        else if(sueldo >= sueldoMaximo) {
            alert(`Tenemos estos creditos para vos: ${creditosMaximo}`);
        }
        

        // BUCLE PARA CUANDO INGRESA EL CREDITO, EN CASO DE QUE SEA UN CREDITO DISPONIBLE SIGUE, SINO CORTA
        do {
            // PIDO AL USUARIO QUE INGRESE EL CREDITO
            creditoElegido = parseFloat(prompt('Ingrese un credito'));
            
            // CONDICIONAL QUE PERMITE VERIFICAR SI EL CREDITO INGRESADO POR EL USUARIO ES VALIDO COMPARANDO CON LOS VALORES DEL ARRAY
            if
                (sueldo < sueldoMaximo && (creditoElegido === creditosDisponibles[0] || creditoElegido === creditosDisponibles[1] || creditoElegido === creditosDisponibles[2])  || 
                sueldo >= sueldoMaximo && (creditoElegido === creditosDisponibles[0] || creditoElegido === creditosDisponibles[1] || creditoElegido === creditosDisponibles[2] || 
                creditoElegido === creditosDisponibles[3] || creditoElegido === creditosDisponibles[4] || creditoElegido === creditosDisponibles[5] || 
                creditoElegido === creditosDisponibles[6]))
            {
                alert('Perfecto! el credito esta cargado');
                
                

                // BUCLE PARA CUANDO INGRESA LA CUOTA, EN CASO DE QUE SEA UNA CUOTA VALIDA SIGUE
                do {
                    // PIDO AL USUARIO LA CUOTA 
                    cuotaElegida = parseFloat(prompt('Ingrese en cuantas cuotas quiere pagar el credito (12, 24, 36)'));

                    
                    // CUANDO LA CUOTA ELEGIDA ES EL PRIMER ELEMENTO DEL ARRAY
                    if(cuotaElegida === elegirCuotaMensual[0]) {
                
                        
                        // DECLARO EL INTERES PARA ESTE VALOR DE CUOTA
                        interes = 1.4; /* interes del 40% EN 12 MESES */
                        
                        // ALMACENO EN UNA VARIABLE EL RESULTADO DE LA CUOTA CON EL INTERES
                        cuotaConInteres = calcularInteres(creditoElegido ,cuotaElegida, interes);
                        
                        // COMPLETO LOS PARAMETROS DE LA FUNCION SUMARTODASLASCUOTAS
                        creditoADevolver = sumarTodasLasCuotas(cuotaElegida, cuotaConInteres);
                
                        // CAMBIO EL VALOR DE AGAIN PARA PODER CORTAR EL CICLO
                        again = true;
                
                    }
                    
                    // CUANDO LA CUOTA ELEGIDA ES EL SEGUNDO ELEMENTO DEL ARRAY
                    else if(cuotaElegida === elegirCuotaMensual[1]) {
                        
                        // DECLARO EL INTERES PARA ESTE VALOR DE CUOTA
                        interes = 1.8; /* interes del 80% EN 24 MESES */
                        
                        // ALMACENO EN UNA VARIABLE EL RESULTADO DE LA CUOTA CON EL INTERES
                        cuotaConInteres = calcularInteres(creditoElegido ,cuotaElegida, interes);
                        
                        // COMPLETO LOS PARAMETROS DE LA FUNCION SUMARTODASLASCUOTAS
                        creditoADevolver = sumarTodasLasCuotas(cuotaElegida, cuotaConInteres);
                
                        // CAMBIO EL VALOR DE AGAIN PARA PODER CORTAR EL CICLO
                        again = true;
                
                    }
                    
                    // CUANDO LA CUOTA ELEGIDA ES EL TERCER ELEMENTO DEL ARRAY
                    else if(cuotaElegida === elegirCuotaMensual[2]) {
                        
                        // DECLARO EL INTERES PARA ESTE VALOR DE CUOTA
                        interes = 2.2; /* interes del 120% EN 36 MESES*/
                        
                        // ALMACENO EN UNA VARIABLE EL RESULTADO DE LA CUOTA CON EL INTERES
                        cuotaConInteres = calcularInteres(creditoElegido ,cuotaElegida, interes);
                        
                        // COMPLETO LOS PARAMETROS DE LA FUNCION SUMARTODASLASCUOTAS
                        creditoADevolver = sumarTodasLasCuotas(cuotaElegida, cuotaConInteres);
                
                        // CAMBIO EL VALOR DE AGAIN PARA PODER CORTAR EL CICLO
                        again = true;
                
                    }
                    
                    // CUANDO NO ES 12, 24 O 36
                    else{
                        alert('Ingresa una cuota valida');
                    }
                    
                }
                while(again == false)
                
            }
            else {
                alert('Por favor ingresa un credito valido');
            }
        }
        while(again == false)
            
        again = true;
        }
        
        

    else{
        alert('No hay creditos disponibles para tu sueldo');
    }
}
while(again == false);

// LLAMO A LAS FUNCIONES  
mostrarCuotas(cuotaConInteres, cuotaElegida);

