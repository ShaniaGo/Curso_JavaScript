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

function centroAtraccion (edad, estatura, tieneBoleto){
     
    if(edad < 10){
            throw new Error ("Edad insuficiente para subir a la atraccion")
    } else if (estatura < 1.20){
        throw new Error ("Estatura insuficiente para subir a la atraccion")
    } else if (!tieneBoleto) {
        throw new Error("Boleto no valido")
    } else{
        console.log("Bienvenido a los Juegos del Hambre")
    }
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    centroAtraccion(8, 1.80, true)
} catch (error) {
    console.log("No se pudo ingresar: ", error.message)
}

try {
    centroAtraccion(25, 1.10, true)
} catch (error) {
    console.log("No se pudo ingresar: ", error.message)
}

try {
    centroAtraccion(25, 1.50, false)
} catch (error) {
    console.log("No se pudo ingresar: ", error.message)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let arrayDeCosas = [54, "mensaje", "12.76", '15.4', 100, "Dios"]

for(let i = 0; i < arrayDeCosas.length; i++){
    try {
        let guardarValor = parseFloat(arrayDeCosas[i]);

        if(Number.isNaN(guardarValor)){
            throw new Error ("No se puede convertir en un float");
        } else {
            console.log(`Conversion exitosa del valor ${arrayDeCosas[i]} a ${guardarValor}`)
        }
    } catch (error) {
        console.log(`Error en el elemento ${arrayDeCosas[i]}`, error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class miErrorPersonalizado extends Error{
    constructor(message){
        super(message)
    }
}

const usuario = {
  nombre: "Shania",
  cargo: "Soporte Técnico",
  activo: true
};

function validarObjeto(objeto, propiedad){

        if(!Object.hasOwn(objeto, propiedad)){
            throw new miErrorPersonalizado(`La propiedad ${propiedad}, no existe en el objeto`)
        }else{
            console.log(`La propiedad ${propiedad} si existe`)
        }
}

try {
    validarObjeto(usuario, "cargo")
} catch (error) {
    console.log("Error:", error.message)
}

try {
    validarObjeto(usuario, "auxiliar")
} catch (error) {
    console.log("Error ", error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10\

function llamadaTelefonica(){
    if(Math.random() > 0.2){
        throw new Error ("Llamada Fallida")
    }
    return "Conexion realizada con Exito"
}

function llamadasConReintentos(){
    for(let i = 1; i <= 10; i++){
        try {
            console.log(`Intento nro ${i}`)
            let respuesta = llamadaTelefonica();

            console.log("Felicitaciones");
            return;
        } catch (error) {
            console.log(`Error en la llamada ${i}`)

            if(i === 10){
                console.log(`Se alcanzo el limite de 10 llamadas`)
            }
        }
    }
}

llamadasConReintentos()