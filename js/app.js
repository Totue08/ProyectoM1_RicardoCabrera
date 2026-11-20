let generar = document.querySelector('#generarBtn');
let cantidadpalette = document.querySelector('#cantidadColores')
let palette = document.querySelector('.palette');

function paletaColores(){
    palette.innerHTML = '';
    for (let i = 0; i < cantidadpalette.value; i++) {
            palette.innerHTML += `
            <article class="color-card">
                <div class="color-box"></div>
                <p>#FFFFFF</p>
            </article>
        `;
        }
};

generar.addEventListener('click', paletaColores);


