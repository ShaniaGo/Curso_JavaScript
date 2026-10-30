const lookInput = document.getElementById("exampleFormControlInput")
const search = document.getElementById("button")
const datosPersonajes = [
    'image_path',
    'name',
    'birthdate',
    'age',
    'description'
]

function portero(washiman){
    respuesta = /^(?=.*[0-9]).{1,2}$/.test(washiman)
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
const user = async function buscador(userId) {
    try {
        const response = await fetch(`https://thesimpsonsapi.com/api/characters/${userId}`)
        if(!response.ok){
        throw new Error(`USUARIO NO ENCONTRADO`)
    }
        const datos = await response.json()
        console.log(datos) 
        return datos
    } catch (error) {
        alerts("error", "Oops...", "USUARIO NO ENCONTRADO")
        limpiarCard()
        console.log(`${error}`)
        return
    } 
}
user(3)

//FUNCION PARA PINTAR EN PANTALLA LOS DATOS DEL USUARIO
function pintarPersonaje(user){
    datosPersonajes.forEach(campo =>{
        const element = document.getElementById(campo)
        element.textContent = user[campo]
    })
}

//FUNCION PARA LIMPIAR EN PANTALLA LOS DATOS DEL USUARIO
function limpiarCard(){
    datosPersonajes.forEach(campo => {
            const element = document.getElementById(campo)
            element.textContent = ""
    });
}


//FORMA MAS RAPIDA DE DARLE FUNCIONALIDAD A UN INPUT Y BOTONS
form.addEventListener("submit", async (evento) =>{
    evento.preventDefault()
    const ingreso = portero(lookInput.value)
     if(lookInput.value == ""){
        limpiarCard()
        alerts("warning", "Oops...", "DEBE INGRESAR UN ID" )
        return
     }

    if(ingreso == false){
        limpiarCard()
        lookInput.value = ""
        alerts("error", "Oops...", "INGRESE UN ID VALIDO")
        return 
    }

    const result = await user(lookInput.value)
    lookInput.value = ""
    if(result){
        pintarPersonaje(result)
        alerts("success", "ENHORABUENA!", "USUARIO ENCONTRADO" )
    }
})
