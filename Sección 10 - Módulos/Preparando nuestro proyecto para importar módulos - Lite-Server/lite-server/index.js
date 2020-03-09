"use strict";
exports.__esModule = true;
var numeros_1 = require("./validaciones/numeros");
// No se necesita especificar porque es un módulo por defecto. Alias apunta al módulo por defecto.
var textos = require("./validaciones/textos");
// Al poner el 'as', se le da un alias al import.
console.log(numeros_1["default"](10, 5));
console.log(textos.obtenerError(10));
/* Montar un servidor para llamar archivos externos y evitar bloqueos.
En el root, se pone
  npm init (Crea un package.json)

Instalar live-server
  npm install lite-server --save-dev

Instalar systemjs
  npm install systemjs@0.19.41

  En el HTML.
  <script src="./node_modules/systemjs/dist/system.js" charset="utf-8"></script>
  SystemJS.config({

  baseURL: "/",
  defaultJSExtensions: true

  });

  SystemJS.import('index.js');

  Notas importantes usando módulos.
    1) De tiene que excluir la carpeta node_modules para que no efecte la compilación. */
