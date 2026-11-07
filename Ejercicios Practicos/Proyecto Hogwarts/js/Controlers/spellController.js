import { obtenerHechizos } from "../api.js";
import { pintarHechizos } from "../Views/spellView.js";

let hechizosGuardados = [];
const lookInput = document.getElementById("inputBuscarHechizo");
const divForm = document.getElementById("form");


//Muestra todos los hechizos en la tabla desde el controlador
const iniciarAppHechizos = async () => {
  if (document.getElementById("tabla-hechizos-body")) {
    hechizosGuardados = await obtenerHechizos();
    const categoriasUnicas = [...new Set(hechizosGuardados.map(h => h.attributes.category))];
console.log("MIRA MIS CATEGORÍAS:", categoriasUnicas);
    pintarHechizos(hechizosGuardados, "");
  }
};

iniciarAppHechizos();
//FORMA MAS RAPIDA DE DARLE FUNCIONALIDAD A UN INPUT Y BOTONS


lookInput.addEventListener("input", async () => {
  pintarHechizos(hechizosGuardados, lookInput.value);})