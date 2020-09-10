interface Xmen {

  nombre:string,
  poder:string,

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
