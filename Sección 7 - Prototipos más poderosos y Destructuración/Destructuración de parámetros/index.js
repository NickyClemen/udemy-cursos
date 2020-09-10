/* function crearJugador(nickname, opciones) {

    opciones = opciones || {};

    let hp = opciones.hp;
    let sp = opciones.sp;
    let clase = opciones.clase;

    console.log(nickname, hp, sp, clase);

} */

function crearJugador(nickname, { hp, sp, clase } = { hp: 100, sp: 50, clase: 'Mago' }) {



    console.log(nickname, hp, sp, clase);

} // { hp, sp, clase } = { hp: 100, sp: 50, clase: 'Mago' } -> Parámetros opcionales destructurados.

crearJugador('Strider', {

    hp: 500,
    sp: 100,
    clase: 'Warrior',

});
