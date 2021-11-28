/* ================================
        FUNCION CONSTRUCTORA
================================ */ 
class Cliente {
    constructor(sueldo, creditoSacar, cuotas, creditoDevolver, interesTotal) {
        this.sueldo = sueldo;
        this.creditoSacar = creditoSacar;
        this.cuotas = cuotas;
        this.creditoDevolver = creditoDevolver;
        this.interesTotal = interesTotal;
    }

    /* ================================
            METODOS DE LA FUNCION
    ================================ */ 

    // METODO PARA RETORNAR TODOS LOS DATOS DEL OBJETO INGRESADO POR EL USUARIO
    retornarDatos = () => "Sueldo: " + this.sueldo + " Credito: " + this.creditoSacar + " Cuotas: " + this.cuotas + " Total a devolver: " + this.creditoDevolver + 
    " El interes de su credito es: " + this.interesTotal + " mensual";
}

// CREANDO CLIENTE A PARTIR DE LOS DATOS INGRESADOS POR EL USUARIO
const cliente1 = new Cliente(sueldo, creditoElegido, cuotaElegida, creditoADevolver, interes);


// MOSTRANDO RESULTADOS
console.log(cliente1.retornarDatos());

console.log(cliente1)

// MUESTO POR PANTALLA LOS DATOS DEL CREDITO
alert(cliente1.retornarDatos());