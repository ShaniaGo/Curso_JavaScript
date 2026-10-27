📘 GUÍA COMPLETA DEL DOM EN JAVASCRIPT

🎓 Introducción: ¿Qué es el DOM y por qué es la base de todo?

Imagina que el HTML que escribes es como una receta escrita en papel 🍰: describe cómo debería ser el pastel, pero no puedes interactuar con él. Cuando el navegador lee ese HTML, lo convierte en algo vivo que puedes tocar, mover, cambiar de color y hasta hacer desaparecer. Ese "algo vivo" es el DOM (Document Object Model).

📖 Analogía: El DOM es el árbol genealógico de tu página

Cuando el navegador lee tu HTML, lo transforma en un árbol de nodos:

```
document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── p
        └── div
            ├── button
            └── span
```

· document es el tronco: todo sale de ahí.
· Cada etiqueta HTML es una rama o hoja (un nodo).
· Puedes subir (al padre), bajar (a los hijos) o saltar (a los hermanos) entre nodos.

🔧 Idea técnica

· DOM = representación en memoria del HTML, con forma de árbol.
· Cada elemento HTML es un objeto de JavaScript con propiedades y métodos.
· El DOM permite leer y modificar la página sin recargarla (esto es lo que llamamos interactividad).

🕐 ¿Cuándo importa?

Siempre que tu página necesite reaccionar a algo (un clic, una tecla, un scroll) o cambiar algo dinámicamente (mostrar un mensaje, agregar una fila, filtrar una lista). Sin DOM, tus páginas serían estáticas, como un PDF.

---

🏗️ PARTE 1 — SELECCIÓN DE ELEMENTOS (nivel básico)

📖 Analogía: Ir a la pared correcta antes de pintar

Antes de pintar una pared de tu casa, tienes que ir a esa pared. No puedes pintar "la casa" entera al mismo tiempo. Con el DOM pasa igual: antes de modificar un elemento, debes seleccionarlo y guardarlo en una variable.

🕐 Cuándo se usa

Siempre que quieras leer o modificar algo del HTML. Es el primer paso de cualquier interacción:

· Leer el valor de un input.
· Cambiar el texto de un botón.
· Ocultar un mensaje.
· Agregar una clase a una tarjeta.

🎯 Para qué se usa

Para obtener una referencia (una variable de JavaScript) a uno o varios nodos del DOM y poder manipularlos con sus propiedades y métodos.

---

1.1 🔹 document.getElementById()

Qué hace: Busca un solo elemento por su atributo id. Es el más rápido y directo.

Cuándo usarlo: Cuando sabes que el elemento tiene un id único en la página (los id deben ser únicos por regla del HTML).

```html
<!-- HTML -->
<h1 id="titulo">Hola, mundo</h1>
<button id="btn-saludar">Saludar</button>
```

```javascript
// JavaScript
// Selecciona el h1 por su id
const titulo = document.getElementById('titulo');

// Selecciona el botón por su id
const boton = document.getElementById('btn-saludar');

// Comprobación rápida (útil en desarrollo)
console.log(titulo); // <h1 id="titulo">Hola, mundo</h1>
console.log(boton);  // <button id="btn-saludar">Saludar</button>
```

💡 Devuelve: el elemento si lo encuentra, o null si no existe. Por eso siempre verifica antes de usarlo.

---

1.2 🔹 document.querySelector() y querySelectorAll()

Qué hace:

· querySelector() → devuelve el primer elemento que coincida con un selector CSS.
· querySelectorAll() → devuelve todos los elementos que coincidan, en una NodeList.

Cuándo usarlos: Es la forma más flexible y la que más vas a usar en proyectos reales. Acepta cualquier selector CSS (#id, .clase, div > p, [data-rol], etc.).

```html
<!-- HTML -->
<ul id="lista-tareas">
  <li class="tarea activa">Estudiar JS</li>
  <li class="tarea">Practicar DOM</li>
  <li class="tarea">Hacer ejercicio</li>
</ul>
```

```javascript
// JavaScript
// Primer elemento que coincida con el selector CSS
const primeraTarea = document.querySelector('.tarea');
console.log(primeraTarea.textContent); // "Estudiar JS"

// Todos los elementos con esa clase (NodeList)
const todasLasTareas = document.querySelectorAll('.tarea');
console.log(todasLasTareas.length); // 3

// Selectores más complejos (CSS puro)
const tareaActiva = document.querySelector('li.tarea.activa');
const botonDentroDelHeader = document.querySelector('header > button');
```

💡 Diferencia clave: querySelector devuelve uno, querySelectorAll devuelve una lista. Aunque la lista tenga un solo elemento, sigue siendo lista.

---

1.3 🔹 getElementsByClassName() y getElementsByTagName()

Qué hace: Buscan todos los elementos por su clase o por su etiqueta. Devuelven una HTMLCollection (que es "viva": se actualiza sola si el DOM cambia).

Cuándo usarlos: Son más antiguos, pero aún se ven en código legacy. Hoy se prefiere querySelectorAll.

```javascript
// Selecciona todos los elementos con class="tarea"
const tareas = document.getElementsByClassName('tarea');

// Selecciona todos los <p> del documento
const parrafos = document.getElementsByTagName('p');

// Puedes encadenar búsquedas: todos los <li> dentro de #lista-tareas
const items = document.getElementById('lista-tareas').getElementsByTagName('li');
```

---

📊 Tabla resumen de selección

Método Devuelve Cuándo usarlo
getElementById('id') 1 elemento o null Elemento con id único
querySelector('css') 1 elemento o null Selector CSS flexible
querySelectorAll('css') NodeList (lista) Varios elementos por CSS
getElementsByClassName('x') HTMLCollection (viva) Clase (legacy)
getElementsByTagName('x') HTMLCollection (viva) Etiqueta (legacy)

⚠️ Error típico: usar querySelector cuando necesitas varios elementos. Solo te dará el primero.

---

🎨 PARTE 2 — MODIFICACIÓN DE CONTENIDO Y ATRIBUTOS

📖 Analogía: Pintar y cambiar muebles en la habitación

Ya entraste a la habitación (seleccionaste el elemento). Ahora puedes pintar las paredes (cambiar texto), mover muebles (cambiar atributos), cambiar el color (estilos) o cambiar la puerta (enlaces, imágenes).

🕐 Cuándo se usa

· Contenido: mostrar resultados de una búsqueda, actualizar un contador, cambiar un mensaje de error.
· Atributos: cambiar el src de una imagen, deshabilitar un botón, actualizar un href.
· Clases: resaltar el ítem activo de un menú, marcar un input como inválido.
· Estilos: cambiar color en hover, animaciones, mostrar/ocultar.

🎯 Para qué sirve

Modificar el contenido textual, los atributos HTML, las clases CSS y los estilos en línea de los nodos seleccionados, en tiempo real y sin recargar la página.

---

2.1 🔹 Cambiar el texto de un elemento

textContent (recomendado para texto plano)

```html
<p id="mensaje">Mensaje original</p>
```

```javascript
const mensaje = document.getElementById('mensaje');

// Reemplaza todo el texto
mensaje.textContent = '¡Nuevo mensaje!';

// También puedes leerlo
console.log(mensaje.textContent); // "¡Nuevo mensaje!"
```

Ventaja: es seguro (no interpreta HTML) y rápido.

---

innerHTML (peligroso si el contenido viene del usuario)

```html
<div id="contenedor"></div>
```

```javascript
const contenedor = document.getElementById('contenedor');

// ⚠️ Interpreta el string como HTML
contenedor.innerHTML = '<strong>Hola</strong> mundo';
// Resultado: Hola en negrita + " mundo"
```

⚠️ ¡Cuidado con XSS! Si insertas texto que viene del usuario (un comentario, un nombre), nunca uses innerHTML sin sanitizar. Un usuario malicioso podría inyectar <script>alert('hackeado')</script>. Usa textContent para texto plano.

---

innerText vs textContent

Propiedad Qué hace Cuándo usarla
textContent Texto "crudo", incluye el de elementos ocultos Casi siempre
innerText Texto renderizado, respeta CSS (oculta lo invisible) Cuando necesitas lo que "ve" el usuario

```javascript
// Ejemplo con diferencia visible
const p = document.getElementById('mensaje');
console.log(p.textContent); // "Hola mundo" (aunque esté oculto)
console.log(p.innerText);   // "" (si el elemento tiene display: none)
```

---

2.2 🔹 Modificar atributos

setAttribute, getAttribute, removeAttribute, hasAttribute

```html
<a id="enlace" href="https://ejemplo.com" target="_blank">Ir a ejemplo</a>
<img id="imagen" src="foto.jpg" alt="Foto antigua">
<button id="btn-enviar" disabled>Enviar</button>
```

```javascript
const enlace = document.getElementById('enlace');

// Leer un atributo
console.log(enlace.getAttribute('href')); // "https://ejemplo.com"

// Cambiar un atributo
enlace.setAttribute('href', 'https://nuevo-destino.com');

// Comprobar si existe
console.log(enlace.hasAttribute('target')); // true

// Eliminar un atributo
enlace.removeAttribute('target');

// Botón: quitar el "disabled" para habilitarlo
const boton = document.getElementById('btn-enviar');
boton.removeAttribute('disabled');
```

💡 Atajo para atributos comunes: muchos tienen propiedades directas: enlace.href = '...', imagen.src = '...', input.value = '...', input.disabled = true.

---

2.3 🔹 Manejar clases CSS con classList

Cuándo usarlo: es la forma moderna y limpia de añadir/quitar clases sin tocar className entero.

```html
<button id="btn" class="boton">Guardar</button>
```

```css
/* CSS */
.boton { background: #3498db; color: white; }
.boton.activo { background: #2ecc71; }
.boton.deshabilitado { opacity: 0.5; pointer-events: none; }
```

```javascript
const boton = document.getElementById('btn');

// Añadir una clase
boton.classList.add('activo');

// Quitar una clase
boton.classList.remove('activo');

// Alternar (si está, la quita; si no, la pone)
boton.classList.toggle('activo');

// Comprobar si tiene una clase
console.log(boton.classList.contains('activo')); // true o false

// Reemplazar una clase por otra
boton.classList.replace('activo', 'deshabilitado');
```

⚠️ Error típico: elemento.className = 'activo' borra todas las clases anteriores. Usa classList para no perder las existentes.

---

2.4 🔹 Modificar estilos en línea con style

Cuándo usarlo: para cambios puntuales y dinámicos (un color que depende de un cálculo, mover un elemento, animaciones simples). Para estilos "permanentes", mejor usa clases CSS.

```html
<div id="caja" style="width: 100px; height: 100px; background: red;"></div>
```

```javascript
const caja = document.getElementById('caja');

// Las propiedades CSS en camelCase
caja.style.backgroundColor = 'blue';
caja.style.width = '200px';
caja.style.display = 'none';     // ocultar
caja.style.display = 'block';    // mostrar

// Para propiedades con guion, usa camelCase:
// 'margin-top' → marginTop
caja.style.marginTop = '20px';
```

💡 Buena práctica: para mostrar/ocultar, prefiere classList.toggle('oculto') en vez de manipular style.display. Así mantienes el estilo en CSS.

---

2.5 🔹 Atributos personalizados con dataset

Cuándo usarlo: cuando necesitas guardar datos extra en el HTML sin usar atributos inválidos. Muy útil para identificar filas, productos, IDs de base de datos, etc.

```html
<div id="producto" data-id="42" data-precio="19.99" data-stock="5">
  Camiseta
</div>
```

```javascript
const producto = document.getElementById('producto');

// Leer los data-attributes (se accede con camelCase)
console.log(producto.dataset.id);      // "42"
console.log(producto.dataset.precio);  // "19.99"
console.log(producto.dataset.stock);   // "5"

// Modificar
producto.dataset.stock = '4';

// Añadir uno nuevo
producto.dataset.descuento = '10';
```

🔥 Truco: data-id → dataset.id. Los guiones se convierten en camelCase: data-fecha-nacimiento → dataset.fechaNacimiento.

---

🏗️ PARTE 3 — CREACIÓN Y ELIMINACIÓN DE NODOS

📖 Analogía: Construir y demoler muebles

Hasta ahora has modificado lo que ya existía. Ahora vas a fabricar muebles nuevos (crear elementos) y tirar los viejos (eliminar). Es como tener una fábrica de muebles a tu disposición. 🪑

🕐 Cuándo se usa

· Crear: agregar una fila a una tabla, un comentario a una lista, una tarjeta de producto a un grid, un mensaje de error.
· Eliminar: borrar un ítem de una lista de tareas, quitar una notificación, limpiar un contenedor.
· Clonar: duplicar una plantilla para no repetir código.

🎯 Para qué sirve

Construir nuevos nodos desde cero (o copiarlos), insertarlos en el árbol del DOM en la posición correcta, y eliminar los que ya no se necesitan.

---

3.1 🔹 Crear un elemento con createElement

```javascript
// Paso 1: crear el nodo (todavía no está en el DOM)
const nuevoParrafo = document.createElement('p');

// Paso 2: darle contenido
nuevoParrafo.textContent = 'Soy un párrafo nuevo';

// Paso 3: darle clases / atributos
nuevoParrafo.classList.add('mensaje');
nuevoParrafo.id = 'mensaje-nuevo';
```

⚠️ Importante: createElement no lo añade a la página. Solo lo crea en memoria. Falta insertarlo (siguiente paso).

---

3.2 🔹 Insertar nodos: appendChild, append, prepend, insertBefore

```html
<div id="contenedor">
  <p>Párrafo original</p>
</div>
```

```javascript
const contenedor = document.getElementById('contenedor');

// 1. appendChild: añade como ÚLTIMO hijo (solo un nodo)
const p1 = document.createElement('p');
p1.textContent = 'Al final (appendChild)';
contenedor.appendChild(p1);

// 2. append: añade uno o varios al FINAL (acepta strings también)
const p2 = document.createElement('p');
p2.textContent = 'Al final (append)';
contenedor.append(p2, 'Texto suelto');

// 3. prepend: añade al PRINCIPIO
const p3 = document.createElement('p');
p3.textContent = 'Al principio';
contenedor.prepend(p3);

// 4. insertBefore: inserta ANTES de un nodo de referencia
const referencia = contenedor.firstElementChild;
const p4 = document.createElement('p');
p4.textContent = 'Antes del primero';
contenedor.insertBefore(p4, referencia);
```

📊 Diferencia entre appendChild y append

 appendChild append
Acepta strings ❌ ✅
Acepta varios nodos ❌ ✅
Compatibilidad Total Moderna (ES6+)

💡 Regla práctica: usa append si necesitas flexibilidad; appendChild si trabajas con código legacy.

---

3.3 🔹 Insertar HTML con insertAdjacentHTML

Cuándo usarlo: cuando tienes un string HTML y quieres insertarlo en una posición concreta sin destruir el contenido existente (a diferencia de innerHTML).

```html
<div id="lista">
  <p>Item original</p>
</div>
```

```javascript
const lista = document.getElementById('lista');

// Posiciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
lista.insertAdjacentHTML('beforeend', '<p>Item nuevo al final</p>');
lista.insertAdjacentHTML('afterbegin', '<p>Item nuevo al principio</p>');
```

⚠️ Igual que con innerHTML, no uses insertAdjacentHTML con datos del usuario sin sanitizar.

---

3.4 🔹 Eliminar nodos: remove() y removeChild()

```html
<ul id="tareas">
  <li id="tarea-1">Estudiar</li>
  <li id="tarea-2">Practicar</li>
</ul>
```

```javascript
// Opción moderna: el propio elemento se elimina
const tarea1 = document.getElementById('tarea-1');
tarea1.remove();

// Opción clásica: el padre elimina al hijo
const lista = document.getElementById('tareas');
const tarea2 = document.getElementById('tarea-2');
lista.removeChild(tarea2);

// Vaciar un contenedor entero (rápido)
lista.innerHTML = '';
// o bien:
// while (lista.firstChild) lista.removeChild(lista.firstChild);
```

💡 Buena práctica: elemento.remove() es más limpio. removeChild es útil cuando ya tienes la referencia al padre.

---

3.5 🔹 Clonar nodos con cloneNode

Cuándo usarlo: cuando tienes una plantilla (un <template> o un nodo oculto) y quieres crear múltiples copias dinámicamente.

```html
<div id="contenedor"></div>

<template id="plantilla-tarjeta">
  <div class="tarjeta">
    <h3 class="titulo"></h3>
    <p class="descripcion"></p>
  </div>
</template>
```

```javascript
const contenedor = document.getElementById('contenedor');
const plantilla = document.getElementById('plantilla-tarjeta');

// true = clona también los hijos
const clon = plantilla.content.cloneNode(true);

// Rellenar los datos en el clon
clon.querySelector('.titulo').textContent = 'Producto 1';
clon.querySelector('.descripcion').textContent = 'Descripción del producto';

// Insertar el clon en el DOM
contenedor.appendChild(clon);
```

💡 cloneNode(true) clona todo el subárbol (hijos incluidos). cloneNode(false) solo el nodo raíz, sin hijos.

---

3.6 🔹 Optimización: DocumentFragment

Cuándo usarlo: cuando vas a insertar muchos nodos de golpe. Cada appendChild al DOM provoca un reflow (recálculo de layout). Con un DocumentFragment haces una sola inserción.

```javascript
const contenedor = document.getElementById('contenedor');
const fragmento = document.createDocumentFragment();

// Creamos 1000 elementos y los añadimos al fragmento (en memoria)
for (let i = 1; i <= 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Elemento ${i}`;
  fragmento.appendChild(li);
}

// Una sola inserción al DOM real
contenedor.appendChild(fragmento);
```

⚡ Por qué importa: insertar 1000 nodos uno a uno = 1000 reflows. Insertarlos con un fragment = 1 reflow. Diferencia brutal en rendimiento.

---

🖱️ PARTE 4 — MANEJO DE EVENTOS

📖 Analogía: El timbre de la casa

Un evento es como el timbre de tu casa 🛎️: alguien lo pulsa (clic), y tú decides qué hacer (abrir la puerta). Pero necesitas estar escuchando para enterarte. addEventListener es como instalar el timbre y decir: "cuando suene, haz esto".

🕐 Cuándo se usa

Siempre que tu página deba reaccionar a algo:

· Clic en un botón.
· Envío de un formulario.
· Escribir en un input.
· Presionar una tecla.
· Cambiar el tamaño de la ventana.
· Hacer scroll.

🎯 Para qué sirve

Registrar funciones que se ejecutan cuando ocurre un evento específico, permitiendo que la página sea interactiva.

---

4.1 🔹 addEventListener (la forma moderna y recomendada)

```html
<button id="btn-saludar">Saludar</button>
```

```javascript
const boton = document.getElementById('btn-saludar');

// Sintaxis: elemento.addEventListener('evento', función)
boton.addEventListener('click', () => {
  alert('¡Hola! 👋');
});
```

Ventajas frente a onclick="..." en HTML:

· Separa HTML de JS (más limpio).
· Puedes añadir varios listeners al mismo evento.
· Permite remover el listener si es necesario.

---

4.2 🔹 El objeto event (la información del evento)

Cuando ocurre un evento, JavaScript te entrega un objeto con info: qué elemento se pulsó, qué tecla, coordenadas, etc.

```javascript
const boton = document.getElementById('btn-saludar');

boton.addEventListener('click', (event) => {
  // event.target = el elemento que disparó el evento
  console.log(event.target);       // <button id="btn-saludar">...
  console.log(event.type);         // "click"
  console.log(event.clientX);      // coordenada X del cursor
  console.log(event.clientY);      // coordenada Y del cursor
});
```

---

4.3 🔹 event.target vs event.currentTarget

Propiedad Qué indica
event.target El elemento exacto donde ocurrió el clic (puede ser un hijo).
event.currentTarget El elemento donde está registrado el listener.

```html
<div id="padre">
  <button id="hijo">Botón</button>
</div>
```

```javascript
const padre = document.getElementById('padre');

padre.addEventListener('click', (event) => {
  console.log(event.target);        // <button id="hijo"> (el que se pulsó)
  console.log(event.currentTarget); // <div id="padre"> (el que escucha)
});
```

---

4.4 🔹 Eventos más comunes

```javascript
// CLICK: clic en cualquier elemento
boton.addEventListener('click', () => { /* ... */ });

// INPUT: cada vez que el usuario escribe (en tiempo real)
input.addEventListener('input', (e) => {
  console.log('Escribiendo:', e.target.value);
});

// CHANGE: cuando el valor cambia y pierde foco
select.addEventListener('change', (e) => {
  console.log('Seleccionaste:', e.target.value);
});

// SUBMIT: envío de formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // ⚠️ evita que la página se recargue
  console.log('Formulario enviado');
});

// KEYDOWN: tecla presionada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') console.log('Enter pulsado');
});

// MOUSEOVER / MOUSEOUT: hover
tarjeta.addEventListener('mouseover', () => { /* ... */ });
tarjeta.addEventListener('mouseout', () => { /* ... */ });

// SCROLL: al hacer scroll
window.addEventListener('scroll', () => { /* ... */ });
```

---

4.5 🔹 preventDefault y stopPropagation

preventDefault()

Qué hace: cancela el comportamiento por defect