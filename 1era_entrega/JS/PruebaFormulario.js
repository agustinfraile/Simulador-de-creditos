// cargo del html al formulario 
let formularioHtml = document.getElementById('formulario');
// cargo del html al boton
let botonHtml = document.getElementById('boton');





// agrego el evento al formulario
formularioHtml.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    
    console.log(cuotasCredito);
    console.log(inputCredito);
})


// cargo los input del html
let cuotasCredito = document.getElementById('select-cuota').value;
let inputCredito = document.getElementById('select-credito').value;

// funcion para mostrar las cuotas
const dividir = (valor1, valor2) => {

    let resultadoDivision = valor1/valor2;
    

    for(let i = 1; i <= e; i++) {
        
        // creo el elemento li
        let listado = document.createElement("li");
        // lo que voy a poner en el html
        listado.innerHTML = `Cuota ${i}: ${c}`;
        // agrego el listado al container del html
        cuotas.appendChild(listado)
        
    }
}

todasLasCuotas = mostrarCuotas()

botonHtml.addEventListener('click', mostrarCuotas)


