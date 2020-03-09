interface Xmen {

  nombre:string,
  poder?:string, // Con el signo ? es para volver una propiedad opcional.

}

function enviarMision(xmen:Xmen) {

  console.log('Enviar a ' + xmen.nombre);

}

function enviarCuartel(xmen:Xmen) {

  console.log('Enviar a ' + xmen.nombre);

}

let wolverine: Xmen = {

  nombre: 'Wolverine',
  poder: 'Regeneración',

}

enviarMision(wolverine);
