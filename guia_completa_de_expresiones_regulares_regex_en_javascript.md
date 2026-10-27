# Guía Completa de Expresiones Regulares (Regex) en JavaScript

Una **Expresión Regular** (*Regex* o *RegExp*) es una secuencia de caracteres que forma un patrón de búsqueda. En JavaScript, las expresiones regulares son objetos que se utilizan para realizar operaciones de búsqueda, coincidencia (*matching*), validación y reemplazo de texto dentro de cadenas (*strings*).

---

## 1. ¿Para qué se usan las Regex?

* **Validación de datos:** Verificar si un correo electrónico, número de teléfono, código postal o contraseña cumple con un formato específico.
* **Búsqueda avanzada:** Encontrar subcadenas complejas dentro de textos largos donde una búsqueda normal de texto fijo no es suficiente.
* **Reemplazo y Manipulación:** Modificar o limpiar formatos de texto masivamente (por ejemplo, eliminar espacios extras, formatear fechas o reemplazar etiquetas HTML).
* **Extracción de datos:** Extraer información específica de una cadena (como URLs, hashtags o montos monetarios).

---

## 2. Creación de una Expresión Regular

En JavaScript, existen dos formas principales de declarar una expresión regular:

### A. Notación Literal (Recomendada)
Se escribe el patrón encerrado entre barras diagonales `/`. Es la forma más rápida y común.

```javascript
const patronLiteral = /^hola/i;
```

### B. Constructor `RegExp`
Se utiliza cuando el patrón se construye de forma dinámica mediante variables o cadenas de texto. (Nota: debes escapar las barras invertidas `\\`).

```javascript
const textoDinamico = "usuario";
const patronDinamico = new RegExp(`^${textoDinamico}`, "i");
```

---

## 3. Métodos Principales para usar Regex en JavaScript

JavaScript divide los métodos entre el objeto `RegExp` y el objeto `String`.

### Métodos del Objeto RegExp

#### `regex.test(string)`
* **Para qué sirve:** Comprueba si existe una coincidencia entre el patrón y la cadena. Devuelve `true` o `false`.
```javascript
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regexEmail.test("test@example.com")); // true
console.log(regexEmail.test("correo-invalido"));   // false
```

#### `regex.exec(string)`
* **Para qué sirve:** Busca una coincidencia y devuelve un arreglo con los detalles de la coincidencia y grupos de captura, o `null` si no hay coincidencia.
```javascript
const regexFecha = /(\d{2})-(\d{2})-(\d{4})/;
const resultado = regexFecha.exec("La fecha es 25-12-2026");
console.log(resultado[0]); // "25-12-2026" (coincidencia completa)
console.log(resultado[1]); // "25" (día)
```

---

### Métodos del Objeto String

#### `string.match(regex)`
* **Para qué sirve:** Devuelve un arreglo con las coincidencias encontradas o `null`. Si usas la bandera global (`g`), devuelve todas las coincidencias.
```javascript
const texto = "Los precios son 50 y 150 dólares.";
const numeros = texto.match(/\d+/g); 
console.log(numeros); // ["50", "150"]
```

#### `string.search(regex)`
* **Para qué sirve:** Busca una coincidencia y devuelve el índice de la primera posición encontrada, o `-1` si no existe.
```javascript
const texto = "Hola mundo JavaScript";
const indice = texto.search(/mundo/);
console.log(indice); // 5
```

#### `string.replace(regex, nuevoTexto)`
* **Para qué sirve:** Reemplaza las partes de la cadena que coincidan con el patrón por un nuevo texto.
```javascript
const texto = "Visita mi sitio web";
const nuevoTexto = texto.replace(/sitio web/, "blog oficial");
console.log(nuevoTexto); // "Visita mi blog oficial"
```

---

## 4. Clases de Caracteres y Metacaracteres

Los metacaracteres son símbolos especiales que tienen un significado de control dentro de la expresión regular.

| Carácter | Descripción | Ejemplo | Coincide con |
| :--- | :--- | :--- | :--- |
| `.` | Cualquier carácter (excepto saltos de línea). | `/h.l/` | "hal", "hól", "h-l" |
| `\d` | Cualquier dígito numérico (`0-9`). | `/\d\d/` | "42", "09" |
| `\D` | Cualquier carácter que **no** sea un dígito. | `/\D/` | "A", "#", " " |
| `\w` | Carácter alfanumérico o guion bajo (`a-z`, `A-Z`, `0-9`, `_`). | `/\w+/` | "Usuario_123" |
| `\W` | Cualquier carácter que **no** sea de palabra. | `/\W/` | Espacios, símbolos (`!`, `@`) |
| `\s` | Cualquier espacio en blanco (espacios, tabulaciones, saltos de línea). | `/\s/` | Espacio entre palabras |
| `\S` | Cualquier carácter que **no** sea espacio en blanco. | `/\S+/` | Texto continuo sin espacios |

---

## 5. Conjuntos y Rangos (`[...]`)

Permiten definir un grupo de caracteres permitidos.

* `[abc]`: Coincide con 'a', 'b' o 'c'.
* `[a-z]`: Coincide con cualquier letra minúscula de la a a la z.
* `[^abc]`: Negación. Coincide con **cualquier cosa excepto** 'a', 'b' o 'c'.

```javascript
const regexVocal = /^[aeiou]$/i;
console.log(regexVocal.test("A")); // true
```

---

## 6. Cuantificadores (Repetición)

Indican cuántas veces debe repetirse el carácter o grupo anterior.

| Símbolo | Descripción | Ejemplo | Coincide con |
| :--- | :--- | :--- | :--- |
| `*` | Cero o más veces. | `/a*b/` | "b", "ab", "aaab" |
| `+` | Una o más veces. | `/a+b/` | "ab", "aaab" (pero no "b") |
| `?` | Cero o una vez (opcional). | `/colou?r/` | "color", "colour" |
| `{n}` | Exactamente `n` veces. | `/\d{4}/` | "2026" |
| `{n,}` | Al menos `n` veces. | `/\d{3,}/` | "123", "12345" |
| `{n,m}` | Entre `n` y `m` veces. | `/\d{2,4}/` | "12", "123", "1234" |

---

## 7. Anclas y Límites

Sirven para especificar la posición exacta donde debe encontrarse el patrón dentro de la cadena.

* `^`: Representa el **inicio** de la cadena o línea.
* `$`: Representa el **fin** de la cadena o línea.
* `\b`: Límite de palabra (*word boundary*).

```javascript
// Debe empezar exactamente con "https" y terminar con ".com"
const regexUrl = /^https:\/\/.*\.com$/;
```

---

## 8. Banderas (*Flags*)

Modifican el comportamiento general de la búsqueda al final de la expresión regular (ej. `/patrón/gi`).

* `g` (*Global*): Busca todas las coincidencias en lugar de detenerse en la primera.
* `i` (*Ignore Case*): Realiza una búsqueda insensible a mayúsculas y minúsculas.
* `m` (*Multiline*): Hace que los anclajes `^` y `$` actúen al inicio y fin de cada línea individual en textos multilínea.

---

## 9. Ejemplos Prácticos Completos

### A. Validar formato de Teléfono (Ej. formato internacional básico o guiones)
```javascript
const regexTelefono = /^\+?[\d\s\-]{8,15}$/;
console.log(regexTelefono.test("+34 600123456")); // true
```

### B. Extraer etiquetas Hashtag de un texto en Redes Sociales
```javascript
const texto = "Me encanta programar en #JavaScript y aprender #NodeJS hoy.";
const hashtags = texto.match(/#\w+/g);

console.log(hashtags); // ["#JavaScript", "#NodeJS"]
```

### C. Validar una Contraseña Segura
*Requisitos: Al menos 8 caracteres, una letra minúscula, una mayúscula, un número y un carácter especial.*
```javascript
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

console.log(regexPassword.test("Abc$1234")); // true
console.log(regexPassword.test("debil"));     // false
```
*(Nota: Usa lookaheads `(?=...)` para asegurar múltiples condiciones simultáneas).*

---

## Resumen Rápido de Referencia

| Método / Símbolo | Función Principal |
| :--- | :--- |
| `regex.test(str)` | Devuelve `true` si encuentra el patrón, de lo contrario `false`. |
| `str.match(regex)` | Extrae coincidencias en un arreglo. |
| `str.replace(regex, val)` | Reemplaza partes del texto que coincidan con la regex. |
| `^` / `$` | Inicio / Fin de cadena. |
| `\d` / `\w` / `\s` | Dígitos / Caracteres de palabra / Espacios en blanco. |
| `*` / `+` / `?` | Cuantificadores (0 o más / 1 o más / Opcional). |