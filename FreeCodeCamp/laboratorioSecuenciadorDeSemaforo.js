/*Construir un secuenciador de semáforo
En este laboratorio, simularás ciclos configurables de semáforos y registrarás anomalías.

Trabajarás con objetos de configuración que describen las fases de un semáforo. Cada objeto de configuración tiene las siguientes propiedades:

fault: una bandera booleana que provoca la terminación anticipada cuando es true.
phases: un arreglo de objetos fase.
Cada objeto fase dentro de phases tiene las siguientes propiedades:

color: una cadena que representa el color de la luz ("green", "yellow" o "red").
duration: un entero positivo que representa cuánto dura la fase en segundos.
Puedes referirte a los objetos config1, config2, config3 y config4 proporcionados como ejemplos de posibles objetos de configuración.

Nota: No agregues declaraciones adicionales de console.log(), ya que pueden hacer que las pruebas fallen.

Objetivo: Cumple las historias de usuario a continuación y logra que todas las pruebas pasen para completar el laboratorio.

Historias de usuario
Debes tener una función llamada runSequence con dos parámetros: config y cycles, donde config representa un objeto de configuración y cycles representa el número máximo de veces que la secuencia puede ejecutarse antes de detenerse.

Debes implementar runSequence(config, cycles) usando un ciclo for o while para iterar a través de cada fase durante el número dado de ciclos.

La función runSequence debe:

Registrar No phases found y retornar inmediatamente si config.phases está vacío.
Registrar Faulted phase! y detener la simulación anticipadamente si config.fault está en true.
Registrar Invalid phase detected si duration <= 0.
Registrar Switching to [color] for [duration] s para cada fase válida. Reemplaza [color] y [duration] con las propiedades correspondientes del objeto fase.
Por ejemplo, runSequence(config1, 1) debería registrar:
Código de ejemplo
Switching to green for 5 s
Switching to yellow for 2 s
Switching to red for 4 s
Debes tener una función llamada generateTimeline con dos parámetros: config y cycles.

La función generateTimeline debe:

Registrar el tiempo acumulado transcurrido después de cada fase a través de los ciclos en un arreglo, sumando la duration de cada fase al total acumulado mientras iteras.
Procesar todas las fases con fallas y fases inválidas sin validación, incluso si config.fault es true o duration <= 0.
Retornar el arreglo de marcas de tiempo acumuladas.
Por ejemplo, generateTimeline(config1, 1) debería retornar el arreglo [5, 7, 11]. */

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
  if(config.phases.length == 0){
    console.log(`No phases found`);
    return 0;
  } else if (config.fault === true){
    console.log(`Faulted phase!`);
    return 0;
  } else {
    for(let i = 0; i < cycles; i++){
      for(let phase of config.phases){
        if(phase.duration <= 0){
          console.log(`Invalid phase detected`);
        }else{
          console.log(`Switching to ${phase.color} for ${phase.duration} s`);
        }
      }
    }
  }
}

function generateTimeline (config, cycles){
  let lineaTiempo = [];
  let tiempoAcumulado = 0;

  for(let i = 0; i < cycles; i++){
    for(let phase of config.phases){
      tiempoAcumulado += phase.duration;
      lineaTiempo.push(tiempoAcumulado);
    }
  }
  return lineaTiempo;

}




document.addEventListener('DOMContentLoaded', function() {
  
  runSequence(config1, 1);
  generateTimeline(config1, 1);

});