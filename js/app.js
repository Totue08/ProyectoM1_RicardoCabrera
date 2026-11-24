let generar = document.querySelector('#generarBtn');
let cantidadpalette = document.querySelector('#cantidadColores');
let palette = document.querySelector('.palette');

function generarColorHEX() {
    let caracteres = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * caracteres.length);
        color += caracteres[aleatorio];
    }

    return color;
}

function copiarColor(color) {
    navigator.clipboard.writeText(color);
    alert('¡Has copiado el código de color ' + color + '!');
}

function paletaColores() {
    palette.innerHTML = '';

    for (let i = 0; i < cantidadpalette.value; i++) {

        let color = generarColorHEX();

        palette.innerHTML += `
            <article class="color-card">
                <div class="color-box" style="background-color: ${color}"></div>
                <p class="codigoHEX">${color}</p>
            </article>
        `;
    }
}

palette.addEventListener('click', function(event) {

    if (event.target.classList.contains('codigoHEX')) {
        copiarColor(event.target.textContent);
    }

});

generar.addEventListener('click', paletaColores);