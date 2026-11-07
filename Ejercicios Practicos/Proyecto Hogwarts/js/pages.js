import { obtenerHechizos } from "./api.js";
import { pintarHechizos } from "./vista.js";

let hechizosGuardados = [];
const lookInput = document.getEl

import { getCharacters } from "./api.js";
import { showCharactersList } from "./vista.js";

let characterSave = [];
const divCharacters = document.getElementById("formCharacters")
const inputCharacters = document.getElementById("inputBuscarCharacter")

const iniciarAppCharacters = async () => {
  if (document.getElementById("grid-profesores")) {
    characterSave = await getCharacters();
    showCharactersList(characterSave, "");
  }
};

iniciarAppCharacters();

/*if(divCharacters){
  divCharacters.addEventListener("input", async () => {
  showCharactersList(characterSave, inputCharacters.value);
});
}*/
if (!inputCharacters) return;
inputCharacters.addEventListener("input", async () => {
  showCharactersList(characterSave, inputCharacters.value);
});
