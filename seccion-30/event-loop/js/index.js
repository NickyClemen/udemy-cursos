/* Event loop: En el stack están las tareas de mayor prioridad. Después se ejecuta lo que está en el queue.
setTimeout es non-blocking (task queue). 
Las promises son job-queue, que tienen una prioridad más alta que el task queue.
Javascript es de un solo hilo. */
console.log('Primero');
setTimeout(() => console.log('Segundo'), 3000);
console.log('Tercero');
setTimeout(() => console.log('Cuarto'), 0);
new Promise(function(response) {
    response('Promise');
}).then(console.log);
console.log('Quinto');
