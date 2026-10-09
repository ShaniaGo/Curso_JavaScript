/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
console.log(`EJERCICIO 1..................`)
let books = [{
    titulo: 'La Paciente Silenciosa',
    genero: ['Thriller', 'Misterio'],
    precio: 15,
    enStock: true
},

{
    titulo: 'Crepusculo',
    genero: ['Fantasia', 'Romance', 'Juvenil'],
    precio: 20,
    enStock: true
},

{
    titulo: 'Enamorate de ti',
    genero: 'Crecimiento Personal',
    precio: 10,
    enStock: false
},

{
    titulo: 'Pideme lo que quieras',
    genero: 'Spicy',
    precio: 35,
    enStock: false
}
]
//console.log(books)

let filtro = books.filter(elemento => elemento.enStock === true && elemento.categoria === 'Thriller')
console.log(filtro)

let dcto = filtro.map(descuento => descuento.precio * 0.8)
console.log(`En hora buena! Has conseguido un descuento, tu libro ahora costara ${dcto}`)

let reduccion = dcto.reduce((acumulador, precioActual) => acumulador + precioActual, 0)
console.log(reduccion)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
console.log(`EJERCICIO 2..................`)

let nros = [2, 60, 3, 15, 21, 4, 7, 33, 22]

let cubo = nros.map(num => num ** 3)
console.log(cubo)

let pares = cubo.filter(par => par % 2 === 0)
console.log(pares)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log(`EJERCICIO 3..................`)
//flat
let categorias = [[`tequenos`, `empanadas`], [`pollo asado`, `pollo frito`], [`sopa de res`, `sopa de pollo`, `sopa mixta`]]
let catCompletas = categorias.flat(Infinity)
console.log(catCompletas)

//flatmap
let categories = books.flatMap(category => category.genero)
console.log(categories)

// 4. Ordena un array de números de mayor a menor
console.log(`EJERCICIO 4..................`)
let nroSorted = nros.sort((a, b) => b - a) // Este modfica el arreglo original
console.log(nroSorted)


let nroToSorted = nros.toSorted((a, b) => b - a) // Este no lo modifica
console.log(nroToSorted)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
console.log(`EJERCICIO 5..................`)
let numerosA = new Set([14, 3, 89, 2, 45, 10, 67, 23, 105]);
let numerosB = new Set([105, 23, 8, 412, 56, 3, 99, 67]);

let union = new Set([...numerosA, ...numerosB])
console.log(union)

let intersección = new Set([...numerosA].filter(numbers => numerosB.has(numbers)))
console.log(intersección)

let diferencia = new Set([...numerosA].filter(numbers => !numerosB.has(numbers)))
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior
console.log(`EJERCICIO 6..................`)
union.forEach(union => console.log(`Iteracion de la union ${union}`))
intersección.forEach(number => console.log(`Iteracion de la Interseccion ${number}`))
diferencia.forEach(number => console.log(`Iteracion de la diferencia ${number}`))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
console.log(`EJERCICIO 7..................`)
let usuarios = new Map([
   [`user1`, {nombre: `Shania`, edad: 28, email: `gsclantiunasg@gmail.com`} ] 
,
[
    `user2`, {nombre: `Jeferson`, edad: 27, email: `jeff.univ@gmail.com`} 
],
[
    `user3`, {nombre: `Alberth`, edad: 5, email: `alberthMendezg@gmail.com`} 
]
]);

usuarios.forEach((value, key) => console.log(`${key}: ${value.nombre} ${value.edad} ${value.email}`))

// 8. Dado el mapa anterior, crea un array con los nombres
console.log(`EJERCICIO 8..................`)
let arrayNombres = Array.from(usuarios.values(), usuario => usuario.nombre)
console.log(arrayNombres)


// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
console.log(`EJERCICIO 9..................`)
// let listUsers = Array.from(usuarios.values())
// let userEmail = listUsers
//     .filter(usuario => usuario.edad >= 18)
//     .map(usuario => usuario.email)
// let userEmailSet = new Set(userEmail)
// console.log(userEmailSet)

let setEmails = new Set(
    Array.from(usuarios.values())
        .filter(usuario => usuario.edad >= 18)
        .map(usuario => usuario.email)
)

console.log(setEmails)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
console.log(`EJERCICIO 10..................`)
let objetFromMap = Object.fromEntries(usuarios)
console.log(objetFromMap)

let nuevoMapa = new Map(
  Object.values(objetFromMap).map(usuario => [usuario.email, usuario])
);

console.log(nuevoMapa);