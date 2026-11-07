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