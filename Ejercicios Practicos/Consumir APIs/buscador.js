const button = document.getElementById("button")
const input = document.getElementById("exampleFormControlInput")
//const msgError = document.getElementById(msgError)
 

//CONEXION CON EL JSON PLACEHOLDER
const user = async function buscador(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!response.ok){
        throw Error(`USUARIO NO ENCONTRADO`)
    }
        const datos = await response.json()
        console.log(datos) 
        return datos
    } catch (error) {
        console.log(`${error}`)
       // msgError.textContent = "USUARIO NO ENCONTRADO"
    } 
}
//buscador(3)

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

//FUNCIONALIDAD DE MI BOTON Y ENTER
button.addEventListener("click", async () => {
    const result = await user(input.value)
    pintarID(result)
})
input.addEventListener("keypress", async ()=>{
    if(event.key === "Enter"){  
        const result = await user(input.value)
        pintarID(result)
    }
})

