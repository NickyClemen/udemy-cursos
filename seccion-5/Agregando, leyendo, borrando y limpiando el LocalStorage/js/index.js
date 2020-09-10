/* Local Storage: Almanenamiento en el navegador. Se borra cuando se limpia el cache. */
// Agregar.
localStorage.setItem('Nombre', 'Nicole'); // Es key-value pair.

/* Eliminar.
localStorage.removeItem('Nombre'); // Solamente el key. */

// Obtener valor.
let nombre = localStorage.getItem('Nombre'); // Solamente el key.
console.log(nombre);

// Limpiar el LocalStorage.
localStorage.clear();

// Agregar a SessionStorage. Se borra todo cuando se cierre el browser.
sessionStorage.setItem('Nombre', 'Nicole');