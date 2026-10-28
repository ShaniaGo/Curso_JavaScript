# 🎨 GUÍA COMPLETA DE CSS — De Fundamentos a Maquetación Moderna

## 🎓 Introducción: ¿Qué es CSS y por qué es el "estilista" de la web?

Imagina que tienes una **casa recién construida** 🏠. Tiene paredes, puertas, ventanas y techo (eso es el HTML, la estructura). Pero está **vacía, sin pintura, sin muebles, sin luz**. Se ve fría y aburrida. 

Ahora llega un **decorador de interiores** 🎨 que:
- Pinta las paredes de colores.
- Coloca los muebles en su sitio.
- Ajusta la luz y los ambientes.
- Hace que la casa se sienta **cálida y acogedora**.

Ese decorador es **CSS** (Cascading Style Sheets). Se encarga de que tu HTML se vea **bonito, ordenado y adaptado a cualquier pantalla**.

### 🔧 Idea técnica

CSS es un **lenguaje de estilos** que describe **cómo se deben ver los elementos HTML**. No programa lógica (eso es JS), ni estructura (eso es HTML). Solo **presentación**.

- Se escribe en archivos `.css` o dentro de `<style>` en el HTML.
- Usa **reglas** compuestas por **selectores** (a quién afecta) y **declaraciones** (qué cambia).
- Es **en cascada**: varias reglas pueden aplicar al mismo elemento y se resuelven por prioridad.
- Es **heredable**: algunos estilos pasan de padres a hijos.

### 🧃 Estructura básica de una regla CSS

```css
selector {
  propiedad: valor;
  otra-propiedad: valor;
}
```

### 📝 Ejemplo mínimo

```css
/* Esto dice: "A todos los párrafos, ponles texto azul y tamaño 16px" */
p {
  color: blue;
  font-size: 16px;
}
```

**Cómo lo interpreta el navegador:**
1. Lee el HTML y construye el DOM.
2. Lee el CSS y **busca** todos los `<p>` en el DOM.
3. Aplica las reglas en orden de prioridad.
4. Renderiza todo junto en pantalla.

---

## 🏗️ PARTE 1 — Formas de aplicar CSS

### 🕐 En qué se usa

Depende del proyecto y del contexto: prototipos rápidos, proyectos grandes, o estilos puntuales.

### 🎯 Para qué se usa

Existen **tres formas** de conectar el CSS al HTML, cada una con su propósito:

### 📝 Ejemplo práctico

```html
<!-- 1. CSS en línea (inline): dentro del atributo style del elemento -->
<p style="color: red; font-size: 18px;">
  Este texto tiene estilo aplicado directamente.
</p>

<!-- 2. CSS interno: dentro de <style> en el <head> -->
<head>
  <style>
    h1 {
      color: darkblue;
    }
  </style>
</head>

<!-- 3. CSS externo: en un archivo .css separado (RECOMENDADO) -->
<head>
  <link rel="stylesheet" href="estilos.css">
</head>
```

**Explicación:**

| Forma | Ventaja | Desventaja |
|---|---|---|
| **Inline** | Rápido, específico | Difícil de mantener, repite código |
| **Interno** | Todo en un archivo | No reutilizable entre páginas |
| **Externo** | Reutilizable, cacheable, limpio | Requiere archivo extra |

### 📖 Analogía: La ropa

- **Inline** es ponerte la ropa directamente sobre el cuerpo, sin armario.
- **Interno** es tener un armario pequeño en tu cuarto con toda tu ropa.
- **Externo** es tener un armario gigante compartido en toda la casa (reutilizable).

> 💡 **Regla de oro:** usa **CSS externo** en proyectos reales. Es la práctica profesional.

---

## 🏗️ PARTE 2 — Selectores: ¿a quién le aplico el estilo?

### 🕐 En qué se usa

En **cada regla de CSS**. El selector decide **qué elementos** reciben los estilos.

### 🎯 Para qué se usa

Apuntar a elementos específicos del HTML para aplicarles estilos, sin afectar a otros.

### 📝 Ejemplo práctico

```html
<p>Párrafo normal</p>
<p class="destacado">Párrafo destacado</p>
<p id="unico">Párrafo único</p>
<a href="#">Enlace</a>
```

```css
/* 1. Selector de etiqueta: todos los <p> */
p {
  color: gray;
}

/* 2. Selector de clase: solo los que tienen class="destacado" */
.destacado {
  color: orange;
  font-weight: bold;
}

/* 3. Selector de ID: solo el elemento con id="unico" */
#unico {
  color: red;
  font-size: 20px;
}

/* 4. Selector de atributo */
a[href="#"] {
  text-decoration: none;
}

/* 5. Selector descendiente: párrafos dentro de un article */
article p {
  line-height: 1.6;
}

/* 6. Selector de hijos directos */
ul > li {
  list-style: none;
}

/* 7. Pseudo-clase: cuando el mouse pasa sobre un enlace */
a:hover {
  color: blue;
}

/* 8. Pseudo-elemento: primera línea de cada párrafo */
p::first-line {
  font-weight: bold;
}
```

**Explicación de cada selector:**

| Selector | Ejemplo | Significado |
|---|---|---|
| **Etiqueta** | `p` | Todos los `<p>` |
| **Clase** | `.destacado` | Todos con `class="destacado"` |
| **ID** | `#unico` | El único con `id="unico"` |
| **Atributo** | `a[href="#"]` | Enlaces con ese `href` exacto |
| **Descendiente** | `article p` | Todos los `<p>` dentro de `<article>` |
| **Hijo directo** | `ul > li` | Solo los `<li>` hijos directos de `<ul>` |
| **Pseudo-clase** | `a:hover` | Enlaces cuando el mouse está encima |
| **Pseudo-elemento** | `p::first-line` | Solo la primera línea del párrafo |

### 📖 Analogía: Los apodos y las direcciones

- **Etiqueta** = "todos los que se llamen Juan".
- **Clase** = "todos los que sean del equipo azul".
- **ID** = "el de cédula 12345678" (único).
- **Descendiente** = "los hijos de Juan".
- **Hijo directo** = "el hijo biológico de Juan (no el adoptado)".

> ⚠️ **Prioridad (especificidad):** `ID` > `clase` > `etiqueta`. Si aplicas `p { color: gray; }` y `#unico { color: red; }`, el párrafo con `id="unico"` será **rojo**.

---

## 🏗️ PARTE 3 — Propiedades de texto y color

### 🕐 En qué se usa

En **cualquier componente con texto**: títulos, párrafos, botones, menús, etiquetas.

### 🎯 Para qué se usa

Controlar la **tipografía** (familia, tamaño, peso, espaciado) y el **color** del texto y del fondo.

### 📝 Ejemplo práctico

```html
<h1 class="titulo">Bienvenida</h1>
<p class="texto">
  Aprende CSS de forma <em>progresiva</em> y divertida.
</p>
```

```css
.titulo {
  font-family: 'Segoe UI', sans-serif;  /* Tipografía */
  font-size: 2.5rem;                     /* Tamaño (rem = 16px por defecto) */
  font-weight: 700;                      /* Peso: 100-900 (700 = bold) */
  color: #1a1a1a;                        /* Color del texto */
  text-align: center;                    /* Centrado horizontal */
  text-transform: uppercase;             /* Todo en mayúsculas */
  letter-spacing: 2px;                   /* Espacio entre letras */
  line-height: 1.2;                      /* Altura de línea */
}

.texto {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;                      /* Mejor legibilidad en párrafos */
  text-decoration: none;
}

body {
  background-color: #f9f9f9;             /* Fondo de página */
}
```

**Explicación de propiedades clave:**

| Propiedad | Para qué |
|---|---|
| `font-family` | Familia tipográfica (serif, sans-serif, monospace...) |
| `font-size` | Tamaño (`px`, `rem`, `em`, `%`) |
| `font-weight` | Grosor (normal=400, bold=700) |
| `line-height` | Altura entre líneas (sin unidad = múltiplo del tamaño) |
| `letter-spacing` | Espacio entre letras |
| `text-align` | Alineación horizontal |
| `text-transform` | mayúsculas/minúsculas |
| `text-decoration` | Subrayado, tachado (útil para quitar el de los enlaces) |
| `color` | Color del texto |
| `background-color` | Color de fondo |

### 🎨 Formas de declarar colores

```css
color: red;                    /* Nombre */
color: #ff0000;                /* Hexadecimal */
color: #f00;                   /* Hexadecimal corto */
color: rgb(255, 0, 0);         /* RGB */
color: rgba(255, 0, 0, 0.5);   /* RGB con transparencia */
color: hsl(0, 100%, 50%);      /* HSL (más intuitivo) */
```

### 📖 Analogía: Los vestidos de moda

CSS es como un **vestidor gigante** 👗:
- `font-family` = la **tela** del vestido.
- `font-size` = la **talla**.
- `font-weight` = qué tan **grueso** es el tejido.
- `color` = el **color** del vestido.
- `line-height` = qué tan **holgado** queda.

---

## 🏗️ PARTE 4 — Modelo de caja (Box Model)

### 🕐 En qué se usa

En **absolutamente todo elemento HTML**. **Cada etiqueta es una caja rectangular** con contenido, relleno, borde y margen.

### 🎯 Para qué se usa

Entender cómo se calcula el **tamaño total** de un elemento y cómo se **espacian** unos de otros.

### 📖 Analogía: El cuadro enmarcado

Imagina un **cuadro** 🖼️ colgado en una pared:
- **Contenido (`content`):** la pintura en sí.
- **Padding (relleno):** el espacio entre la pintura y el marco.
- **Border (borde):** el marco de madera.
- **Margin (margen):** el espacio entre el marco y otros cuadros de la pared.

### 📝 Ejemplo práctico

```html
<div class="caja">Contenido</div>
```

```css
.caja {
  /* 1. Contenido: el texto va aquí */

  /* 2. Padding: espacio INTERNO (entre contenido y borde) */
  padding: 20px;

  /* 3. Border: el "marco" visible */
  border: 2px solid #333;

  /* 4. Margin: espacio EXTERNO (entre esta caja y otras) */
  margin: 30px;

  /* Dimensiones */
  width: 200px;
  height: 100px;

  /* ⚠️ box-sizing: hace que width incluya padding y border */
  box-sizing: border-box;

  /* Estilo visual */
  background-color: #f0f0f0;
}
```

**Cómo lo interpreta el navegador:**

```
┌──────────────────────────────────┐ ← margin (afuera, transparente)
│  ┌────────────────────────────┐  │ ← border (visible)
│  │  ┌──────────────────────┐  │  │ ← padding (espacio interno)
│  │  │      Contenido       │  │  │
│  │  └──────────────────────┘  │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

**Diferencia clave: `box-sizing`**

| Valor | Significado |
|---|---|
| `content-box` (default) | `width` = solo el contenido. Padding y border se **suman** al total. |
| `border-box` | `width` = contenido + padding + border. **Más intuitivo.** |

> 💡 **Truco profesional:** aplica esto al inicio de **todos** tus proyectos:
> ```css
> *, *::before, *::after {
>   box-sizing: border-box;
> }
> ```

**Formas de abreviar padding y margin:**

```css
/* Todos los lados iguales */
margin: 20px;

/* Vertical | Horizontal */
margin: 10px 20px;

/* Arriba | Horizontal | Abajo */
margin: 10px 20px 30px;

/* Arriba | Derecha | Abajo | Izquierda (sentido horario) */
margin: 10px 20px 30px 40px;

/* Específicos por lado */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
```

---

## 🏗️ PARTE 5 — Display: ¿cómo se comporta la caja?

### 🕐 En qué se usa

Cuando necesitas **controlar cómo fluye un elemento** en la página: uno debajo de otro, uno al lado de otro, o superpuesto.

### 🎯 Para qué se usa

Definir **cómo se renderiza una caja** y cómo interactúa con las demás.

### 📝 Ejemplo práctico

```css
/* Block: ocupa toda la línea, empieza en una nueva */
div, p, h1 { display: block; }

/* Inline: se comporta como texto, no rompe línea */
span, a, strong { display: inline; }

/* Inline-block: como inline pero acepta width/height */
button { display: inline-block; }

/* None: lo oculta completamente (ni ocupa espacio) */
.oculto { display: none; }

/* Flex: convierte al padre en un contenedor flexible */
.contenedor { display: flex; }

/* Grid: convierte al padre en una cuadrícula */
.grid { display: grid; }
```

**Explicación de valores principales:**

| Valor | Comportamiento |
|---|---|
| `block` | Ocupa todo el ancho, empieza en línea nueva |
| `inline` | Se comporta como texto, no acepta width/height |
| `inline-block` | Como inline pero acepta dimensiones |
| `none` | Desaparece (no ocupa espacio) |
| `flex` | Activa Flexbox |
| `grid` | Activa CSS Grid |

### 📖 Analogía: Los muebles

- **Block** = un **sofá**: ocupa todo el espacio, no puedes poner otro al lado.
- **Inline** = un **cojín**: se coloca entre otras cosas, se ajusta al contenido.
- **Inline-block** = una **silla**: se pone al lado de otras, pero puedes cambiarle el tamaño.
- **None** = el **mueble se va volando**: desaparece del cuarto.

---

## 🏗️ PARTE 6 — Flexbox: alinear en una dimensión

### 🕐 En qué se usa

En **barras de navegación, listas de tarjetas, centrar contenido, alinear botones, filas de íconos**. Cuando necesitas **alinear elementos en una fila o columna**.

### 🎯 Para qué se usa

Distribuir el **espacio** entre elementos y **alinearlos** de forma flexible en un **eje principal** (horizontal o vertical).

### 📝 Ejemplo práctico

```html
<nav class="navbar">
  <div class="logo">MiApp</div>
  <ul class="menu">
    <li>Inicio</li>
    <li>Servicios</li>
    <li>Contacto</li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;                    /* Activa Flexbox */
  justify-content: space-between;   /* Distribuye horizontalmente */
  align-items: center;              /* Centra verticalmente */
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
}

.menu {
  display: flex;
  gap: 1.5rem;                      /* Espacio entre elementos */
  list-style: none;                 /* Quita viñetas */
  margin: 0;
  padding: 0;
}
```

**Propiedades clave de Flexbox:**

| Propiedad (en el padre) | Para qué |
|---|---|
| `display: flex` | Activa flexbox en el contenedor |
| `flex-direction` | `row` (default), `column`, `row-reverse`, `column-reverse` |
| `justify-content` | Alineación en el **eje principal** (horizontal si es row) |
| `align-items` | Alineación en el **eje cruzado** (vertical si es row) |
| `flex-wrap` | `nowrap` (default), `wrap` (permite saltos de línea) |
| `gap` | Espacio entre hijos |
| `flex` (en hijos) | `flex: 1` = ocupa el espacio disponible |

**Valores de `justify-content`:**

| Valor | Efecto |
|---|---|
| `flex-start` | Todo al inicio |
| `flex-end` | Todo al final |
| `center` | Todo centrado |
| `space-between` | Primero al inicio, último al final, resto repartido |
| `space-around` | Espacio igual alrededor de cada elemento |
| `space-evenly` | Espacio igual entre todos |

### 📖 Analogía: Los libros en un estante

- **`display: flex`** = convertir el estante en un **estante flexible**.
- **`flex-direction: row`** = los libros se ponen **de izquierda a derecha**.
- **`flex-direction: column`** = los libros se ponen **de arriba hacia abajo**.
- **`justify-content`** = ¿los libros van pegados a la izquierda, al centro o repartidos?
- **`align-items`** = ¿los libros están alineados arriba, al centro o abajo del estante?
- **`gap`** = el **espacio entre cada libro**.

---

## 🏗️ PARTE 7 — CSS Grid: alinear en dos dimensiones

### 🕐 En qué se usa

En **galerías de imágenes, dashboards, layouts de página completa, tableros de widgets, catálogos de productos**.

### 🎯 Para qué se usa

Crear **cuadrículas** (filas y columnas) para maquetar contenido complejo con **control preciso** del espacio.

### 📝 Ejemplo práctico

```html
<div class="galeria">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

```css
.galeria {
  display: grid;                              /* Activa Grid */
  grid-template-columns: repeat(3, 1fr);      /* 3 columnas iguales */
  gap: 1rem;                                  /* Espacio entre celdas */
  padding: 1rem;
}

/* Layout de página completa con Grid */
.layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 200px 1fr;           /* Sidebar fija, main flexible */
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

**Propiedades clave de Grid:**

| Propiedad (en el padre) | Para qué |
|---|---|
| `display: grid` | Activa Grid |
| `grid-template-columns` | Define las columnas |
| `grid-template-rows` | Define las filas |
| `gap` | Espacio entre celdas |
| `grid-template-areas` | Nombra áreas para un layout semántico |
| `grid-column`, `grid-row` (en hijos) | Posiciona un hijo en columnas/filas específicas |

### 🧃 Unidades comunes en Grid

```css
grid-template-columns: 
  200px               /* Tamaño fijo */
  1fr                 /* Fracción del espacio disponible */
  repeat(3, 1fr)      /* 3 columnas iguales */
  minmax(100px, 1fr)  /* Mínimo 100px, máximo el espacio */
  auto                /* Según el contenido */
;
```

### 📖 Analogía: El tablero de ajedrez

- **Grid** es un **tablero de ajedrez** ♟️: define filas y columnas de antemano.
- **Flexbox** es una **fila de personas** esperando el bus: se alinean, pero solo en una dirección.

> 💡 **¿Cuándo usar Flexbox vs Grid?**
> - **Flexbox:** 1 dimensión (fila **o** columna). Ideal para componentes.
> - **Grid:** 2 dimensiones (filas **y** columnas). Ideal para layouts grandes.

---

## 🏗️ PARTE 8 — Pseudo-clases y transiciones (interactividad visual)

### 🕐 En qué se usa

En **botones que cambian al pasar el mouse, enlaces con hover, campos de formulario con focus, validaciones visuales**.

### 🎯 Para qué se usa

Aplicar estilos según el **estado del elemento** o **acciones del usuario**, y animar cambios suavemente.

### 📝 Ejemplo práctico

```html
<button class="boton">Haz clic</button>
```

```css
.boton {
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;     /* Anima los cambios */
}

/* Pseudo-clase: cuando el mouse está encima */
.boton:hover {
  background-color: #2980b9;
  transform: translateY(-2px);   /* Lo sube 2px */
}

/* Pseudo-clase: cuando el botón está siendo presionado */
.boton:active {
  transform: translateY(0);       /* Vuelve a su posición */
}

/* Pseudo-clase: cuando el botón tiene foco (accesibilidad) */
.boton:focus {
  outline: 3px solid #f39c12;
}
```

**Pseudo-clases más comunes:**

| Pseudo-clase | Cuándo se aplica |
|---|---|
| `:hover` | Mouse encima del elemento |
| `:active` | Mientras se presiona |
| `:focus` | Cuando el elemento tiene el foco (teclado/formulario) |
| `:first-child` | Primer hijo de su padre |
| `:last-child` | Último hijo de su padre |
| `:nth-child(n)` | Enésimo hijo |
| `:not(.clase)` | Elementos que NO tienen esa clase |

**Transiciones clave:**

```css
transition: propiedad duración timing;
transition: all 0.3s ease;      /* Anima todo */
transition: transform 0.2s;     /* Solo transforma */
```

### 📖 Analogía: Las puertas automáticas

- `:hover` = cuando te **acercas** a la puerta, se abre.
- `transition` = la puerta se abre **suavemente**, no de golpe.
- `:focus` = la puerta se **ilumina** para que sepas que está activa.

---

## 🎓 EJEMPLO COMPLETO: Tarjeta de perfil moderna

Vamos a integrar **todo lo aprendido** en una tarjeta de perfil con:

- Modelo de caja
- Flexbox y Grid
- Tipografía
- Colores
- Pseudo-clases
- Transiciones

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarjeta de Perfil</title>
</head>
<body>

  <article class="perfil">
    <div class="avatar-wrapper">
      <img 
        class="avatar"
        src="https://i.pravatar.cc/150?img=47"
        alt="Foto de perfil de Shania"
      >
      <span class="estado">●</span>
    </div>

    <h1 class="nombre">Shania Gómez</h1>
    <p class="rol">Desarrolladora Frontend</p>

    <ul class="tags">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <div class="acciones">
      <button class="btn btn-primary">Seguir</button>
      <button class="btn btn-secondary">Mensaje</button>
    </div>

    <ul class="stats">
      <li><strong>128</strong> Publicaciones</li>
      <li><strong>1.2k</strong> Seguidores</li>
      <li><strong>340</strong> Siguiendo</li>
    </ul>
  </article>

</body>
</html>
```

```css
/* ─── Reset básico ───────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  color: #1a1a1a;
}

/* ─── Tarjeta principal ─────────────────────────────── */
.perfil {
  background: white;
  width: 100%;
  max-width: 360px;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.perfil:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

/* ─── Avatar con indicador de estado ───────────────── */
.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.estado {
  position: absolute;
  bottom: 4px;
  right: 4px;
  color: #22c55e;
  font-size: 1.25rem;
  background: white;
  border-radius: 50%;
  line-height: 1;
  padding: 2px;
}

/* ─── Texto ─────────────────────────────────────────── */
.nombre {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
}

.rol {
  font-size: 0.95rem;
  color: #666;
  margin-top: -0.5rem;
}

/* ─── Tags (Flexbox) ────────────────────────────────── */
.tags {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tags li {
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* ─── Botones ───────────────────────────────────────── */
.acciones {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  margin-top: 0.5rem;
}

.btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #4f46e5;
  color: white;
}

.btn-primary:hover {
  background: #4338ca;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
}

.btn-secondary:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

/* ─── Estadísticas (Grid) ──────────────────────────── */
.stats {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.stats li {
  font-size: 0.8rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stats strong {
  font-size: 1.1rem;
  color: #111;
  font-weight: 700;
}
```

### 🧃 Cómo interpreta esto el navegador

1. **Reset universal:** aplica `box-sizing: border-box` a **todos** los elementos, para que `width` incluya padding y border.
2. **Body centrado:** con `display: flex` + `justify-content` + `align-items`, la tarjeta queda en el centro de la pantalla.
3. **Tarjeta `.perfil`:**
   - Es una **columna flex** (`flex-direction: column`).
   - Sus hijos quedan **apilados verticalmente**, centrados.
   - `gap: 1rem` deja **espacio entre cada bloque**.
   - `box-shadow` la hace resaltar del fondo.
   - `transition` + `:hover` la **eleva** al pasar el mouse.
4. **Avatar:** redondo (`border-radius: 50%`), recortado (`object-fit: cover`), con sombra. El **estado** está posicionado con `position: absolute` sobre el avatar.
5. **Tags:** los elementos `<li>` se alinean en **fila con `flex`**, permitiendo saltar de línea (`flex-wrap`) en pantallas pequeñas.
6. **Botones:** usan `flex: 1` para **dividir el ancho a partes iguales**. `transition` + `:hover` dan **feedback visual**.
7. **Estadísticas:** usan **CSS Grid** con `repeat(3, 1fr)` para dividir en **3 columnas iguales**, perfecto para alinear los números.
8. **Responsive:** `max-width: 360px` en la tarjeta asegura que en pantallas grandes no crezca más de lo necesario, y en pantallas pequeñas se adapta al ancho disponible.

---

## 🧃 RESUMEN: Los conceptos clave

| Bloque | Qué aprendiste |
|---|---|
| **Formas de aplicar CSS** | Inline, interno, externo (recomendado) |
| **Selectores** | Etiqueta, clase, ID, atributo, descendiente, pseudo-clases |
| **Texto y color** | `font-family`, `font-size`, `color`, `line-height` |
| **Box Model** | `content`, `padding`, `border`, `margin`, `box-sizing` |
| **Display** | `block`, `inline`, `inline-block`, `none`, `flex`, `grid` |
| **Flexbox** | `justify-content`, `align-items`, `gap`, `flex-direction` |
| **Grid** | `grid-template-columns`, `gap`, `grid-template-areas` |
| **Interactividad** | `:hover`, `:focus`, `:active`, `transition` |

---

## 🎈 CONSEJOS DE PROFESOR

1. **Aprende el Box Model a fondo.** Es la base de todo. Si no entiendes por qué un elemento mide lo que mide, revisa `box-sizing`.
2. **Usa `box-sizing: border-box` universalmente.** Ahorra dolores de cabeza.
3. **Prefiere Flexbox para componentes, Grid para layouts.** No te obsesiones con uno solo.
4. **Usa `rem` en lugar de `px` para tamaños de fuente.** Es más accesible (respeta la configuración del usuario).
5. **No abuses de `!important`.** Es una señal de que algo está mal estructurado.
6. **Nombra tus clases con convenciones** (BEM, camelCase, kebab-case). Elige una y sé consistente.
7. **Aprende a usar las DevTools del navegador.** Inspecciona elementos y ve qué reglas aplican.
8. **Mobile-first:** diseña primero para móvil y luego añade media queries para pantallas grandes.
9. **No reinventes la rueda:** usa variables CSS (`--mi-color: #333;`) para mantener consistencia.
10. **Practica con proyectos reales.** Una tarjeta de perfil, un navbar, una galería: cada uno te enseña algo nuevo.

---

## 📚 GLOSARIO

| Término | Significado |
|---|---|
| **Selector** | A quién aplica una regla CSS |
| **Declaración** | Propiedad + valor (`color: red;`) |
| **Especificidad** | Prioridad entre reglas (ID > clase > etiqueta) |
| **Box Model** | Modelo de caja (content, padding, border, margin) |
| **Flexbox** | Sistema de alineación en 1 dimensión |
| **Grid** | Sistema de alineación en 2 dimensiones |
| **Pseudo-clase** | Estado del elemento (`:hover`, `:focus`) |
| **Pseudo-elemento** | Parte del elemento (`::before`, `::after`) |
| **Media query** | Regla condicional según tamaño de pantalla |
| **Variable CSS** | Valor reutilizable (`--color-primario`) |

---

¡Espero que esta guía te sirva de referencia completa para estilizar **cualquier página web**!