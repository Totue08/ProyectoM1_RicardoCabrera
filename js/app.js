
let generar = document.querySelector('#generarBtn');
let cantidadpalette = document.querySelector('#cantidadColores');
let palette = document.querySelector('.palette');

let paletasGuardadas = JSON.parse(localStorage.getItem('paletas')) || [];

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
    navigator.clipboard.writeText(color)
        .then(() => {
            alert('¡Has copiado el código de color ' + color + '!');
        });
}

function mostrarPaleta(colores) {
    palette.innerHTML = '';

    for (let color of colores) {
        palette.innerHTML += `
            <article class="color-card">
                <div class="color-box" style="background-color: ${color}"></div>
                <p class="codigoHEX">${color}</p>
            </article>
        `;
    }
}

function paletaColores() {
    let colores = [];

    for (let i = 0; i < cantidadpalette.value; i++) {
        let color = generarColorHEX();
        colores.push(color);
    }

    mostrarPaleta(colores);

    paletasGuardadas.push(colores);

    localStorage.setItem('paletas', JSON.stringify(paletasGuardadas));
}

palette.addEventListener('click', function(event) {
    if (event.target.classList.contains('codigoHEX')) {
        copiarColor(event.target.textContent);
    }
});

if (paletasGuardadas.length > 0) {
    mostrarPaleta(paletasGuardadas[paletasGuardadas.length - 1]);
}

generar.addEventListener('click', paletaColores);
