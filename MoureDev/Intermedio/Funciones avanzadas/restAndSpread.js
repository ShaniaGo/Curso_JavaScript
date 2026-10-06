// PARAMETROS REST

/*El parámetro Rest te permite crear una función que acepte cualquier cantidad de argumentos sin tener 
que definir un parámetro individual para cada uno. */

function eventos(titulo, ...invitados){
    console.log(`Nombre del Evento: ${titulo}`)
    console.log("Lista de invitados: ", invitados)
    console.log(`Nro de invitados: ${invitados.length}`)
}

eventos (`Mi Cumpleanos`, "Jeferson", "Shania", "Austin", "Alberth")

//Spread

/*Toma un Array u Objeto que ya está empaquetado y "saca" todos sus elementos uno por uno 
para repartirlos donde los necesites. */

let frutas = ["Mango", "Cambur"]
let verduras = ["Yuca", "Papas"]

let todoJunto = [...frutas, ...verduras, "Mas cosas"]

console.log(todoJunto)

//Ahora con un objeto

let usuarioBase = {
    nombre: `Shania`,
    rol: `desarrolladora`
};

let otraBase = {
    ...usuarioBase,
    rol: "Desarrolladora Fronted",
    Edad: 28
};

console.log(otraBase)
console.log(usuarioBase)