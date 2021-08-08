function OnSubmitContacto(event) {
    var secciongracias = document.getElementById("boxgracias")
    var seccionformulario = document.getElementById("boxformulario")

    secciongracias.style.display = "flex"
    seccionformulario.style.display ="none"

    console.log(event)

    return false
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
