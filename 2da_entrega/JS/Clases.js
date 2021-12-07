/* ================================
        FUNCION CONSTRUCTORA
================================ */ 
class Usuario {
    constructor(sueldo, creditoSacar, cuotas) {
        this.sueldo = sueldo;
        this.creditoSacar = creditoSacar;
        this.cuotas = cuotas;
    }

    /* ================================
            METODOS DE LA FUNCION
    ================================ */ 

    // METODO PARA RETORNAR TODOS LOS DATOS DEL OBJETO INGRESADO POR EL USUARIO
    retornarDatos = () => "Sueldo: " + this.sueldo + " Credito: " + this.creditoSacar + " Cuotas: " + this.cuotas;
}