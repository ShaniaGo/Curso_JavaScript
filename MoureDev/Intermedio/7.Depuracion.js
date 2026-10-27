/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}

console.log(divide(5, 5))


// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución