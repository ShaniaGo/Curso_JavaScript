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
    producto.nameProducto = `Bacitracina`;
    producto.precio = 30;
    producto.stock = 100;
   
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
producto1.nameProducto = `Vaselina`;
producto1.precio = 5;
producto1.categoria = `Unguentos`;

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
            return `Disponible ${this.nameProduc}`
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

// 6. Crea una clase abstracta
console.log(`------ EJERCICIO NRO 6 ------`)

class empleados {
    constructor (name, secondName, id, phone){
        if(new.target === empleados){
            throw new Error (`No se puede instanciar esta clase`)  
            //Al agregar este error evito que se instancie directamente la clase padre, 
            // permitiendo que solo sea utilizada a través de la herencia por sus subclases   
        }
        this.name = name
        this.secondName = secondName
        this.id = id
        this.phone = phone
    }

    empleadoFijo(){
        throw new Error(`Epa aqui no es, crea una subclase`)
    }

    empleadoContratado(){
         throw new Error(`Epa aqui no es, crea una subclase`)
    }
}


// 7. Utiliza polimorfismo en dos clases diferentes
console.log(`------ EJERCICIO NRO 7 ------`)

class Fijo extends empleados {
    empleadoFijo(horas){
        const salarioHora = 10;
        this.horas = horas
        let sueldoMensual = this.horas * salarioHora

        console.log(`Sr(a) ${this.name} Cobrara este mes ${sueldoMensual}$`)
    } // aca se esta implementando el polimorfismo ya que estoy tomando una funcion de la clase padre y la estoy modificando para que realice una accion en especifico
}

class Contratado extends empleados {
      empleadoContratado(horas){
        const salarioHora = 7;
        this.horas = horas
        let sueldoMensual = this.horas * salarioHora

        console.log(`Sr(a) ${this.name} Cobrara este mes ${sueldoMensual}$`)
    } // aca se esta implementando el polimorfisma ya que estoy tomando una funcion de la clase padre y la estoy modificando para que realice una accion en especifico
}

const fijo = new Fijo(`Shania`, `Gomez`, 21332453, 41478989) // Ejemplo de que se hereda los campos que solicita la clase
//console.log(fijo)
fijo.empleadoFijo(40)

const contratado = new Contratado(`Jim`, `Byrne`, 2345443, 3455634235) // Ejemplo de que se hereda los campos que solicita la clase
//console.log(contratado)
contratado.empleadoContratado(50)

// 8. Implementa un Mixin
console.log(`------ EJERCICIO NRO 8 ------`)

class Personajes {
    #vida = 100
    constructor (nombre){
        this.nombre = nombre
    }
    atacar(){
            if(this.#vida < 100){
                this.#vida += 10
                console.log(`Toma tu tortazo. Nivel de vida: ${this.#vida}`)
            }else{
                console.log(`Toma tu tortazo`)
            }
        }

    recibirDanio(){
        if(this.#vida > 0){
            this.#vida -= 10;
            console.log(`Has sido atacado, nivel de vida actual: ${this.#vida}. Debes atacar para aumentar el nivel de vida`)
        }else {
            console.log(`Haz perdido la batalla, intentalo de nuevo`)
        }
    }

    get vida(){
        return this.#vida
    }
}

class Guerrero extends Personajes {
    fuerzaFisica(){

    }
}

class Mago extends Personajes {
    hechizoBasico(){

    }
}

const flyMixing = (Base) => class extends Base{
    fly(){
        console.log(`${this.nombre} dice: Puedo volar, Puedo volar!!!!!`)
    }
}

class GuerreroVolador extends flyMixing(Guerrero){

}

class MagoVolador extends flyMixing(Mago){
    
}

const thanos = new GuerreroVolador(`Thanos`)
const loky = new MagoVolador(`LOKY`)

console.log(thanos.nombre)
console.log(loky.nombre)

thanos.fly()
loky.fly()
// thanos.recibirDanio()
// thanos.recibirDanio()
// thanos.recibirDanio()
// thanos.atacar()


// 9. Crea un Singleton
console.log(`------ EJERCICIO NRO 9 ------`)
class ArenaDeJuego {
    static instancia = null;

    constructor(mapa){
        if(ArenaDeJuego.instancia){
            return ArenaDeJuego.instancia
        }

        this.mapa = mapa

        ArenaDeJuego.instancia = this
    }
}

const arena1 = new ArenaDeJuego("Bosque Oscuro");
const arena2 = new ArenaDeJuego("Coliseo de Roma");

console.log(arena1)
console.log(arena2)
console.log(arena1 == arena2)


// 10. Desarrolla un Proxy
console.log(`------ EJERCICIO NRO 10 ------`)
const handler = {
    set(target, property, value){
        console.log(`Alerta! estan intentando cambiar la propiedad ${property} por ${value}`)

        if(property === "nombre" && value.trim() === "" && typeof value === "string"){
            console.log(`No puede dejar el campo en blanco`)
            return false
        }

        target[property] = value
        console.log(`Cambio aplicado con exito`)
        return true

    }
}

let thanosSeguro = new Proxy(thanos, handler)

thanosSeguro.nombre = "Thanos el indestructuble"