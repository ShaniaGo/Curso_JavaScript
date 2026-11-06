import { obtenerHechizos } from "./api.js";
import { pintarHechizos } from "./vista.js";

let hechizosGuardados = [];
const lookInput = document.getElementById("inputBuscarHechizo");
const divForm = document.getElementById("form");

//Muestra todos los hechizos en la tabla desde el controlador
const iniciarAppHechizos = async () => {
  if (document.getElementById("tabla-hechizos-body")) {
    hechizosGuardados = await obtenerHechizos();
    pintarHechizos(hechizosGuardados, "");
  }
};

iniciarAppHechizos();
//FORMA MAS RAPIDA DE DARLE FUNCIONALIDAD A UN INPUT Y BOTONS
divForm.addEventListener("input", async () => {
  pintarHechizos(hechizosGuardados, lookInput.value);
});
//-----------------HASTA AQUI LA FUNCION PARA LOS HECHIZOS------------------------

import { obtenerProfesores } from "./api.js";
import { showStaffList } from "./vista.js";
let staffSave = [];

const iniciarAppStaff = async () => {
  if (document.getElementById("grid-profesores")) {
    staffSave = await obtenerProfesores();
    showStaffList(staffSave, "");
  }
};

iniciarAppStaff();
