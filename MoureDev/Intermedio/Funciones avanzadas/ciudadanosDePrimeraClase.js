
//CIUDADANOS DE PRIMERA CLASE
const miJuguete = function(){
    return `Te doy un abrazo gigante`;
}

console.log(miJuguete())


// La función que da abrazos
function darAbrazo() {
  return "¡Abrazo de oso! 🐻";
}

// El CajaRobot recibe un juguete por sus manos y decide jugarlo
function cajaRobot(jugueteQueMePrestaron) {
  console.log("El robot va a activar el juguete...");
  console.log(jugueteQueMePrestaron()); // ¡Usa la función que le regalaste!
}

// Le regalamos la función 'darAbrazo' al robot:
cajaRobot(darAbrazo);

 //funcion fabrica de juguetes
function fabricaDeJuguetes(color) {
  // La fábrica construye y te REGALA una función nueva
  return function() {
    return `¡Activaste la maquinita de color ${color}! ✨`;
  };
}

// Le pedimos a la fábrica una maquinita azul:
const miJugueteAzul = fabricaDeJuguetes("Azul");

// ¡Ahora tenemos un juguete nuevo guardado para cuando queramos!
console.log(miJugueteAzul()); // Imprime: ¡Activaste la maquinita de color Azul! ✨