const lookInput = document.getElementById("exampleFormControlInput")
const search = document.getElementById("button")
const miModal = new bootstrap.Modal(document.getElementById("modalPersonaje"))
const urlAPIs = 'https://thesimpsonsapi.com/api/characters/'
const urlAPIsImage = `https://cdn.thesimpsonsapi.com/`
const sizeImage = 200;
const imgPredeterminada = 'https://img.magnific.com/vector-premium/ilustracion-rosquilla-colores-dibujada-mano_16109-2288.jpg?semt=ais_hybrid&w=740&q=80'
const datosPersonajes = [
    'id',
    'name',
    'birthdate',
    'portrait_path',
    'age',
    'occupation',
    'description',
    'status'
]

function portero(washiman){
    respuesta = /^(?=.*[0-9]).{1,5}$/.test(washiman)
    return respuesta
}

function alerts(icon, title, text){
    Swal.fire({
            toast: true,
            position: 'bottom-end',
            timer: 2000,
            showConfirmButton: false,
            icon,
            title,
            text,
        });
}

//CONEXION CON EL JSON PLACEHOLDER
const user = async (userId) => {
    try {
        const response = await fetch(`${urlAPIs}${userId}`)
        if(!response.ok){
        throw new Error(`USUARIO NO ENCONTRADO`)
    }
        const datos = await response.json()
        console.log(datos) 
        return datos
    } catch (error) {
        alerts("error", "Oops...", "USUARIO NO ENCONTRADO")
        console.log(`${error}`)
        return
    } 
}

//FUNCION PARA PINTAR EN PANTALLA LOS DATOS DEL USUARIO
function pintarPersonaje(user){
    datosPersonajes.forEach(campo =>{
        const element = document.getElementById(campo)
        if(campo === "portrait_path"){
            element.setAttribute('src', `${urlAPIsImage}${sizeImage}${user.portrait_path}`)
        } else {
            element.textContent = user[campo]
        }
    })
}

//FORMA MAS RAPIDA DE DARLE FUNCIONALIDAD A UN INPUT Y BOTONS
form.addEventListener("submit", async (evento) =>{
    evento.preventDefault()
    const ingreso = portero(lookInput.value)
     if(lookInput.value == ""){
        alerts("warning", "Oops...", "DEBE INGRESAR UN ID" )
        return
     }

    if(ingreso == false){
        lookInput.value = ""
        alerts("error", "Oops...", "INGRESE UN ID VALIDO")
        return 
    }

    const result = await user(lookInput.value)
    lookInput.value = ""
    if(result){
        pintarPersonaje(result)
        miModal.show()
        alerts("success", "ENHORABUENA!", "USUARIO ENCONTRADO" )
    }
})
