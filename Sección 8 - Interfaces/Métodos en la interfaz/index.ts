interface Xmen {

  nombre:string,
  regenerar(nombreReal:string):void;// Método obligatorio.

}

function enviarMision(xmen:Xmen) {

  console.log('Enviar a ' + xmen.nombre);
  xmen.regenerar('Logan');

}

function enviarCuartel(xmen:Xmen) {

  console.log('Enviar a ' + xmen.nombre);

}

let wolverine: Xmen = {

  nombre: 'Wolverine',
  regenerar(x:string):void {

    console.log(`Se ha curado ${ x }.`);

  }

}

enviarMision(wolverine);
