//Funcion para pintar en pantalla los hechizos
const tBody = document.getElementById("tabla-hechizos-body");

export const pintarHechizos = (listaHechizos, filtro) => {
  let listaParaPintar = listaHechizos; //Aca guardo la lista de hechizos
  tBody.innerHTML = "";

  if (filtro !== "") {
    listaParaPintar = listaHechizos.filter((spell) => spell.attributes.name.toLowerCase().startsWith(filtro.toLowerCase())); //  Filtro la lista para quedarme solo con los hechizos que empiezan con el texto buscado.
  }

  // Acá estoy recorriendo los hechizos filtrados y pintándolos en pantalla
  listaParaPintar.forEach((spell) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="ps-4 py-3">
    <span class="fw-bold text-warning fs-5" style="font-family: 'Cinzel', serif;" >🪄 ${spell.attributes.name}</span>
    </td>
    <td class="text-center"><span class="badge bg-danger">${spell.attributes.category}</span></td>
    <td class="pe-4 text-light small">${spell.attributes.effect}</td>`;

    tBody.appendChild(tr);
  });
};
//-----------------HASTA AQUI LA FUNCION PARA PINTAR LOS HECHIZOS------------------------

//-----------------Funcion para pintar en pantalla a los personajes---------------------
const characters = document.getElementById("grid-profesores");

export const showCharactersList = (listaProf, filtro) => {
  let characterList = listaProf;
  characters.innerHTML = "";

  if (filtro !== "") {
    characterList = listaProf.filter((character) => character.personaje.toLowerCase().includes(filtro.toLowerCase()));
  }

  characterList.forEach((character) => {
    const divCharacter = document.createElement("div");
    divCharacter.classList.add("col");

    divCharacter.innerHTML = `<div
            class="card magic-card h-100 text-center p-3 cursor-pointer"
            data-id="profesor-${character.personaje}"
            data-bs-target="#modalProfesor"
            style="cursor: pointer"
          >
            <div class="d-flex justify-content-center mt-3">
              <img
                src="${character.imagen || "https://media.posterstore.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} "
                class="rounded-circle border border-2 border-warning shadow-sm"
                alt="${character.personaje}"
                style="width: 150px; height: 150px; object-fit: cover"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title text-warning fw-bold" style="font-family: &quot;Cinzel&quot;, serif">
               ${character.personaje}
              </h5>
              <span class="badge bg-warning text-dark">${character.casaDeHogwarts}</span>
            </div>
          </div>
        </div>`;

    characters.appendChild(divCharacter);
  });
};
