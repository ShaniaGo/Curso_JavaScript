//IIFE

/* es una función en JavaScript que se define y se ejecuta en el mismísimo instante en que se lee. 
No necesita que la llames después por su nombre como a las funciones normales.*/

(function() {
    console.log(`Me ejecute apenas me leyeron`)
})();

(() =>{
    console.log(`Esta es la version de arrow function`)
})();