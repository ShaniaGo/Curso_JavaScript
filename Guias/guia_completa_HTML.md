# 📘 GUÍA COMPLETA DE HTML — De Cero a Intermedio

## 🎓 Introducción: ¿Qué es HTML y por qué es el esqueleto de la web?

Imagina que quieres construir una casa 🏠. Antes de pintar las paredes o colgar cuadros, necesitas **los cimientos, las columnas y el techo**. Sin esa estructura, todo lo demás se cae. En el mundo de la web, **HTML es esa estructura**: los cimientos, las columnas y las paredes de tu página. El CSS es la pintura y la decoración, y JavaScript es la electricidad y la plomería.

### 📖 Analogía: HTML es el esqueleto del cuerpo humano

Tu cuerpo tiene huesos 🦴 que le dan forma y sostienen todo lo demás. HTML funciona igual:
- Los **huesos** (etiquetas) definen la estructura: dónde va la cabeza, los brazos, las piernas.
- La **piel y la ropa** (CSS) dan color y estilo.
- Los **músculos y nervios** (JavaScript) permiten moverse e interactuar.

### 🔧 Idea técnica

**HTML** (HyperText Markup Language) es un **lenguaje de marcado**, no de programación. No tiene lógica, no hace cálculos, no toma decisiones. Solo **describe la estructura y el contenido** de una página usando **etiquetas** (tags).

- Cada etiqueta va entre `<>`.
- Muchas tienen **apertura y cierre**: `<p>...</p>`.
- Algunas son **autocontenidas**: `<img>`, `<br>`, `<input>`.
- El navegador **lee el HTML** y lo convierte en el **DOM** (el árbol que ya conoces) para mostrarlo en pantalla.

### 🧃 ¿Por qué es importante escribirlo bien?

Porque un HTML **semántico** (con las etiquetas correctas) ayuda a:
- **Los navegadores** a entender tu página.
- **Los motores de búsqueda** (Google) a indexarte mejor (SEO).
- **Las personas con discapacidad visual** (lectores de pantalla) a navegar.
- **Otros programadores** a entender tu código en el futuro.

---

## 🏗️ PARTE 1 — Estructura básica del documento

### 🕐 En qué se usa

En **cada y todos los archivos HTML** del mundo. Es el punto de partida de cualquier página web.

### 🎯 Para qué se usa

Declarar el tipo de documento, definir la estructura raíz, y separar dos grandes bloques:
- **`<head>`** → información sobre la página (no visible).
- **`<body>`** → el contenido visible para el usuario.

### 📝 Ejemplo práctico

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola, mundo</h1>
    <p>Este es mi primer párrafo.</p>
  </body>
</html>
```

**Explicación de cada etiqueta:**

| Etiqueta | Propósito |
|---|---|
| `<!DOCTYPE html>` | Le dice al navegador "esto es HTML5". |
| `<html lang="es">` | Es la raíz. `lang="es"` indica que el idioma es español. |
| `<head>` | Contiene metadatos (información invisible). |
| `<meta charset="UTF-8">` | Permite tildes, ñ, emojis y caracteres especiales. |
| `<meta name="viewport">` | Hace que se vea bien en celulares (diseño responsive). |
| `<title>` | El texto que sale en la pestaña del navegador. |
| `<body>` | Todo lo visible: textos, imágenes, botones, etc. |

### 📖 Analogía: El sobre y la carta

Imagina que escribes una carta 💌:
- El **`<head>`** es el **sobre**: dice de dónde viene, para quién es, cuántas estampillas lleva. Nadie lo lee al abrirlo, pero es necesario.
- El **`<body>`** es la **carta**: el contenido que la persona sí lee.

---

## 🏗️ PARTE 2 — Etiquetas de texto y títulos

### 🕐 En qué se usa

En **cualquier página con contenido escrito**: blogs, periódicos digitales, documentación, landing pages, artículos. **Todo el contenido textual** va aquí.

### 🎯 Para qué se usa

Dar **estructura jerárquica** al texto (títulos, subtítulos) y **significado semántico** a las partes (énfasis, importancia, citas).

### 📝 Ejemplo práctico

```html
<h1>Título principal (solo uno por página)</h1>
<h2>Subtítulo de una sección</h2>
<h3>Sub-subtítulo dentro de esa sección</h3>
<h4>, <h5>, <h6> para niveles más profundos</h4>

<p>
  Un párrafo normal con <strong>texto importante</strong>,
  <em>texto con énfasis</em>, y <mark>texto resaltado</mark>.
</p>

<blockquote>
  "La simplicidad es la máxima sofisticación." — Leonardo da Vinci
</blockquote>

<ul>
  <li>Elemento de lista sin orden</li>
  <li>Otro elemento</li>
</ul>

<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
</ol>
```

**Explicación semántica:**

| Etiqueta | Propósito | Cuándo usarla |
|---|---|---|
| `<h1>` a `<h6>` | Títulos jerárquicos (h1 = más importante) | Uno por página (h1), el resto según la estructura |
| `<p>` | Párrafo | Texto corrido, ideas completas |
| `<strong>` | **Importancia** fuerte (negrita visual) | Palabras clave, advertencias |
| `<em>` | **Énfasis** (cursiva visual) | Cambio de tono, palabras a destacar |
| `<mark>` | Texto **resaltado** (amarillo) | Búsqueda, resultados, cosas a recordar |
| `<blockquote>` | **Cita** de otra fuente | Frases célebres, extractos de libros |
| `<ul>` | Lista **sin orden** (viñetas) | Cosas sin jerarquía (ingredientes, temas) |
| `<ol>` | Lista **ordenada** (números) | Pasos, rankings, procedimientos |
| `<li>` | Ítem de lista | Dentro de `<ul>` o `<ol>` |

### 📖 Analogía: La biblioteca

- `<h1>` es el **cartel grande de la entrada** de la biblioteca.
- `<h2>` son los **carteles de cada sección** ("Novelas", "Ciencia").
- `<h3>` son los **carteles de cada estantería**.
- `<p>` son los **libros**.
- `<ul>` es una **caja** de libros sin orden.
- `<ol>` es una **pila de libros numerada**.

> 💡 **Regla de oro:** no uses las etiquetas por su apariencia visual, sino por su **significado**. El CSS se encarga del look.

---

## 🏗️ PART 3 — Imágenes y enlaces

### 🕐 En qué se usa

- **Imágenes:** logos, fotos de productos, ilustraciones, avatares, banners.
- **Enlaces:** menús de navegación, "leer más", llamadas a la acción, referencias.

### 🎯 Para qué se usa

- **`<img>`:** Insertar una imagen en la página. El atributo `alt` es crucial para accesibilidad y SEO.
- **`<a>`:** Crear un **hipervínculo** que conecta a otra página, sección o archivo.

### 📝 Ejemplo práctico

```html
<!-- Enlace a una página externa -->
<a href="https://www.ejemplo.com" target="_blank" rel="noopener">
  Visitar ejemplo.com
</a>

<!-- Enlace a otra sección de la misma página -->
<a href="#contacto">Ir a la sección de contacto</a>

<!-- Enlace que abre el cliente de correo -->
<a href="mailto:hola@ejemplo.com">Envíame un correo</a>

<!-- Imagen con texto alternativo -->
<img 
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg" 
  alt="Un gato mirando a la cámara" 
  width="300"
>

<!-- Imagen que también es un enlace -->
<a href="https://es.wikipedia.org/wiki/Gato">
  <img src="gato.jpg" alt="Ir al artículo de gatos">
</a>
```

**Explicación de atributos:**

| Atributo | Propósito |
|---|---|
| `href` | Dirección a la que apunta el enlace |
| `target="_blank"` | Abre en pestaña nueva |
| `rel="noopener"` | Seguridad al abrir pestañas nuevas |
| `src` | Ruta de la imagen |
| `alt` | Texto alternativo (por si falla la imagen, para lectores de pantalla) |
| `width` / `height` | Dimensiones (mejor con CSS) |

### 📖 Analogía: Los puentes y los cuadros

- Un **enlace** `<a>` es un **puente** 🌉 que te lleva de tu casa a otra (otra página, otra sección, otro archivo).
- Una **imagen** `<img>` es un **cuadro** 🖼️ colgado en la pared. El `alt` es la **placa descriptiva** debajo, por si el cuadro desaparece o alguien no puede verlo.

> ⚠️ **Importante:** la etiqueta `<img>` es **autocontenida**, no tiene cierre (`</img>` no existe).

---

## 🏗️ PART 4 — Tablas

### 🕐 En qué se usa

En **datos tabulares reales**: horarios, precios, comparativas, calendarios, estadísticas. (No para maquetar diseño; para eso está CSS).

### 🎯 Para qué se usa

Mostrar **información organizada en filas y columnas**, con semántica clara para accesibilidad.

### 📝 Ejemplo práctico

```html
<table>
  <caption>Horario de clases</caption>
  <thead>
    <tr>
      <th>Hora</th>
      <th>Lunes</th>
      <th>Martes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>08:00 - 09:00</td>
      <td>Matemáticas</td>
      <td>Historia</td>
    </tr>
    <tr>
      <td>09:00 - 10:00</td>
      <td>Español</td>
      <td>Ciencias</td>
    </tr>
  </tbody>
</table>
```

**Explicación de cada etiqueta:**

| Etiqueta | Propósito |
|---|---|
| `<table>` | Contenedor de la tabla |
| `<caption>` | Título de la tabla (opcional pero recomendado) |
| `<thead>` | Agrupa los encabezados |
| `<tbody>` | Agrupa las filas de datos |
| `<tr>` | Una fila (table row) |
| `<th>` | Celda de encabezado (bold + centrada) |
| `<td>` | Celda de dato común |

### 📖 Analogía: La hoja de cálculo

Piensa en una hoja de Excel 📊:
- La **tabla** es la hoja entera.
- Cada **fila** es un `<tr>`.
- Cada **celda** es un `<td>`.
- Los **encabezados** son los `<th>` (la primera fila con "Nombre", "Edad", etc.).

> 💡 **Regla de oro:** si los datos podrían estar en una hoja de cálculo, usa `<table>`. Si son para maquetar, usa CSS Grid o Flexbox.

---

## 🏗️ PART 5 — Formularios

### 🕐 En qué se usa

En **cualquier sitio donde el usuario envíe datos**: login, registro, contacto, búsqueda, compras, comentarios, encuestas.

### 🎯 Para qué se usa

Recoger información del usuario y enviarla a un servidor (o procesarla con JavaScript).

### 📝 Ejemplo práctico

```html
<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" minlength="8" required>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" min="1" max="120">

  <label for="pais">País:</label>
  <select id="pais" name="pais">
    <option value="">-- Selecciona --</option>
    <option value="ve">Venezuela</option>
    <option value="ar">Argentina</option>
    <option value="mx">México</option>
  </select>

  <label>
    <input type="checkbox" name="acepto" required>
    Acepto los términos
  </label>

  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4"></textarea>

  <button type="submit">Enviar</button>
</form>
```

**Explicación de cada etiqueta/atributo:**

| Etiqueta / Atributo | Propósito |
|---|---|
| `<form>` | Contenedor del formulario |
| `action` | URL a la que se envían los datos |
| `method` | `GET` (en URL) o `POST` (en el cuerpo) |
| `<label>` | Etiqueta asociada a un input (mejora accesibilidad) |
| `for` | Vincula el label con el `id` del input |
| `<input>` | Campo de entrada (muchos tipos: text, email, password, number...) |
| `type` | Tipo de dato que acepta |
| `required` | Campo obligatorio |
| `minlength` / `maxlength` | Longitud mínima/máxima |
| `min` / `max` | Valores mínimo/máximo para números |
| `<select>` + `<option>` | Menú desplegable |
| `<textarea>` | Área de texto multi-línea |
| `<button type="submit">` | Botón que envía el formulario |
| `<button type="reset">` | Botón que limpia el formulario |

### 📖 Analogía: La ventanilla del banco

Un formulario es como la **ventanilla de un banco** 🏦:
- El **formulario** es la ventanilla completa.
- Cada **input** es un **papelito** donde escribes un dato.
- El **botón de enviar** es cuando le entregas los papeles al cajero.
- El **cajero** (el servidor) procesa la información.
- Los `required` son las reglas: "sin este papel, no te atiendo".

> 💡 **Accesibilidad:** **siempre** asocia un `<label>` con cada `<input>` usando `for` e `id`. No solo es buena práctica: es obligatorio para lectores de pantalla.

---

## 🏗️ PARTE 6 — Etiquetas semánticas de estructura (nivel intermedio)

### 🕐 En qué se usa

En **cualquier página moderna**. Reemplazan a los antiguos `<div>` genéricos para dar **significado** a las secciones.

### 🎯 Para qué se usa

Estructurar visual y semánticamente la página. Ayudan a:
- **SEO:** Google entiende mejor tu contenido.
- **Accesibilidad:** los lectores de pantalla navegan por secciones.
- **Mantenibilidad:** otros devs entienden tu código al instante.

### 📝 Ejemplo práctico

```html
<body>
  <header>
    <h1>Mi Blog</h1>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#articulos">Artículos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section id="articulos">
      <h2>Últimos artículos</h2>
      <article>
        <h3>Cómo aprender HTML</h3>
        <p>HTML es la base de la web...</p>
      </article>
      <article>
        <h3>CSS para principiantes</h3>
        <p>El estilo hace la diferencia...</p>
      </article>
    </section>

    <aside>
      <h3>Sobre el autor</h3>
      <p>Soy Shania, desarrolladora frontend.</p>
    </aside>
  </main>

  <footer>
    <p>© 2024 Mi Blog. Todos los derechos reservados.</p>
  </footer>
</body>
```

**Explicación de cada etiqueta:**

| Etiqueta | Propósito |
|---|---|
| `<header>` | Cabecera de la página o de una sección |
| `<nav>` | Menú de navegación |
| `<main>` | Contenido principal (solo uno por página) |
| `<section>` | Sección temática (con título propio) |
| `<article>` | Contenido independiente (un post, una noticia) |
| `<aside>` | Contenido secundario (barra lateral, publicidad) |
| `<footer>` | Pie de página o de sección |

### 📖 Analogía: El periódico

Piensa en un **periódico** 📰:
- **`<header>`** es la portada con el nombre del diario.
- **`<nav>`** son los índices ("Deportes", "Política").
- **`<main>`** son las páginas centrales con las noticias.
- **`<article>`** es cada noticia individual.
- **`<aside>`** son los anuncios laterales.
- **`<footer>`** es el pie con la editorial y la fecha.

---

## 🎓 EJEMPLO PRÁCTICO COMPLETO: Página de perfil personal

Vamos a juntar **todo lo aprendido** en una página real:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shania — Desarrolladora Frontend</title>
</head>
<body>

  <!-- CABECERA -->
  <header>
    <h1>Shania Gómez</h1>
    <nav>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <!-- CONTENIDO PRINCIPAL -->
  <main>

    <!-- Sección: Sobre mí -->
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <img 
        src="https://via.placeholder.com/200" 
        alt="Foto de perfil de Shania"
      >
      <p>
        Soy <strong>desarrolladora frontend</strong> apasionada por crear
        interfaces limpias, accesibles y con <em>atención al detalle</em>.
        Actualmente aprendiendo <mark>JavaScript</mark> y el DOM.
      </p>

      <h3>Habilidades</h3>
      <ul>
        <li>HTML semántico</li>
        <li>CSS moderno</li>
        <li>JavaScript (en progreso)</li>
      </ul>
    </section>

    <!-- Sección: Proyectos -->
    <section id="proyectos">
      <h2>Proyectos</h2>
      <article>
        <h3>Calculadora con JavaScript</h3>
        <p>Una calculadora funcional que hiciste en tu curso.</p>
      </article>
      <article>
        <h3>Color Flipper</h3>
        <p>Cambiador de colores aleatorio usando <code>Math.random()</code>.</p>
      </article>
    </section>

    <!-- Sección: Contacto -->
    <section id="contacto">
      <h2>Contáctame</h2>
      <form action="/enviar" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Correo:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>

  </main>

  <!-- PIE DE PÁGINA -->
  <footer>
    <p>© 2024 Shania Gómez. Todos los derechos reservados.</p>
    <p>
      <a href="mailto:hola@shania.dev">Envíame un correo</a>
    </p>
  </footer>

</body>
</html>
```

**Cómo interpreta esto el navegador:**

1. Detecta que es HTML5 por el `<!DOCTYPE html>`.
2. Lee el `<head>`: crea la pestaña, configura el idioma, prepara el responsive.
3. Procesa el `<body>`:
   - Muestra la cabecera con el nombre y un menú de anclas.
   - Pinta la imagen de perfil y el texto descriptivo.
   - Crea una lista con viñetas de habilidades.
   - Renderiza los artículos del blog.
   - Genera el formulario de contacto con validaciones nativas.
   - Añade el footer.
4. Aplica el CSS (si lo hubiera) para dar color y estilo.
5. Expone todo el árbol como **DOM** para que JavaScript pueda manipularlo.

---

## 🧃 RESUMEN: Los conceptos clave

| Bloque | Etiquetas principales | Para qué |
|---|---|---|
| **Estructura** | `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` | Esqueleto de la página |
| **Texto** | `<h1>`-`<h6>`, `<p>`, `<strong>`, `<em>`, `<ul>`, `<ol>` | Contenido escrito con jerarquía |
| **Multimedia** | `<img>`, `<a>`, `<video>`, `<audio>` | Enlazar e insertar recursos |
| **Tablas** | `<table>`, `<tr>`, `<td>`, `<th>` | Datos tabulares |
| **Formularios** | `<form>`, `<input>`, `<label>`, `<textarea>`, `<select>` | Recoger datos del usuario |
| **Semántica** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` | Estructura significativa |

---

## 🎈 CONSEJOS DE PROFESOR

1. **Escribe HTML semántico, no solo "que se vea bien"**. La semántica ayuda a todos.
2. **Siempre usa `alt` en las imágenes**. Es obligatorio por accesibilidad.
3. **Asocia cada `<input>` con un `<label>`**. No es opcional.
4. **No uses `<br>` para separar párrafos**. Para eso está `<p>`.
5. **No uses `<table>` para maquetar**. Usa CSS Grid o Flexbox.
6. **Anida correctamente**: si abres `<div>`, ciérralo antes de cerrar su padre.
7. **Usa `<main>` solo una vez por página**. Es el contenido principal.
8. **Valida tu HTML** con [validator.w3.org](https://validator.w3.org) para detectar errores.
9. **No memorices todo**: aprende las etiquetas principales y consulta la documentación (MDN es tu mejor amigo).
10. **Empieza simple**: un `index.html` con estructura básica, luego ve añadiendo.

---

## 📚 GLOSARIO

| Término | Significado |
|---|---|
| **Etiqueta (tag)** | Cada instrucción entre `<>` |
| **Atributo** | Información extra dentro de una etiqueta (`href`, `src`...) |
| **Semántica** | Uso correcto de etiquetas según su significado |
| **DOM** | Representación en memoria del HTML (el árbol) |
| **SEO** | Optimización para motores de búsqueda |
| **Accesibilidad (a11y)** | Diseño para que todos puedan usar la web |
| **Autocontenida** | Etiqueta sin cierre (`<img>`, `<br>`, `<input>`) |
| **Responsive** | Que se adapta a distintos tamaños de pantalla |
| **Doctype** | Declaración del tipo de documento (HTML5) |

---

¡Espero que esta guía te sirva de referencia completa para construir **cualquier página HTML**! 📚✨ Recuerda: HTML es la **base de todo** lo que ves en la web. Domínalo bien y el resto (CSS, JS) será mucho más fácil. 

Si quieres, el siguiente paso natural sería una guía de **CSS** o de **accesibilidad web**, o bien **practicar** con ejercicios progresivos. 🚀😊