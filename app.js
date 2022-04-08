let contenedor = document.querySelector('textarea');
let contadorLetras = document.querySelector('span');
let contadorPalabras = document.querySelector('p');
let totalFrase;
contenedor.addEventListener('input', function() {
    contadorLetras.innerHTML = `Letras: ${contenedor.value.length}`
    let palabras = contenedor.value.split(" ")
    totalFrase = palabras
    if (!palabras.includes('')) {
        contadorPalabras.innerHTML = `Palabras: ${totalFrase.length}`
        console.log(totalFrase);
        console.log('Largo de contenedor vacío: ', contenedor.value.length);
    }
});