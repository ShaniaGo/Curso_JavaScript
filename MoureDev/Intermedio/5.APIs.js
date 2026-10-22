/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
console.log(`------ EJERCICIO NRO 1 ------`)
fetch("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => {
    return respuesta.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log ("Error", error)
})

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
console.log(`------ EJERCICIO NRO 2 ------`)
fetch("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => {
    if(!respuesta.ok){
        throw Error(`Respuesta del HTTP: ${respuesta.status}`)
    }
    return respuesta.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log ("Error", error)
})

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
console.log(`------ EJERCICIO NRO 3 ------`)
async function getAPIs() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!response.ok){
        throw Error(`Respuesta del HTTP: ${response.status}`)
    }
        const datos = await response.json()
        console.log(datos) 
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

getAPIs()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
console.log(`------ EJERCICIO NRO 4 ------`)
async function PostAPIs() {
    try {

        const nuevoPost = {
            userId: 300,
            title: `Mi Primer POST. By Shania Gomez`,
            body: `Este es mi primer post hacia una APIs y es muy divertido. Solo tengo que practicar mucho mas`
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoPost)
        })

        if(!response.ok){
            throw Error(`Respuesta del HTTP: ${response.status}`)
        }

        const datos = await response.json()
        console.log(datos) 
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

PostAPIs()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
console.log(`------ EJERCICIO NRO 5 ------`)
async function PUTAPIs(id) {
    try {
        const postModificado = {
            userId: 200,
            title: `Mi Primer POST modificado con PUT. By Shania Gomez`,
            body: `Este es mi primer post modificado hacia una APIs y es muy divertido. Solo tengo que practicar mucho mas`
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postModificado)
        })

        if(!response.ok){
            throw Error(`Respuesta del HTTP: ${response.status}`)
        }

        const datos = await response.json()
        console.log(datos) 
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

PUTAPIs(100)

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
console.log(`------ EJERCICIO NRO 6 ------`)
async function PathAPIs(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: `Mmmmm ya se me acabaron las ideas para escribir`, body: `Sigo sin saber que escribir que alguien me ayude. Ahhh ya se, NO MENTIRA NO SE`})
        })

        if(!response.ok){
            throw Error(`Respuesta del HTTP: ${response.status}`)
        }
        
        const datos = await response.json()
        console.log(datos) 
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

PathAPIs(100)

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
console.log(`------ EJERCICIO NRO 7 ------`)
async function deleteAPIs(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!response.ok){
            throw Error(`Respuesta del HTTP: ${response.status}`)
        }
        
        console.log(`Datos eliminados exitosamente`)
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

deleteAPIs(100)

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
console.log(`------ EJERCICIO NRO 8 ------`)

async function getAPIsWeather(ciudad) {
    const apiKey = "ce5a63ff7305e7af1c21b0f4ab666505"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw Error(`Respuesta del HTTP: ${response.status}`)
        }
        const datos = await response.json()
        console.log(datos) 
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

getAPIsWeather(`Venezuela`)


// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
console.log(`------ EJERCICIO NRO 9 ------`)

async function APIsPokePendeja(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    try {
        console.log(`---------------- POKEMON -------------------`)
        const response = await fetch(url)
        if(!response.ok){
            throw Error(`Respuesta del HTTP: ${response.status}`)
        }
        const datos = await response.json()
        console.log(datos.species.url) 
        
        console.log(`---------------- ESPECIE----------------`)
        const response1 = await fetch(datos.species.url)
        if(!response1.ok){
            throw Error(`Respuesta del HTTP: ${response1.status}`)
        }
        const datos1 = await response1.json()
        console.log(datos1) 
        
        console.log(`--------------------- CADENA EVOLUTIVA -------------------`)
          const response2 = await fetch(datos1.evolution_chain.url)
        if(!response2.ok){
            throw Error(`Respuesta del HTTP: ${response2.status}`)
        }
        const datos2 = await response2.json()
        console.log(datos2.chain) 
        console.log(datos2.chain.evolves_to) 
        
        
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
}

APIsPokePendeja("pikachu")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API