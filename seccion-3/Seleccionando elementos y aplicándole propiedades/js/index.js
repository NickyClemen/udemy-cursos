let elemento;

// getElementById.
elemento = document.getElementById('encabezado');
/* .id: Se accede al id. 
.className: Se accede al texto.
.textContent: Reporta el texto del elemento.
.innerText: Ídem de textContent. */

// Cambiarle el estilo por JS.
elemento.style.background = '#333';
elemento.style.color = "#fff";
elemento.style.padding = '20px';
elemento.textContent = 'Los mejores cursos';
elemento.innerText = 'Los mejores cursos en línea';


console.log(elemento);