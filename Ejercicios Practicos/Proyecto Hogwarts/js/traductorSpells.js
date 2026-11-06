// 1. Pega aquí la URL de la API vieja (la de los hechizos en español)
// O si tienes el JSON viejo en un archivo, usa fetch('./hechizos_viejos.json')
const urlAPI_vieja = "./data/hechizosViejos.json"; 

const traducirHechizos = async () => {
  try {
    const response = await fetch(urlAPI_vieja);
    const datosViejos = await response.json();

    // 2. Transformamos los datos al nuevo formato
    // Si la API vieja devuelve un array directo, o un objeto con .hechizos, ajusta esto.
    // Asumiremos que es un array llamado 'hechizos' o que los datos vienen directo.
    const listaVieja = datosViejos.hechizos || datosViejos; 

    const hechizosTraducidos = listaVieja.map((hechizo, index) => {
      return {
        id: `viejo-${hechizo.id || index}`, // Le damos un ID único para que no choque
        type: "spell",
        attributes: {
          category: "Hechizo General", // La API vieja no tenía categoría, le ponemos una por defecto
          name: hechizo.hechizo,       // Aquí pasamos el nombre
          effect: hechizo.uso,         // Aquí pasamos el uso/efecto
          image: null,
          incantation: hechizo.hechizo
        }
      };
    });

    // 3. Imprimimos el resultado en la consola listo para copiar
    console.log("¡Copia esto y pégalo en tu JSON nuevo!");
    console.log(JSON.stringify(hechizosTraducidos, null, 2));

  } catch (error) {
    console.error("Error al traducir:", error);
  }
};

traducirHechizos();