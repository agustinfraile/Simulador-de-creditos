/* ================================
            API DEL DOLAR
================================ */

let dolares = [];
let divDolares = document.getElementById("div-dolares");

// cargo la api del dolar a peso argentino
fetch("https://criptoya.com/api/dolar")
.then(promesa => promesa.json())

// paso de objeto a array, lo guardo en una variable y lo muestro
.then(datos => {
    let usdArray = Object.entries(datos);
    
    // recorro el array de dolares
    usdArray.forEach(dolar => {
        // muestro en el html el array de dolares
        if (dolar[0] != "time") {
            divDolares.innerHTML += `    
                <p id="${dolar[0]}">  ${dolar[0]}: $${dolar[1]}  </p>
            ` 
            dolares.push({tipo: dolar[0], valor: dolar[1]})
        }
    })
})
.catch(error => console.log(error))
