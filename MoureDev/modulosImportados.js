import { factorial, saludo, animales} from "./13.modulosExternos.js";
import usuarioNuevoDefault from "./13.modulosExternos.js"
import { verificarServidor } from "../FreeCodeCamp/exportacion.js";

//Funcion
(factorial(5))

//constante
console.log(saludo)

//clase
let animalito = new animales("Perro", "Casa")
console.log(animalito)

//importacion por defecto
usuarioNuevoDefault()

//desde otra carpeta

verificarServidor()