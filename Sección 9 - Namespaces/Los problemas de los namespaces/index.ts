// Import de un namespace. Al hacerlo así, se importan todas las funciones y propiedades.
/// <reference path="./validaciones/textos.ts" />
/// <reference path="./validaciones/fechas.ts" />


/* Problemas:
    1) Si no se importa primero el namespace, las funciones no funcionan. Da errores.
    2) Son muy útiles para trabajos de mediana y pequeña escala. Cuando ya son grandes,
    es mejor usar módulos. */

if(Validaciones.validarTexto('Hal Jordan')) {

  console.log('El texto es válido.');

}
