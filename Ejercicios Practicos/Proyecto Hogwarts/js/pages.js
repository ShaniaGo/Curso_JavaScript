import { obtenerHechizos } from "./api.js";
import { pintarHechizos } from "./vista.js";

let hechizosGuardados = [];
const lookInput = document.getElementById("inputBuscarHechizo");
const divForm = document.getElementById("form");

//Muestra todos los hechizos en la tabla desde el controlador
const iniciarApp = async () => {
  if (document.getElementById("tabla-hechizos-body")) {
    hechizosGuardados = await obtenerHechizos();
    pintarHechizos(hechizosGuardados, "");
  }
};

iniciarApp();
//FORMA MAS RAPIDA DE DARLE FUNCIONALIDAD A UN INPUT Y BOTONS
divForm.addEventListener("input", async () => {
  pintarHechizos(hechizosGuardados, lookInput.value);
});
