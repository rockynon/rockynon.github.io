function OnSubmitContacto(event) {

    var secciongracias = document.getElementById("boxgracias")
    var seccionformulario = document.getElementById("boxformulario")

    secciongracias.style.display = "flex"
    seccionformulario.style.display ="none"

    console.log(event)

    return false
}

function ValidarContacto() {
    return ValidarTelefono() && ValidarAsunto() && ValidarMensaje()
}

function ValidarAsunto() {
    return ValidarCampo("asunto", "^[A-Z].{1,19}$", "El asunto debe comenzar con mayúsculas y tener no más de 20 caracteres")
}

function ValidarMensaje() {
    return ValidarCampo("mensaje", "^[A-Z].{1,79}$", "El mensaje debe comenzar con mayúsculas y tener no más de 80 caracteres")
}

function ValidarTelefono() {
    return ValidarCampo("telefono", "^[0-9]{10,12}$", "El teléfono debe contener entre 10 y 12 números")
}

function ValidarCampo(id, pattern, mensaje) {
    var campo = document.getElementById(id)
    var validador = new RegExp(pattern)

    if (validador.test(campo.value)) {
        campo.setCustomValidity("")
        return true
    } else {
        campo.setCustomValidity(mensaje)
        return false
    }
}


function ver(filtro) {
    var mascotas = document.querySelectorAll ("#main > ul.lista > li")
    for (let n = 0; n < mascotas.length; n++) {
        const mascota = mascotas[n]; 
        if (mascota.classList.contains(filtro)) {
            mascota.classList.remove("hide")
        } else {
            mascota.classList.add("hide")
        }
    }
}

function OnReady() {
    console.log("OnReady")

    $("#page-adoptar #main > ul.lista > li > article img").click(function () {
        console.log("Click on", $(this).attr("src"))

        $("#image-viewer #full-image").attr("src", $(this).attr("data-full-image"));
        $('#image-viewer').show();
    })

    $("#image-viewer .close").click(function(){
        $('#image-viewer').hide();
    });
}

$(document).ready(OnReady)