/*
Clase 79 - Regex
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25888
*/

// 1. Crea una RegEx que valide correos electrónicos

const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/

function correo(email){
    console.log(regex.test(email))
}

correo("shania@gmail.com")
correo("shaniagmail.com")
correo("fjauhfuar ffoainjfla")

// 2. Crea una RegEx obtenga Hashtags de un Texto

const regexHashtags = /#\w+/g
let frase = "Hola Me gusta el #elado de c#ocolate"
console.log(regexHashtags.test(frase))

let frase2 = "Hola Me gusta el #elado de c#ocolate y mantecado"
const Hashtags = frase2.match(/(#[\w]+|[\w]+#[\w]+)/g)
console.log(Hashtags)


// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)

const regexPassword = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/

function password(clave){
    console.log(regexPassword.test(clave))
}

password("1dek0xgc.7")
password("1dek0x")

// NOTA: Aplícalas utilizando diferentes operaciones