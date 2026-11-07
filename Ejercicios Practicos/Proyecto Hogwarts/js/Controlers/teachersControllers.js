import { getTeacher } from "../api.js";
import { showTeachersList } from "../Views/teachersView.js";

let characterSave = [];
const divCharacters = document.getElementById("formCharacters")
const inputCharacters = document.getElementById("inputBuscarCharacter")

const iniciarAppCharacters = async () => {
  if (document.getElementById("grid-profesores")) {
    characterSave = await getTeacher();
    showTeachersList(characterSave, "");
  }
};

iniciarAppCharacters();

inputCharacters.addEventListener("input", async () => {
  showTeachersList(characterSave, inputCharacters.value);
})
 