// fetch para obtener a los estudiantes
//const urlEstudiantes = "https://hp-api.onrender.com/api/characters/students";

/*export const obtenerEstudiantes = async () => {
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

//obtenerProfesores(); */

// fetch para obtener los hechizos
const urlHechizos = "./data/db.json";

export const obtenerHechizos = async () => {
  try {
    const response = await fetch(`${urlHechizos}`);
    if (!response.ok) {
      throw new Error(`Hechizo no encontrado`);
    }
    const datos = await response.json();
    console.log(datos.hechizos);
    return datos.hechizos;
  } catch (error) {
    // alerts("error", "Oops...", "Hechizo no encontrado");
    console.log(`${error}`);
    return;
  }
};

//  obtenerHechizos();

// fetch para obtener a los profesores
const urlTeachers = "./data/db.json";

export const getTeacher = async () => {
  try {
    const response = await fetch(`${urlTeachers}`);
    if (!response.ok) {
      throw new Error(`Personaje no encontrado`);
    }
    const datos = await response.json();
    console.log(datos.profesores);
    return datos.profesores;
  } catch (error) {
    // alerts("error", "Oops...", "Estudiante no encontrado");
    console.log(`${error}`);
    return;
  }
};

getTeacher()
