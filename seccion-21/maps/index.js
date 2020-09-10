/* Maps: Lista de valores con key-value. Puede ser cualquier tipo de dato. Comparte método con los sets. */
let cliente = new Map();
// Pasar valores por default.
const paciente = new Map([['Nombre', 'Paciente'], ['Habitación', 'No definido']]);

paciente.set('Nombre', 'Ivan');
paciente.set('Habitación', 206);

paciente.forEach((paciente, index) => console.log(`${ index } - ${ paciente }`));

// Agregar valor.
cliente.set('Nombre', 'Nicole');
cliente.set('Apellido', 'Ordoqui');
cliente.set('Tipo', 'Premium');

console.log(cliente);
console.log(paciente);

// Acceder a los valores del map. Se pasa la key.
console.log(cliente.get('Nombre'));
// Tamaño del map.
console.log(cliente.size);
// Si hay un valor en el map.
console.log(cliente.has('Tipo'));
// Borrar una propiedad.
console.log(cliente.delete('Nombre'));
// Si hay un valor en el map.
cliente.clear();

