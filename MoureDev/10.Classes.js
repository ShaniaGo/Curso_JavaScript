/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// // 1. Crea una clase que reciba dos propiedades

// class animales {

//     constructor(nombre, habita){
//         this.nombre = nombre
//         this.habita = habita
//     }

//     describe(){
//         return `El ${this.nombre} vive en ${this.habita}`
//     }

//     static nacimiento(ano){
//         return `El animalito nacio en el ano ${ano}`;
//     }
// }

// let animal1 = new animales("Oso Panda", "Antartida");

// console.log(animal1)
// console.log(typeof animal1)

// // 2. Añade un método a la clase que utilice las propiedades

// class personaConMetodo{
//     constructor(name, secondName, age){
//         this.name = name
//         this.secondName = secondName
//         this.age = age
//     }                     

//     camina(){
//         console.log(`El senor ${this.name} camina`)
//     }
// }

// // 3. Muestra los valores de las propiedades e invoca a la función

// let personita = new personaConMetodo("Shania", "Gomez", 27)
// console.log(personita)
// personita.camina()

// // 4. Añade un método estático a la primera clase
// // hecho en el ejercicio 1

// // 5. Haz uso del método estático

// console.log(animales.nacimiento(2024));

// // 6. Crea una clase que haga uso de herencia

// class Perro extends animales{
//     sonido(){
//         console.log(`GUAUUU GUAUUU`)
//     }
// }

// let miPerro = new Perro("Mecha", "Domestico");
// console.log(miPerro);
// miPerro.sonido();

// // 7. Crea una clase que haga uso de getters y setters

// class primerGet{
//     #user
//     #password
//     #pin

//     constructor(user, password, pin){
//         this.#user = user
//         this.#password = password
//         this.#pin = pin
//     }

//     get user () {
//         return `Nombre de usuario ${this.#user}`
//     }
    

//     set password (contrasena){
//         this.#password = contrasena
//     }

//     get password () {
//         return `Contrasena ${this.#password}`
//     }

// }
// //let usuario = new primerGet("ShaniaGo", "qwerty.4", 3006);

// // 8. Modifica la clase con getters y setters para que use propiedades privadas

// //hecho en el ejercicio 7

// // 9. Utiliza los get y set y muestra sus valores

// let usuario = new primerGet("ShaniaGo", "qwerty.4", 3006);
// console.log(usuario.user)

// usuario.password = "qwerty.5"
// console.log(usuario.password)

// // 10. Sobrescribe un método de una clase que utilice herencia 

// class gato extends animales {
//     constructor(nombre, habita, tipoDeAgua){
//         super(nombre, habita)
//         this.tipoDeAgua = tipoDeAgua
//     }
    
//     describe(){
//         return super.describe() +` y bebe ${this.tipoDeAgua}`
//     }
// }

// let miGato = new gato("LittleFinger", "Casa", "Agua Dulce")
// console.log(miGato.describe())

class Juguete {
  #diarioSecreto;
  // 1. Declara tu propiedad privada #bateria aquí (empieza en 100)
  #bateria = 100;

  constructor(nombre, color, secretoInicial) {
    this.nombre = nombre;
    this.color = color;
    this.#diarioSecreto = secretoInicial;
    // (no hace falta recibir la batería por parámetro si todas nacen en 100)
  }

  // 2. Escribe aquí el método jugar()
  jugar(){
        if(this.#bateria > 0){
            this.#bateria -= 20;
            console.log(`🎮 Jugaste con ${this.nombre}. Batería restante: ${this.#bateria}%.`)
        } else {
            console.log(`🪫 ${this.nombre} no tiene batería. ¡A de la recargar!`)
        }

  }

  // 3. Escribe aquí el getter bateria
  get bateria(){
    return this.#bateria
  }



}

// PRUEBA:
const miOsito = new Juguete("Teddy", "marrón", "Me gusta la miel");

miOsito.jugar(); // Batería: 80%
miOsito.jugar(); // Batería: 60%
console.log(miOsito.bateria); // Debería devolver "80%" o 80