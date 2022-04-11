let contenedor = document.querySelector('textarea');
let contadorLetras = document.querySelector('span');
let contadorPalabras = document.querySelector('p');
let totalFrase = [];
let contador;
console.log(totalFrase);
contenedor.addEventListener('input', function() {
    contadorLetras.innerHTML = `Letras: ${contenedor.value.length}`;
    totalFrase = contenedor.value.split(" ");
    console.log(totalFrase);
    for (i = 0; i < totalFrase.length; i++) {
        console.log(totalFrase);
        contador = totalFrase.filter(elemento => elemento !== '');
        contadorPalabras.innerHTML = `Palabras: ${contador.length}`;
    }
});