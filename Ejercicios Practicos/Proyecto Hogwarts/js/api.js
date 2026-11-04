// fetch para obtener a los estudiantes
const urlEstudiantes = "https://hp-api.onrender.com/api/characters/students";

export const obtenerEstudiantes = async () => {
  try {
    const response = await fetch(`${urlEstudiantes}`);
    if (!response.ok) {
      throw new Error(`Estudiantes no encontrado`);
    }
    const datos = await response.json();
    console.log(datos);
    return datos;
  } catch (error) {
    // alerts("error", "Oops...", "Estudiante no encontrado");
    console.log(`${error}`);
    return;
  }
};

//obtenerEstudiantes();

// fetch para obtener a los profesores
const urlProfesores = "https://hp-api.onrender.com/api/characters/staff";

export const obtenerProfesores = async () => {
  try {
    const response = await fetch(`${urlProfesores}`);
    if (!response.ok) {
      throw new Error(`Profesor no encontrado`);
    }
    const datos = await response.json();
    console.log(datos);
    return datos;
  } catch (error) {
    // alerts("error", "Oops...", "Profesor no encontrado");
    console.log(`${error}`);
    return;
  }
};

//obtenerProfesores();

// fetch para obtener los hechizos
const urlHechizos = "https://hp-api.onrender.com/api/spells";

export const obtenerHechizos = async () => {
  try {
    const response = await fetch(`${urlHechizos}`);
    if (!response.ok) {
      throw new Error(`Hechizo no encontrado`);
    }
    const datos = await response.json();
    console.log(datos);
    return datos;
  } catch (error) {
    // alerts("error", "Oops...", "Hechizo no encontrado");
    console.log(`${error}`);
    return;
  }
};

//obtenerHechizos();
