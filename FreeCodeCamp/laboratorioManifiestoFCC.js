const manifest = {
    containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false };



  //Funcion para pasar de libras (lb) a Kilogramos (kg)

const manifest = {
containerId: 55, 
destination: "Carmel", 
weight: 400, 
unit: "lb", 
hazmat: false };


  //Funcion para pasar de libras (lb) a Kilogramos (kg)

function normalizeUnits (manifest){
  let copyManifest = {...manifest}; //Copia del manifiesto original
    if(copyManifest.unit === "lb"){
        copyManifest.weight = copyManifest.weight * 0.45;
        copyManifest.unit = "kg";
    }

    return copyManifest;
};
console.log(normalizeUnits(manifest));

//funcion para validar las propiedades de los manifiestos

function validateManifest(manifest){
    let error = {};

    //Validar la propiedad containerId = un entero positivo que identifica el contenedor de carga asociado.
    if (!manifest.hasOwnProperty("containerId")){
        error.containerId = "Missing";
    } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0){
        error.containerId = "Invalid";
    };


    //Validar propiedad destination = una cadena no vacía (después de eliminar espacios en blanco) que indica el destino final de la carga.
    if (!manifest.hasOwnProperty("destination")){
        error.destination = "Missing";
    } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === ""){
        error.destination = "Invalid"
    }

    //validar la propiedad weight: un número positivo que representa el peso de la carga.

   if(!manifest.hasOwnProperty("weight")){
        error.weight = "Missing";
    } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || isNaN(manifest.weight)){
        error.weight = "Invalid";
    }

    // validar la propiedad unit: una cadena que describe las unidades para la propiedad de peso de la carga (ya sea "kg" para kilogramos o "lb" para libras).

    if (!manifest.hasOwnProperty("unit")){
        error.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb"){
        error.unit = "Invalid";
    }

    //validar la propiedad hazmat: un valor booleano que indica si se requiere manejo de material peligroso.

    if(!manifest.hasOwnProperty("hazmat")){
        error.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean"){
        error.hazmat = "Invalid";
    }

return error;

}
console.log(validateManifest(manifest))

// funcion para validar el manifiesto y normalizar las unidades de peso si es necesario

function processManifest(manifest){
    let errorValidation = validateManifest(manifest);

    if(Object.keys(errorValidation).length === 0){
        console.log(`Validation success: ${manifest.containerId}`);
        let normalizated = normalizeUnits(manifest);
        console.log(`Total weight: ${normalizated.weight} kg`);
}else{
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errorValidation);
}


}