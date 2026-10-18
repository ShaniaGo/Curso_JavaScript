/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

console.log(`------ EJERCICIO NRO 1 ------`)
function print(name, callback){
    setTimeout(() => {
        callback(name)
    },2000) 
}

function saludar(name){
    console.log(`Hola ${name}` )
}

print(`Shania`, saludar)

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

console.log(`------ EJERCICIO NRO 2 ------`)

function Task1(callback){
    setTimeout(() => {
        console.log(`Task1 ejecutandose`)
        callback()
    },1000)
    
}

function Task2(callback){
      setTimeout(() => {
        console.log(`Task2 ejecutandose`)
        callback()
    },1000)

}

function Task3(callback){
      setTimeout(() => {
        console.log(`Task3 ejecutandose`)
        callback()
    },1000)
}

Task1(() => {
    console.log("Terminó la uno")
})

Task2(() => {
    console.log("Terminó la dos")
})

Task3(() => {
    console.log("Terminó la tres")
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
console.log(`------ EJERCICIO NRO 3 ------`)
function numero(number){
    const promise = new Promise((resolve, reject) =>{
        if(number % 2 == 0){
            resolve(`Numero Par`)
        } else{
            reject(`Numero Impar`)
        }
    })
    return promise
}

numero(6)
.then((result) => {
    console.log(result)
    
}).catch((err) => {
    console.log(err)
});


// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
console.log(`------ EJERCICIO NRO 4 ------`)
function firstTask(){
    return new Promise(resolve =>{
        setTimeout(() =>{
        console.log(`Primera tarea completada`)
        resolve()
    }, 1000)
    })
}

function secondTask(){
    return new Promise(resolve =>{
        setTimeout(() =>{
        console.log(`Segunda tarea completada`)
        resolve()
    }, 2000)
    })
}

function thirdTask(){
    return new Promise(resolve =>{
        setTimeout(() =>{
        console.log(`Tercera tarea completada`)
        resolve()
    }, 1500)
    })
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() =>{
        console.log(`Todas las tareas han sido completadas`)
    })

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
console.log(`------ EJERCICIO NRO 5 ------`)
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executeTasks() {
    console.log(`Inicio del proceso`)

    await wait(1000)
    console.log(`First task completed`)

    await wait(2000)
    console.log(`Second task completed`)

    await wait(1500)
    console.log(`Third task completed`)

    console.log(`Fin del Proceso`)
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
console.log(`------ EJERCICIO NRO 6 ------`)
function getUser(id){
    const idUser = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(id >= 5){
                reject(`Usuario ${id} no encontrado`)
            } else{
                resolve({ id, nombre: `Usuario ` + id })
            }
        }, 2000)
    })
    return idUser
}

async function traerUser(id){
try {
    const respuesta = await getUser(id)
    console.log(respuesta)
} catch (error) {
    console.log(error)
}
}

traerUser(2)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log(`------ EJERCICIO NRO 7 ------`)
   console.log("Inicio")
   setTimeout(() => console.log("setTimeout ejecutado"), 0)
   Promise.resolve().then(() => console.log("Promesa resuelta"))
   console.log("Fin")

//Primero Inicio
//Segundo Fin
//Tercero Promesa Resuelta
//Cuarto setTimeout ejecutado

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
console.log(`------ EJERCICIO NRO 8 ------`)
function firstPromise (){
    return new Promise (resolve =>{
        setTimeout(() => {
        console.log(`Primera Promesa`)
        resolve()
    }, 5000)
    })
}

function secondPromise (){
    return new Promise (resolve =>{
        setTimeout(() => {
        console.log(`Segunda Promesa`)
        resolve()
    }, 4000)
    })
}

function thirdPromise (){
    return new Promise (resolve =>{
        setTimeout(() => {
        console.log(`Tercera Promesa`)
        resolve()
    }, 7000)
    })
}

Promise.all([firstPromise(), secondPromise(), thirdPromise()])
.then(() => {
    console.log(`Todas las Promesas resueltas`)
})

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
console.log(`------ EJERCICIO NRO 9 ------`)
function waitSeconds(segundos){
    return new Promise(resolve => setTimeout(resolve, segundos))
}

async function waitTime() {
    await waitSeconds(3000)
    console.log(`Tiempo Finalizado`)
}

waitTime()


// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
console.log(`------ EJERCICIO NRO 10 ------`)
let saldoDisponible = 500;
function checkBalance(){
   return new Promise(resolve => {
    setTimeout(() =>{
        console.log(`Saldo disponible: ${saldoDisponible}$`)
        resolve()
    }, 1000)
   }) 
}

function withdrawMoney(amount){
    const monto = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if(amount <= saldoDisponible){
                saldoDisponible -= amount
                resolve(`Operacion Exitosa, saldo restante: ${saldoDisponible}`)
            } else{
                reject(`Error: Fondos Insuficientes`)
            }
        }, 2000)
    })
    return monto
}

async function cajero(amount) {
    console.log(`Retirando ${amount}...`)
    try {
        const answer = await withdrawMoney(amount)
        console.log(answer)
    } catch (error) {
        console.log(error)
    }
}

async function simulador(amount) {
    await checkBalance()
    await cajero(amount)
    await cajero(amount)
}

simulador(300)