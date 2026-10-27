# 📘 GUÍA COMPLETA DE EXPRESIONES REGULARES (REGEX) — De Cero a Intermedio

## 🎓 Introducción: ¿Qué es una Regex y por qué debería importarte?

Imagina que tienes un libro enorme 📖 y necesitas encontrar **todas** las veces que aparece un número de teléfono. Podrías leer página por página (tedioso y lento) o usar una **lupa mágica** que, con un solo patrón, te encuentre **exactamente** lo que buscas. Esa lupa mágica es una **Regex** (Expresión Regular). 🔍

### 📖 Analogía: El detective y el colador

Una Regex es como un **detective** 🕵️‍♀️ que tiene una **lista de reglas** para revisar textos. O como un **colador** 🍲 con agujeros de formas específicas: si el texto "encaja" en los agujeros, pasa; si no, se queda afuera.

- **Texto** = el material que revisas.
- **Patrón (Regex)** = las reglas del detective.
- **Resultado** = lo que coincide (o `true`/`false` si solo validas).

### 🔧 Idea técnica

Una **Regex** es una **secuencia de caracteres** que describe un **patrón de búsqueda**. Se usa para:
- **Validar** entradas (correos, teléfonos, contraseñas).
- **Buscar** fragmentos en textos (palabras, números, URLs).
- **Reemplazar** partes de un texto (limpiar datos, formatear).
- **Extraer** información (fechas, precios, etiquetas HTML).

En JavaScript, se escriben entre barras `/ /` o con `new RegExp("...")`:

```javascript
const patron = /hola/;        // Literal
const otroPatron = new RegExp("hola");  // Constructor
```

### 🧃 Los dos métodos clave en JavaScript

| Método | Qué hace | Devuelve |
|---|---|---|
| `.test(texto)` | ¿Coincide el patrón con el texto? | `true` / `false` |
| `.match(patron)` | Devuelve las coincidencias encontradas | Array o `null` |
| `.replace(patron, "nuevo")` | Reemplaza lo que coincide | Nuevo string |
| `.exec(texto)` | Como `match` pero más potente | Array con detalles |

---

## 🏗️ PARTE 1 — Caracteres Literales (nivel base)

### 🕐 Cuándo se usa

Cuando buscas una **palabra o frase exacta** dentro de un texto. Por ejemplo: buscar "error" en logs, o "admin" en nombres de usuario.

### 🎯 Para qué se usa

Coincidir **exactamente** con los caracteres escritos, sin interpretaciones especiales.

### 📝 Ejemplos prácticos

```javascript
const regex = /gato/;

regex.test("Mi gato se llama Tom");   // true ✅
regex.test("Mi perro se llama Max");  // false ❌
regex.test("Los GATOS son geniales"); // false ❌ (distingue mayúsculas)
```

**Explicación de símbolos:**
- `g`, `a`, `t`, `o`: son **caracteres literales**. Solo coinciden si aparecen en ese orden exacto.
- Las barras `/ /` delimitan el patrón.

> 💡 **Tip:** las Regex son **case-sensitive** por defecto. Para ignorar mayúsculas/minúsculas, se usa el flag `i`: `/gato/i`.

### 🎁 Flags importantes

| Flag | Significado |
|---|---|
| `i` | Ignorar mayúsculas/minúsculas |
| `g` | Buscar **todas** las coincidencias (global) |
| `m` | Multilínea (^ y $ funcionan por línea) |
| `s` | El punto `.` también coincide con saltos de línea |

---

## 🏗️ PARTE 2 — Clases de Caracteres (el cajón de opciones)

### 🕐 Cuándo se usa

Cuando quieres permitir **varias opciones posibles** en una posición. Por ejemplo: "que la primera letra sea vocal", "que solo haya dígitos", "que empiece con mayúscula".

### 🎯 Para qué se usa

Definir **conjuntos de caracteres válidos** en una posición del patrón. En lugar de decir "a" o "b" o "c", dices "una de estas letras".

### 📝 Ejemplos prácticos

#### 2.1. Corchetes `[ ]` — el cajón de opciones

```javascript
const regex = /[aeiou]/;

regex.test("hola");    // true ✅ (tiene 'o' y 'a')
regex.test("xyz");     // false ❌ (ninguna vocal)
regex.test("RITMO");   // false ❌ (mayúsculas, sin flag i)
```

**Explicación:**
- `[aeiou]` → "una letra que sea a, e, i, o, u".
- Los corchetes significan "**uno de estos caracteres**".

#### 2.2. Rangos dentro de corchetes `[a-z]`

```javascript
const regex = /[a-z]/;      // cualquier letra minúscula
const numeros = /[0-9]/;    // cualquier dígito
const alfanum = /[a-zA-Z0-9]/; // letras o números
```

#### 2.3. Negación `[^ ]`

```javascript
const regex = /[^0-9]/;

regex.test("123");     // false ❌ (todos son números)
regex.test("12a");     // true ✅ (hay una 'a', que NO es número)
```

**Explicación:**
- `[^0-9]` → "cualquier cosa que **no** sea un número".

#### 2.4. Clases abreviadas (los atajos)

| Símbolo | Significado | Equivale a |
|---|---|---|
| `\d` | Dígito | `[0-9]` |
| `\D` | NO dígito | `[^0-9]` |
| `\w` | Letra, número o `_` | `[a-zA-Z0-9_]` |
| `\W` | NO letra/número | `[^a-zA-Z0-9_]` |
| `\s` | Espacio en blanco | `[ \t\n\r]` |
| `\S` | NO espacio | `[^ \t\n\r]` |
| `.` | Cualquier carácter (excepto salto de línea) | — |

```javascript
const regex = /\d/;

regex.test("abc123");  // true ✅ (tiene dígitos)
regex.test("abcdef");  // false ❌ (no tiene dígitos)
```

---

## 🏗️ PARTE 3 — Cuantificadores (¿cuántas veces?)

### 🕐 Cuándo se usa

Cuando quieres exigir **cantidad** de algo: "al menos 8 caracteres", "exactamente 3 dígitos", "uno o más espacios". Súper usado en **validación de contraseñas, teléfonos, códigos postales**.

### 🎯 Para qué se usa

Indicar **cuántas veces** debe repetirse el elemento anterior.

### 📝 Ejemplos prácticos

| Cuantificador | Significado |
|---|---|
| `*` | 0 o más veces |
| `+` | 1 o más veces |
| `?` | 0 o 1 vez (opcional) |
| `{n}` | Exactamente n veces |
| `{n,}` | Al menos n veces |
| `{n,m}` | Entre n y m veces |

#### 3.1. `*` (cero o más)

```javascript
const regex = /a*/;

regex.test("");        // true ✅ (cero 'a' es válido)
regex.test("aaa");     // true ✅
regex.test("bbb");     // true ✅ (cero 'a' también cuenta)
```

> ⚠️ **Ojo:** `*` es "permisivo". Coincide incluso cuando no hay nada.

#### 3.2. `+` (una o más)

```javascript
const regex = /a+/;

regex.test("");        // false ❌ (cero 'a' no vale)
regex.test("a");       // true ✅
regex.test("aaaa");    // true ✅
```

#### 3.3. `?` (opcional)

```javascript
const regex = /colou?r/;

regex.test("color");   // true ✅ (sin 'u')
regex.test("colour");  // true ✅ (con 'u')
```

> 💡 Muy útil para palabras que se escriben de dos formas.

#### 3.4. `{n}` (cantidad exacta)

```javascript
const regex = /^\d{3}$/;

regex.test("123");     // true ✅ (exactamente 3 dígitos)
regex.test("12");      // false ❌ (solo 2)
regex.test("1234");    // false ❌ (4 dígitos)
```

> 🧠 Los `^` y `$` los veremos en la siguiente sección. Son **anclas**: obligan a que el patrón cubra **todo** el string.

#### 3.5. `{n,m}` (rango)

```javascript
const regex = /^\d{2,4}$/;

regex.test("12");      // true ✅
regex.test("1234");    // true ✅
regex.test("1");       // false ❌
regex.test("12345");   // false ❌
```

---

## 🏗️ PARTE 4 — Anclas (dónde empieza y dónde termina)

### 🕐 Cuándo se usa

Cuando importa **la posición** del patrón: "que el texto **empiece** por...", "que **termine** en...", "que sea **exactamente** esto". Fundamental en validaciones de formularios.

### 🎯 Para qué se usa

Fijar el patrón al **inicio**, al **final** o a **ambos** del texto. Sin anclas, la Regex busca en cualquier parte del string.

### 📝 Ejemplos prácticos

| Ancla | Significado |
|---|---|
| `^` | Inicio del string (o de línea con flag `m`) |
| `$` | Final del string (o de línea con flag `m`) |
| `\b` | Límite de palabra |
| `\B` | NO límite de palabra |

#### 4.1. `^` (inicio)

```javascript
const regex = /^Hola/;

regex.test("Hola mundo");   // true ✅ (empieza con "Hola")
regex.test("Dice Hola");    // false ❌ (Hola no está al inicio)
```

#### 4.2. `$` (final)

```javascript
const regex = /mundo$/;

regex.test("Hola mundo");   // true ✅ (termina en "mundo")
regex.test("mundo feliz");  // false ❌ (no termina en "mundo")
```

#### 4.3. `^...$` (todo el string)

```javascript
const regex = /^\d+$/;

regex.test("12345");       // true ✅ (solo dígitos)
regex.test("123abc");      // false ❌ (tiene letras)
regex.test(" 123");        // false ❌ (tiene espacio)
```

> 🔥 **Este es el patrón estrella para validaciones**: `^...$` obliga a que **todo** el string cumpla el patrón.

#### 4.4. `\b` (límite de palabra)

```javascript
const regex = /\bgato\b/;

regex.test("Mi gato duerme");    // true ✅
regex.test("Los gatos duermen"); // false ❌ (es "gatos", no "gato")
```

> 💡 `\b` marca el "borde" entre una letra y un no-letra (espacio, puntuación, inicio, fin).

---

## 🏗️ PARTE 5 — Grupos y Alternancias (agrupando)

### 🕐 Cuándo se usa

Cuando quieres:
- Aplicar un cuantificador a **varias cosas juntas** (por ejemplo, `(abc)+` = "abc" repetido).
- Permitir **varias opciones completas** (por ejemplo, "rojo" o "azul").
- **Capturar** partes específicas para reutilizarlas.

### 🎯 Para qué se usa

**Agrupar** sub-patrones con `( )` y ofrecer **alternativas** con `|`.

### 📝 Ejemplos prácticos

#### 5.1. Grupos `( )`

```javascript
const regex = /^(ab)+$/;

regex.test("ab");       // true ✅
regex.test("ababab");   // true ✅ (ab repetido 3 veces)
regex.test("aba");      // false ❌ (no es múltiplo de "ab")
```

**Explicación:**
- `(ab)` → agrupa "ab" como una unidad.
- `+` → se aplica **al grupo**, no solo a la "b".

#### 5.2. Alternancia `|` (el "o")

```javascript
const regex = /^(rojo|azul|verde)$/;

regex.test("rojo");     // true ✅
regex.test("azul");     // true ✅
regex.test("amarillo"); // false ❌
```

**Explicación:**
- `|` → significa "**o**". El string debe ser **uno** de los del grupo.

#### 5.3. Grupos de captura (extraer)

```javascript
const fecha = "2024-05-15";
const regex = /^(\d{4})-(\d{2})-(\d{2})$/;

const resultado = fecha.match(regex);
console.log(resultado);
// ["2024-05-15", "2024", "05", "15"]
//   [0] = match completo
//   [1] = año, [2] = mes, [3] = día
```

> 💡 Muy útil para **extraer** partes de un texto (años, emails, IDs, etc.).

#### 5.4. Grupos NO capturantes `(?: )`

```javascript
const regex = /^(?:rojo|azul)$/;
```

**Diferencia:** con `(?: )` el grupo **no se guarda** en el resultado. Solo se usa para agrupar lógicamente. Más eficiente cuando no necesitas capturar.

#### 5.5. Referencias hacia atrás `\1`, `\2`

```javascript
const regex = /^(\w+) \1$/;

regex.test("hola hola");   // true ✅
regex.test("hola adios");  // false ❌
```

**Explicación:**
- `\1` → "lo mismo que capturó el grupo 1".

---

## 🎓 EJEMPLO COMPLETO DE LA VIDA REAL: Validación de Email

Vamos a construir paso a paso una Regex para validar correos. La forma **simple pero útil**:

```javascript
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
```

### 🧩 Desglose símbolo por símbolo

| Símbolo | Significado |
|---|---|
| `^` | Empieza aquí |
| `[\w.-]+` | Una o más letras, números, puntos o guiones (nombre del usuario) |
| `@` | El arroba obligatorio |
| `[\w.-]+` | Una o más letras, números, puntos o guiones (dominio: gmail, hotmail...) |
| `\.` | Un punto literal (¡escape!) |
| `[a-zA-Z]{2,}` | Al menos 2 letras (la extensión: com, es, org...) |
| `$` | Termina aquí |

### ✅ Casos que SÍ pasan

```javascript
emailRegex.test("usuario@gmail.com");        // true ✅
emailRegex.test("nombre.apellido@empresa.es"); // true ✅
emailRegex.test("a_b-c@sub.dominio.org");    // true ✅
```

### ❌ Casos que NO pasan

```javascript
emailRegex.test("sin-arroba.com");       // false ❌ (falta @)
emailRegex.test("@gmail.com");           // false ❌ (falta usuario)
emailRegex.test("usuario@gmail");        // false ❌ (falta extensión)
emailRegex.test("usuario@gmail.c");      // false ❌ (extensión muy corta)
emailRegex.test("usuario @gmail.com");   // false ❌ (espacio no permitido)
```

### 🧃 En resumen del email

- `^` y `$` → "**todo el string** debe cumplir el patrón".
- `[\w.-]+` → "nombre de usuario y dominio con letras, números, puntos o guiones".
- `@` y `\.` → "el arroba y el punto deben estar en su sitio".
- `[a-zA-Z]{2,}` → "la extensión debe tener al menos 2 letras".

---

## 🎯 EJEMPLO EXTRA: Validación de Contraseña Segura

```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
```

### 🧩 Desglose

| Símbolo | Significado |
|---|---|
| `^` | Empieza aquí |
| `(?=.*[a-z])` | **Lookahead**: debe contener al menos una minúscula |
| `(?=.*[A-Z])` | Debe contener al menos una mayúscula |
| `(?=.*\d)` | Debe contener al menos un dígito |
| `(?=.*[@$!%*?&])` | Debe contener al menos un carácter especial |
| `.{8,}` | Al menos 8 caracteres en total |
| `$` | Termina aquí |

### ✅ Casos que SÍ pasan

```javascript
passwordRegex.test("Segura1@");       // true ✅
passwordRegex.test("MiClave#2024");   // true ✅
```

### ❌ Casos que NO pasan

```javascript
passwordRegex.test("corta1@");        // false ❌ (menos de 8)
passwordRegex.test("sinmayuscula1@"); // false ❌ (falta mayúscula)
passwordRegex.test("SINminuscula1@"); // false ❌ (falta minúscula)
passwordRegex.test("SinNumero@");     // false ❌ (falta dígito)
passwordRegex.test("SinEspecial1");   // false ❌ (falta símbolo)
```

> 💡 **Los `(?=...)` se llaman "lookahead"**: verifican que algo existe **sin consumirlo**. Muy útil para exigir múltiples condiciones en un solo regex.

---

## 🧃 RESUMEN VISUAL: Los 10 símbolos que más usarás

| Símbolo | Significado | Ejemplo |
|---|---|---|
| `.` | Cualquier carácter | `/a.c/` → "abc", "axc" |
| `\d` | Dígito | `/\d+/` → "123" |
| `\w` | Letra/número/_ | `/\w+/` → "hola123" |
| `\s` | Espacio | `/\s+/` → " " |
| `+` | Una o más | `/a+/` → "aaa" |
| `*` | Cero o más | `/a*/` → "" o "aaa" |
| `?` | Opcional | `/colou?r/` → "color" o "colour" |
| `{n,m}` | Entre n y m | `/a{2,4}/` → "aa", "aaa", "aaaa" |
| `^...$` | Todo el string | `/^\d+$/` → solo números |
| `[ ]` | Uno de estos | `/[abc]/` → "a" o "b" o "c" |

---

## 🎈 CONSEJOS DE MENTOR

1. **Empieza simple**: no intentes escribir una regex perfecta al primer intento. Ve por partes.
2. **Prueba siempre**: usa [regex101.com](https://regex101.com) o la consola del navegador para probar tus patrones en tiempo real.
3. **Comenta tus regex**: son difíciles de leer. Usa nombres descriptivos como `emailRegex`, `phoneRegex`, etc.
4. **Usa `.test()` para validar** y `.match()` para extraer.
5. **Escapa los caracteres especiales**: si quieres buscar un punto literal, escribe `\.`, no `.`. Lo mismo con `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, `|`, `^`, `$`.
6. **No sobrevalides emails**: la regex perfecta de email **no existe** (el estándar permite cosas rarísimas). La de esta guía es **suficientemente buena** para el 99% de los casos.
7. **Usa flags `i` y `g`** con cabeza:
   - `i` → si no te importan mayúsculas.
   - `g` → si quieres **todas** las coincidencias, no solo la primera.

---

## 📚 GLOSARIO

| Término | Significado |
|---|---|
| **Patrón** | La regex en sí (`/.../`) |
| **Coincidencia / Match** | Lo que el patrón encontró en el texto |
| **Flag** | Modificadores al final (`i`, `g`, `m`, `s`) |
| **Ancla** | `^` y `$`, fijan inicio/fin |
| **Grupo** | `( )`, agrupa sub-patrones |
| **Lookahead** | `(?=...)`, verifica sin consumir |
| **Escape** | `\.` para tratar como literal |
| **Case-sensitive** | Distingue mayúsculas (default) |

---

¡Espero que esta guía te sirva de referencia para siempre! 📚✨ Recuerda: las Regex no se memorizan, se **practican**. Empieza por las validaciones simples (email, teléfono) y ve subiendo. Y si te frustras, recuerda el cuento del detective: **cada símbolo es una regla de tu investigación**. 🕵️‍♀️🔍

¿Quieres que te proponga 3 ejercicios progresivos para practicar? 🚀