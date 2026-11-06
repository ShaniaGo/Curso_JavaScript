//Funcion para pintar en pantalla los hechizos
const tBody = document.getElementById("tabla-hechizos-body");

export const pintarHechizos = (listaHechizos, filtro) => {
  let listaParaPintar = listaHechizos; //Aca guardo la lista de hechizos
  tBody.innerHTML = "";

  if (filtro !== "") {
    listaParaPintar = listaHechizos.filter((hechizo) => hechizo.name.toLowerCase().startsWith(filtro.toLowerCase())); //  Filtro la lista para quedarme solo con los hechizos que empiezan con el texto buscado.
  }

  // Acá estoy recorriendo los hechizos filtrados y pintándolos en pantalla
  listaParaPintar.forEach((hechizo) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="ps-4 py-3">
    <span class="fw-bold text-warning fs-5" style="font-family: 'Cinzel', serif;" >🪄 ${hechizo.name}</span>
    </td>
    <td class="pe-4 text-light text-center small">${hechizo.description}</td>`;

    tBody.appendChild(tr);
  });
};
//-----------------HASTA AQUI LA FUNCION PARA PINTAR LOS HECHIZOS------------------------

//-----------------Funcion para pintar en pantalla a los profesores---------------------
const profesores = document.getElementById("grid-profesores");

export const showStaffList = (listaProf, filtro) => {
  let staffList = listaProf;
  profesores.innerHTML = "";

  if (filtro !== "") {
    staffList = listaProf.filter((teacher) => teacher.name.toLowerCase().startsWith(filtro.toLowerCase()));
  }

  staffList.forEach((teacher) => {
    const divProf = document.createElement("div");
    divProf.classList.add("col");

    divProf.innerHTML = `<div
            class="card magic-card h-100 text-center p-3 cursor-pointer"
            data-id="profesor-${teacher.name}"
            data-bs-target="#modalProfesor"
            style="cursor: pointer"
          >
            <div class="d-flex justify-content-center mt-3">
              <img
                src="${teacher.image || "https://media.posterstore.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} "
                class="rounded-circle border border-2 border-warning shadow-sm"
                alt="${teacher.name}"
                style="width: 110px; height: 110px; object-fit: cover"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title text-warning fw-bold" style="font-family: &quot;Cinzel&quot;, serif">
               ${teacher.name}
              </h5>
              <span class="badge bg-warning text-dark">${teacher.house}</span>
            </div>
          </div>
        </div>`;

    profesores.appendChild(divProf);
  });
};
