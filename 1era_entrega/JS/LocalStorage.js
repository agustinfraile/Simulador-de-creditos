// Guardo la informacion del cliente


// Creo una variable para guardar los datos del cliente
let datosCliente = cliente1.retornarDatos();

// Paso a JSON los datos 
let datosClienteJSON = JSON.stringify(datosCliente);

// Guardo en Local Storage los datos pasados a JSON 
localStorage.setItem("datos", datosClienteJSON);


