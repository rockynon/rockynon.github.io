function OnSubmitContacto(event) {
    var secciongracias = document.getElementById("boxgracias")
    var seccionformulario = document.getElementById("boxformulario")

    secciongracias.style.display = "flex"
    seccionformulario.style.display ="none"

    console.log(event)

    return false
}

