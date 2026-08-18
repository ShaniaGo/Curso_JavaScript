/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    encenderTelevisor();
} catch (error) {
    console.log('Se ha producido un error', error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    encenderTelevisor();
} catch (error) {
    console.log('Se ha producido un error', error.message)
}finally{
    console.log('Esta seccion siempre se ejecuta')
}

// 3. Lanza una excepción genérica
try{
    throw new Error ("Mensaje de Error")  
} catch{

}


// 4. Crea una excepción personalizada

class miErrorPersonalizado extends Error{

    constructor(message){
        super(message)
    }
}

// 5. Lanza una excepción personalizada

try {
    throw new miErrorPersonalizado("Algo Salio mal")
} catch (error) {
    console.log('no estoy entiendo mucho', error.message)
}

// 6. Lanza varias excepciones según una lógica definida

function centroAtraccion (edad, estatura){
     
    if(edad < 10){
            throw new Error ("Edad insuficiente para subir a la atraccion")
    } else if (estatura < 1.20){
        throw new Error ("Estatura insuficiente para subir a la atraccion")
    }


}

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10