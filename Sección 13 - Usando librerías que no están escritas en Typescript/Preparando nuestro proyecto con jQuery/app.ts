import 'jquery';
import 'sweetalert';

console.log("Hola mundo");

$('#botAlerta').on('click', function() {

  swal("Oops", "Something went wrong!" , "error");

});

/* DefinitelyTyped
Instalar las definciones con Node.
  npm install --save-dev @types/jquery */
