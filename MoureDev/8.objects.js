/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let astronauta1 = {
    name: "Luisito Comunica",
    edad: 30,
    pais: "Mexico",

}

// 2. Accede y muestra su valor

console.log(astronauta1);

// 3. Agrega una nueva propiedad
astronauta1.email = "luisitocomunica@gmail.com";

console.log(astronauta1)
// 4. Elimina una de las 3 primeras propiedades

delete astronauta1.edad;
console.log(astronauta1)

// 5. Agrega una función e invócala

astronauta1.viaja = function(){
    console.log('El astronauta va a la luna')
}

astronauta1.viaja();
//console.log(astronauta1.viaja())

// 6. Itera las propiedades del objeto

for(let clave in astronauta1){
    console.log(clave + ": " + astronauta1[clave])
}

// 7. Crea un objeto anidado

let astronauta2 = {
name: "Moure Dev",
edad: 50,
pais: "Espana",

trabajo: {
    compania: "La nasa",
    antiguedad: 23,
    viajes : function(){
        console.log("El astronauta a viajada 5 veces a la luna")
    }
}
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(astronauta2.trabajo)

// 9. Comprueba si los dos objetos creados son iguales

console.log(astronauta1 == astronauta2)
console.log(astronauta1 === astronauta2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(astronauta1.name == astronauta2.name)