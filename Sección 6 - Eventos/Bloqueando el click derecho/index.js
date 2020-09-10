// Bloquear el click derecho.
document.onmousedown = function(arg) {
// onmousedown -> Cuando una persona presiona el botón del mouse.
    if (arg.button === 2) {
        
        alert('No se puede hacer click derecho');
        return;

    }

    console.log('No hay problema.');

} 

// Obtener selección de texto. 
document.onmouseup = function() {
// onmouseup -> Cuando una persona suelta el mouse.

    var texto = window.getSelection().toString();

    console.log(texto);

}
