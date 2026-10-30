const button = document.getElementById("button")
const input = document.getElementById("exampleFormControlInput")
const form = document.getElementById("form")

const campos = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website'
]

//VALIDACION CON REGEX
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
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!response.ok){
        throw new Error(`USUARIO NO ENCONTRADO`)
    }
        const datos = await response.json()
        console.log(datos) 
        return datos
    } catch (error) {
        alerts("error", "Oops...", "USUARIO NO ENCONTRADO")
        limpiarTabla()
        console.log(`${error}`)
        return
    } 
}

//FUNCION PARA PINTAR EN PANTALLA LOS DATOS DEL USUARIO
function pintarID(user){
    campos.forEach(campo =>{
        const element = document.getElementById(campo)
        element.textContent = user[campo]
    })
}

//FUNCION PARA LIMPIAR EN PANTALLA LOS DATOS DEL USUARIO
function limpiarTabla(){
        campos.forEach(campo => {
            const element = document.getElementById(campo)
            element.textContent = ""
    });
}

//FORMA MAS RAPIDA DE DARLE FUNCIONALIDAD A UN INPUT Y BOTONS
form.addEventListener("submit", async (evento) =>{
    evento.preventDefault()
    const ingreso = portero(input.value)
     if(input.value == ""){
        limpiarTabla()
        alerts("warning", "Oops...", "DEBE INGRESAR UN ID" )
        return
     }

    if(ingreso == false){
        limpiarTabla()
        input.value = ""
        alerts("error", "Oops...", "INGRESE UN ID VALIDO")
        return 
    }

    const result = await user(input.value)
    input.value = ""
    if(result){
        pintarID(result)
        alerts("success", "ENHORABUENA!", "USUARIO ENCONTRADO" )
    }
})
