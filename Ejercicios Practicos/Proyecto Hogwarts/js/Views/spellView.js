//Funcion para pintar de colores las categorias
const getCategoryColor = (categoria) => {
  if (!categoria) return "bg-secondary"; // Si es null

  const cat = categoria.toLowerCase();

  if (cat.includes("curse")) return "bg-danger";
  if (cat.includes("jinx") || cat.includes("hex")) return "bg-warning text-dark";
  if (cat.includes("healing")) return "bg-success";
  if (cat.includes("charm")) return "bg-primary";
  if (cat.includes("transfiguration")) return "bg-info text-dark";
  
  // Si tiene varias cosas raras o es "Hechizo General"
  return "bg-dark border border-warning"; 
};

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
    <td class="text-center"><span class="badge ${getCategoryColor(spell.attributes.category)}">${spell.attributes.category}</span></td>
    <td class="pe-4 text-light small">${spell.attributes.effect}</td>`;

    tBody.appendChild(tr);
  });
};