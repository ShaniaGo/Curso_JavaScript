/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function factorial(factor){

    let resulFactor = 1;

    for(let i = 1; i <= factor; i++){
        resulFactor *= i;
    }

    console.log(resulFactor);
}

// 2. Exporta una constante

export const saludo = `Hola mundo`

// 3. Exporta una clase

export class animales {

    constructor(nombre, habita){
        this.nombre = nombre
        this.habita = habita
    }

    describe(){
        return `El ${this.nombre} vive en ${this.habita}`
    }

    static nacimiento(ano){
        return `El animalito nacio en el ano ${ano}`;
    }
}

// 4. Importa una función

//esta en el archivo modulosImportados.js

// 5. Importa una constante
//esta en el archivo modulosImportados.js

// 6. Importa una clase
//esta en el archivo modulosImportados.js

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function procesarUsuario() {

  class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }

  const nuevoUsuario = new Usuario("Shania");

  console.log(`Usuario registrado: ${nuevoUsuario.nombre}`);
}

// Para probarla:
//procesarUsuario();



// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

//esta en el archivo exportacion.js en la subcarpeta FreeCodeCamp

// 9. Exporta una función, una constante y una clase desde una carpeta

//esta en el archivo modulosImportados.js

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior//esta en el archivo modulosImportados.js