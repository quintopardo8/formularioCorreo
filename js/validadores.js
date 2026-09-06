export function estaVacio(valor){
    if(valor === null || valor === undefined){
        return true
    }

    if(typeof valor === "boolean"){
        return false;
    }

    return String(valor).trim() === "";
}

export function obligatorio(valor, mensaje = "Este campo es obligatorio"){
    if(typeof valor === "boolean"){
        return valor ? null : mensaje;
    }

    return estaVacio(valor) ? mensaje : null;
}

export function longitudMinima(valor, minimo, mensaje){
    if (estaVacio(valor)){
        return null;
    }
    
    const texto = String(valor).trim();
    return texto.length < minimo
        ? mensaje || `Debe tener al menos ${minimo} caracteres`
        : null;
}

export function longitudMaxima(valor, maximo, mensaje){
    if(estaVacio(valor)){
        return null;
    }

    const texto = String(valor).trim();
    return texto.length > maximo
        ? mensaje || `No puede superar ${maximo} caracteres`
        : null;
}

export function correo(valor, mensaje = "Ingresa un correo electrónico válido"){
    if (estaVacio(valor)){
        return null;
    }
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return patronCorreo.test(String(valor).trim()) ? null : mensaje;
}

export function soloLetras(valor, mensaje = "Usa solo letras y espacios"){
    if (estaVacio(valor)){
        return null;
    }
    const patronletras = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ\s]+$/;
    return patronletras.test(String(valor).trim()) ? null : mensaje;
}

export function telefonoChileno (valor, mensaje = "Ingresa un celular chileno valido (ej: 9 1234 5678)"){
    if (estaVacio(valor)){
        return null;
    }
    const digitos = String(valor).replace(/\D/g, "");
    const esCelularLocal = digitos.length === 9 && digitos.startsWith("9");
    const esCelularInternacional = digitos.length === 11 && digitos.startsWith("569");

  return esCelularLocal || esCelularInternacional ? null : mensaje;

}