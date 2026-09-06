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
        ? mensaje || 'Debe tener al menos ${minimo} caracteres'
        : null;
}

export function longitudMaxima(valor, maximo, mensaje){
    if(estaVacio(valor)){
        return null;
    }

    const texto = String(valor).trim();
    return texto.length > maximo
        ? mensaje || 'No puede superar ${maximo} caracteres'
        : null;
}