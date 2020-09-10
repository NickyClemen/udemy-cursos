/* Window binding: Asignación a los atributos por el objeto global (window). */
function obtenerAuto() {
    console.log(`Mi auto es color ${ this.color }.`);
}

const color = 'negro';
window.color = 'negro';

obtenerAuto();
