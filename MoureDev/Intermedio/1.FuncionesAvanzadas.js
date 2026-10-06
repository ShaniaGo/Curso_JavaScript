/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function juguete (nombreJuguete){
    return function jugueteCarinoso(){
        return `Hola soy ${nombreJuguete} y Te quiero!!!`
    }
}

let cajaDeJuguetes = juguete(`Barnie`)

console.log(cajaDeJuguetes())

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar (a){
    return function (b){
        return function (c){
            return a * b * c;
        }
    }
};

console.log(multiplicar(2)(2)(3))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente){
    if(exponente == 0){
        return 1;
    }

    return base * potencia(base, exponente - 1)
}

console.log(potencia(5, 2))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial){
    let valor = valorInicial;

    return{
        increment: function(num){
            valor += num
            return`Valor actual ${valor}`
        },
        decrement: function (num){
            if(num > valor){return`El nro ingresado no puede ser mayor al valor actual ${valor}`}
            valor -= num
            return`Valor actual ${valor}`
        },
        getValue: function(){
            return`Valor actual ${valor}`
        }
    }
}

let counter = createCounter(500);

console.log(counter.getValue())
console.log(counter.decrement(100))
console.log(counter.increment(1000))

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    let result = 0;

    for(let num of numbers){
        result += num;
    }
        return result *= multiplier

}
console.log(sumManyTimes(1, 1,2,3));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function totalSuma(result){
    console.log(`El resultado de la suma es ${result}`)
};

function funcionSumadora(callback, ...numero){
    let result = 0
    for(let i = 0; i < numero.length; i++){
        result += numero[i]
    }

    callback(result)
}

funcionSumadora(totalSuma, 5,10, 15,)

// 7. Desarrolla una función parcial
function crearCalculadoraIVA(porcentajeImpuesto) {
  return function(precio) {
    return precio + (precio * porcentajeImpuesto);
  };
}

const calcularIVA16 = crearCalculadoraIVA(0.16);

console.log(calcularIVA16(100)); 
console.log(calcularIVA16(250)); 

// 8. Implementa un ejemplo que haga uso de Spread
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

// 9. Implementa un retorno implícito
let Fahrenheit = (Celsius) => (Celsius * 1.8) + 32
console.log(Fahrenheit(0))

// 10. Haz uso del this léxico
let reproductor = {
    nombre: `Complaciendo Gustos Musicales`,
    canciones: [`La Bachata`, `Rubia Sol Morena Luna`, `Girasol`, `Te gateo`],

    mostrarLista(){
        this.canciones.forEach(cancion => {
            console.log(`${this.nombre} esta Sonando ${cancion}`)
            
        });
    }
}

reproductor.mostrarLista()