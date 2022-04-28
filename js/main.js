function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if (nombre.length > 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }
    if (!/^[a-z]$/i.test(nombre)) {
        return "Este campo debe contener solo letras";
    }
    return "";
}
function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Este campo no puede quedar vacio";
    }
    return "";
}
function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if (descripcionRegalo.length > 100) {
        return "Este campo debe tener menos de 100 caracteres";
    }
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "Este campo debe contener solo letras y numeros";
    }
    return "";
}

function validarFormulario() {
    const $form = document.formulario;

    const errorNombre = validarNombre($form.nombre.value);
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;
}

function manejarErrores(errores) {
    
}