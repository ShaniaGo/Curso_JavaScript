/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
//console.log(document)
const miTitulo = document.getElementById("title")
console.log(miTitulo)
miTitulo.textContent = "ESTE ES MI NUEVO TITULO"

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const image = document.getElementById("myImage")
const url = image.getAttribute("src")
image.setAttribute("src", "https://cdn.shopify.com/s/files/1/0954/7182/9277/files/San_Bernardo.jpg?v=1782412330")

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const caja = document.getElementById("box")
caja.classList.add("resaltado")
console.log(caja.classList.contains("resaltado"))

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const parrafo = document.getElementById("paragraph")
parrafo.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const button = document.querySelector("button")
const list = document.getElementById("list")

function addElement(){
    const newElement = document.createElement("li")
    newElement.textContent = "NUEVO ELEMENTO"

    list.appendChild(newElement)
}

button.addEventListener("click", addElement)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const deleteBoton = document.getElementById("boton")
const deleteParrafo = document.getElementById("deleteParagraph")

function borrarParrafo(){
    deleteParrafo.remove()

}

deleteBoton.addEventListener("click", borrarParrafo)

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const contenido = document.getElementById("content")
contenido.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const greetBtn = document.getElementById("greetBtn")
function greet(){
    alert("HOLIIISSSS!!!!")
}
greetBtn.addEventListener("click", greet)

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
const texto = document.getElementById("textInput")
const resultado = document.getElementById("result")

texto.addEventListener("input", () => {
    resultado.textContent = texto.value
})


// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
const changeColor = document.getElementById("btn-color")

changeColor.addEventListener("click", () =>{
    const hexadecimal = `#`+Math.random().toString(16).slice(2, 8)
    console.log(hexadecimal)
    document.body.style.backgroundColor = hexadecimal
})