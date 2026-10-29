const button = document.getElementById("button")
const input = document.getElementById("exampleFormControlInput")
const msgError = document.getElementById("msgError")

//VALIDACION CON REGEX
function portero(washiman){
    respuesta = /^(?=.*[0-9]).{1,2}$/.test(washiman)
    return respuesta
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
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            timer: 2000,
            showConfirmButton: false,
            icon: "error",
            title: "Oops...",
            text: "USUARIO NO ENCONTRADO",
        });
        limpiarTabla()
        console.log(`${error}`)
        return
    } 
}

//FUNCION PARA PINTAR EN PANTALLA LOS DATOS DEL USUARIO
function pintarID(user){
        const idUser = document.getElementById("td-id")
        idUser.textContent = user.id

        const name = document.getElementById("td-name")
        name.textContent = user.name

        const username = document.getElementById("td-username")
        username.textContent = user.username
        
        const email = document.getElementById("td-email")
        email.textContent = user.email

        const phone = document.getElementById("td-phone")
        phone.textContent = user.phone

        const website = document.getElementById("td-website")
        website.textContent = user.website
}

//FUNCION PARA PINTAR EN PANTALLA LOS DATOS DEL USUARIO
function limpiarTabla(){
        const idUser = document.getElementById("td-id")
        idUser.textContent = ""

        const name = document.getElementById("td-name")
        name.textContent = ""

        const username = document.getElementById("td-username")
        username.textContent = ""
        
        const email = document.getElementById("td-email")
        email.textContent = ""

        const phone = document.getElementById("td-phone")
        phone.textContent = ""

        const website = document.getElementById("td-website")
        website.textContent = ""
}

//FUNCIONALIDAD DE MI BOTON Y ENTER
button.addEventListener("click", async () => {
    const ingreso = portero(input.value)
     if(input.value == ""){
         Swal.fire({
            toast: true,
            position: 'bottom-end',
            timer: 2000,
            showConfirmButton: false,
            icon: "error",
            title: "Oops...",
            text: "DEBE INGRESAR UN ID",
        });
        return
     }

    if(ingreso == false){
        limpiarTabla()
        input.value = ""
        Swal.fire({
            toast: true,
            position: 'botttom-end',
            timer: 2000,
            showConfirmButton: false,
            icon: "error",
            title: "Oops...",
            text: "INGRESE UN ID VALIDO",
        });
        return 
    }

    const result = await user(input.value)
    input.value = ""
    pintarID(result)
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            timer: 2000,
            showConfirmButton: false,
            title: "USUARIO ENCONTRADO",
            icon: "success",
            draggable: true
    });
})
input.addEventListener("keypress", async ()=>{
    if(event.key === "Enter"){  
        const ingreso = portero(input.value)
        if(input.value == ""){
         Swal.fire({
            toast: true,
            position: 'bottom-end',
            timer: 2000,
            showConfirmButton: false,
            icon: "error",
            title: "Oops...",
            text: "DEBE INGRESAR UN ID",
        });
        return
     }
        if(ingreso == false){
            limpiarTabla()
            input.value = ""
            Swal.fire({
                toast: true,
                position: 'bottom-end',
                timer: 2000,
                showConfirmButton: false,
                icon: "error",
                title: "Oops...",
                text: "INGRESE UN ID VALIDO",
            });
            return
        }

        const result = await user(input.value)
        input.value = ""
        pintarID(result)
         Swal.fire({
            toast: true,
            position: 'bottom-end',
            timer: 2000,
            showConfirmButton: false,
            title: "USUARIO ENCONTRADO",
            icon: "success",
            draggable: true
    });
    }

})
