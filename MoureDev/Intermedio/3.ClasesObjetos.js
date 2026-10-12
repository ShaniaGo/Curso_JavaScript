/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
console.log(`------ EJERCICIO NRO 1 ------`)
let productoBase = {
    imprimir() {
        console.log(`Precio de la ${this.nameProducto} es ${this.precio}`)
    }
}

let producto = Object.create(productoBase)
    producto.nameProducto = `Bacitracina`,
    producto.precio = 30,
    producto.stock = 100,
   
productoBase.dcto = function(){
    let montoDcto = this.precio * 0.20
    let precioFinal = this.precio - montoDcto 
    console.log(`En Horabuena ha conseguido un dcto del 20%, su ${this.nameProducto} quedara en ${precioFinal}`)
}

console.log(productoBase.__proto__)
console.log(Object.getPrototypeOf(productoBase))
producto.imprimir()
producto.dcto()

// 2. Crea un objeto que herede de otro
console.log(`------ EJERCICIO NRO 2 ------`)

let producto1 = Object.create(productoBase)
producto1.nameProducto = `Vaselina`
producto1.precio = 5
producto1.categoria = `Unguentos`

producto1.imprimir()
producto1.dcto()
console.log(producto1)

// 3. Define un método de instancia en un objeto
console.log(`------ EJERCICIO NRO 3 ------`)
function Animal (type, name){
    this.name = name,
    this.type = type
}

Animal.prototype.sonido = function(){
    console.log(`Mi mascota es un ${this.type} y se llama ${this.name}`)
}

let newAnimal = new Animal(`perro`, `Mecha`)
newAnimal.sonido()

// 4. Haz uso de get y set en un objeto
console.log(`------ EJERCICIO NRO 4 ------`)

let inventario = {
    nameProduc : `Helado de chocolate`,
    _stock : 30,

    get estadoStock(){
        if(this._stock === 0){
            return `No tenemos stock de ${this.nameProduc}`
        } else if (this._stock <= 5) {
            return `Ultimas unidades disponibles, debes recargar el stock de ${this.nameProduc}`
        } else {
            return `Disponible ${this.nameProduc}}`
        }
    },

    set stock(nuevoStock){
        if(nuevoStock > 0){
            this._stock = nuevoStock;
            console.log(`Stock actualizado con exito`);
    
        } else {
            throw new Error(`Error: El Stock no puede ser un numero negativo.`)
        }
    }
}

try {
    inventario.stock = -10000
} catch(error){
    console.log(error)
}

inventario.stock = 100
console.log(inventario.estadoStock)



// 5. Utiliza la operación assign en un objeto
console.log(`------ EJERCICIO NRO 5 ------`)

let personName = {name: `Shania`}
let personInfo = {age: 28, email: `gsclantiunasg@gmail.com`}

let persona = Object.assign(personName, personInfo)
console.log(persona)

// // 6. Crea una clase abstracta
// console.log(`------ EJERCICIO NRO 6 ------`)
// // 7. Utiliza polimorfismo en dos clases diferentes
// console.log(`------ EJERCICIO NRO 7 ------`)

// // 8. Implementa un Mixin
// console.log(`------ EJERCICIO NRO 8 ------`)

// // 9. Crea un Singleton
// console.log(`------ EJERCICIO NRO 9 ------`)

// // 10. Desarrolla un Proxy
// console.log(`------ EJERCICIO NRO 10 ------`)