function validarFormulario() {
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;
   

    // Validación del campo Nombre
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    } else if (nombre.length > 50) {
        alert("El nombre no debe superar los 50 caracteres.");
        return false;
    }

    // Validación del campo Email
    if (email === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Validación del campo Asunto
    if (asunto === "") {
        alert("Por favor, ingrese el asunto del mensaje.");
        return false;
    } else if (asunto.length > 50) {
        alert("El asunto no debe superar los 50 caracteres.");
        return false;
    }

    // Validación del campo Mensaje
    if (mensaje === "") {
        alert("Por favor, ingrese su mensaje.");
        return false;
    } else if (mensaje.length > 300) {
        alert("El mensaje no debe superar los 300 caracteres.");
        return false;
    }

    var enviarBoton = document.getElementById("enviarBoton");
    enviarBoton.disabled = true;
    enviarBoton.innerText = "Enviando...";
    
    var mensajeAgradecimiento = document.getElementById("mensajeAgradecimiento");
    mensajeAgradecimiento.style.display = "block";
    document.getElementById("form").style.display = "none";
    
    setTimeout(function() {
        mensajeAgradecimiento.style.display = "none";
    }, 10000); 

    return false;
   
}

function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

