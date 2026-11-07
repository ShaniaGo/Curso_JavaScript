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
const teachers = document.getElementById("grid-profesores");

export const showTeachersList = (listaProf, filtro) => {
  let teacherList = listaProf;
  teachers.innerHTML = "";

  if (filtro !== "") {
    teacherList = listaProf.filter((teachers) => teacher.nombre.toLowerCase().includes(filtro.toLowerCase()));
  }

  teacherList.forEach((teacher) => {
    const divTeacher = document.createElement("div");
    divTeacher.classList.add("col");

    divTeacher.innerHTML = `<div
            class="card magic-card h-100 text-center p-3 cursor-pointer"
            data-id="profesor-${teacher.nombre}"
            data-bs-target="#modalProfesor"
            style="cursor: pointer"
          >
            <div class="d-flex justify-content-center mt-3">
              <img
                src="${teacher.imagen} "
                onerror="this.onerror=null; this.src='https://m.media-amazon.com/images/I/71WmslB5DaL._AC_UF894,1000_QL80_.jpg';"
                class="rounded-circle border border-2 border-warning shadow-sm"
                alt="${teacher.nombre}"
                style="width: 150px; height: 150px; object-fit: cover"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title text-warning fw-bold" style="font-family: &quot;Cinzel&quot;, serif">
               ${teacher.nombre}
              </h5>
              <span class="badge bg-warning text-dark">${teacher.casa}</span>
            </div>
          </div>
        </div>`;

    teachers.appendChild(divTeacher);
  });
};
