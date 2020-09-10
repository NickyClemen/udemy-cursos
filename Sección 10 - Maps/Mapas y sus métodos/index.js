// Declarar un map.
let mapa = new Map();

// Agregar datos al map.
mapa.set('nombre', 'Nicole');
mapa.set('edad', 28);
/* Se puede ingresar cualquier tipo de dato. 
Si no se inicializa un valor, queda undefined. 
Permite ingresar valores que no son key pair. */

// Obtener una propiedad.
console.log(mapa.get('nombre'));

// Verificar si una key existe.
console.log(mapa.has('nombre'));

// Eliminar.
console.log(mapa.delete('edad'));

// Eliminar todo el contenido.
console.log(mapa.clear());

console.log(mapa);
console.log(mapa.size);