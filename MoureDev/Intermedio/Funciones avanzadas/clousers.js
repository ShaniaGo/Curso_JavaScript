// CLOUSERS

//Crear cuenta bancaria

function CreacionCuentaBancaria (saldoIncial){
    let saldo = saldoIncial;
    
    return{
        depositar: function(monto){
            saldo += monto;
            return `Su saldo actual es: ${saldo}`
        },
        retirar: function(monto){
            if(monto > saldo){return `Saldo Insuficiente`}
            saldo -= monto
            return `Su saldo actual es: ${saldo}`
        },
        consulta: function(){
            return `Su saldo actual es: ${saldo}`
        }
        
    }
}

let miCuentaBancaria = CreacionCuentaBancaria(10000)

console.log(miCuentaBancaria.consulta())
console.log(miCuentaBancaria.depositar(500))
console.log(miCuentaBancaria.retirar(10000))

// Función normal
function aplicarImpuesto(porcentajeImpuesto, precio) {
  return precio + (precio * porcentajeImpuesto);
}

// Aplicación Parcial: fijamos el porcentaje del IVA (ej. 16% = 0.16)
function crearCalculadoraIVA(porcentajeImpuesto) {
  // Retorna una función que solo espera el precio (el parámetro restante)
  return function(precio) {
    return precio + (precio * porcentajeImpuesto);
  };
}

// Creamos una función especializada fijando el 16%:
const calcularIVA16 = crearCalculadoraIVA(0.16);

// Ahora la reutilizamos solo pasándole el precio de cada producto:
console.log(calcularIVA16(100)); // 116
console.log(calcularIVA16(250)); // 290