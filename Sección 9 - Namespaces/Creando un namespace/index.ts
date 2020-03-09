/* Namespace es una agrupación de funciones y propiedades que está de manera global.
Los conjuntos son un tema específico.
Es como una clase en dónde todos sus métodos son estáticos. */
namespace Validaciones {

  export function validarTexto(texto:string):boolean {

    if(texto.length > 3) {

      return true;

    }

    return false;

  } /* Por defecto, las funciones están bloqueadas, es decir, sólo accesibles desde
  el namespace.
  Si se quiere permitir el acceso, se utiliza el export. */

  export function validarFecha(fecha:Date):boolean {

    if(isNaN(fecha.valueOf())) {

      return false;

    }

    return true;

  }

}

console.log(Validaciones.validarTexto('Hal Jordan'));
