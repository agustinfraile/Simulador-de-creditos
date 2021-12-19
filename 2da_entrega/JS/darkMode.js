// inicializo la variable 
let darkMode;

// consulto el local storage
if (localStorage.getItem("blackMode")) {
    darkMode = localStorage.getItem("blackMode");
} else {
    darkMode = "light";
}

// asigno al local storage el valor que cargo el usuario
localStorage.setItem("blackMode", darkMode);


// cambio el css y muestro y oculto los botones
$( () => {
    if (localStorage.getItem("blackMode") == 'dark') {
        $("body").addClass("blackMode");
        $("#btnDarkMode").hide();
        $("#btnLightMode").show();
    } else {
        $("#btnLightMode").hide();
    }

    // para cuando hago click en el boton de light mode
    $("#btnLightMode").click( () => {
        $("#btnLightMode").hide();
        $("#btnDarkMode").show();


        $("#navbar-toggle").removeClass("navbar-dark bg-dark");
        $("#navbar-toggle").addClass("navbar-light bg-light");
        $("body").removeClass("blackMode");
        localStorage.setItem("blackMode", "light")
    })

    // para cuando click en el boton de dark mode
    $("#btnDarkMode").click( () => {
        $("#btnLightMode").show();
        $("#btnDarkMode").hide();

        $("#navbar-toggle").removeClass("navbar-light bg-light");
        $("#navbar-toggle").addClass("navbar-dark bg-dark");
        $("body").addClass("blackMode");
        localStorage.setItem("blackMode", "dark")
    })
})
