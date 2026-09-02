/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

//1. Crea un función que utilice error correctamente
let saldoActual = 1000;

function fondosBancarios(debito){
if(debito <= saldoActual){
    saldoActual -= debito;
    console.log(`Transaccion Aprobada, saldo actual ${saldoActual}`)
} else {
    console.error(`Transaccion Rechazada, saldo actual ${saldoActual}`)
}
}

fondosBancarios(300)
fondosBancarios(500)
fondosBancarios(300)

// 2. Crea una función que utilice warn correctamente
let bateria = 100;
//let bateriaRestante;

function nivelDeBateria(){
      bateria -= 15

    if(bateria <= 15){
        console.warn(`Bateria baja ${bateria}, debe colocar su telefono a cargar`)
        
    } else{
        console.log(`Bateria actual ${bateria}`)
    }
}

nivelDeBateria();
nivelDeBateria();
nivelDeBateria();
nivelDeBateria();
nivelDeBateria();
nivelDeBateria();

// 3. Crea una función que utilice info correctamente

let usuarios = [{name: "Luisito Comunica",
    password: 123456789,
    },

    {name: "Moure Dev",
    password: 987654321,
    }
]

let logueado = false;

console.time(`Tiempo de ejecucion de la funcion inicioSesion`)
function inicioSesion(usuario, clave){
    
    for(let i = 0; i < usuarios.length; i++){
        if(usuario === usuarios[i].name && clave === usuarios[i].password){
            console.info(`Bienvenido ${usuario}`)
            logueado = true;
            break
        } 

        }

         if(!logueado){
            console.error(`Ingrese correctamente sus credenciales`)
            console.trace(`Seguimiento`)
        }

        // console.error(`Ingrese correctamente sus credenciales`)
    }

console.timeEnd(`Tiempo de ejecucion de la funcion inicioSesion`)

inicioSesion("Moure Dev", 987634554321)

// // 4. Utiliza table

let usuariosData = [
    {name: "Luisito Comunica",
    edad: 30,
    pais: "Mexico",},

    {name: "Moure Dev",
    edad: 50,
    pais: "Espana",}
]

console.table(usuariosData)

// 5. Utiliza group
console.group("Personas")
console.log(`Nombre: Shania`)
console.log(`Edad: 27`)
console.groupEnd()

// 6. Utiliza time

//Lo aplique en el ejercicio 3

// 7. Valida con assert si un número es positivo

let num = -20;
console.assert(num > 0, `Este numero no es positivo`)

// 8. Utiliza count

console.count(`Me llamo BATA`)
console.count(`Me llamo BATA`)
console.count(`Me llamo BATA`)
console.count(`Me llamo BATA`)


// 9. Utiliza trace

//Lo aplique en el ejercicio 3

// 10. Utiliza clears

// console.clear()