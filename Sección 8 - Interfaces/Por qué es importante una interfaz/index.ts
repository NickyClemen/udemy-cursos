function enviarMision(xmen:any) {

  console.log('Enviar a ' + xmen.nombre);

}

let wolverine: { nombre:string, poder:string } = {

  nombre: 'Wolverine',
  poder: 'Regeneración',

}

enviarMision(wolverine);
