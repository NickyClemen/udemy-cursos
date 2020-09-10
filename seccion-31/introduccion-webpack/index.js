/* Webpack es un bundler (paquete de módulos) para aplicaciones Javascript modernas. Procesa la aplicación y mapea todas
las dependencias de un módulo. Con esto, crea uno o varios paquetes o bundlers. 
Nativamente, JS soporta archivos js. Con Webpack, se pueden importar otras extensiones de archivos. 

Conceptos para entender mejot Webpack:
    1) Entry (entrada). Un punto de entrada que especifica qué módulo debe utilizar wWebpack para comenzar acrear la gráfica de
    dependencias. Webpack se encargará de saber qué dependencias tiene este módulo. Por lo general, el entry y al configuración
    se guardan en un archivo, aunque desde la versión 4 no es necesario.
    2) Output (salida). Le dice a webpack dónde se debe almacenar el bundler creado. Normalmente, entry está en una carpeta
    src/, mientras que el output está en dist/.
    3) Loaders (cargadores). Webpack sólo entiende archivos JS, pero con los loaders, se pueden carfar otros formatos como
    sass, less, imágenes, HTML. Gulp o Grunt no pueden importar archivos CSS.
    Hay dos plaabras clave:
        a) test: Le dice a Webpack los archivos que tienen que ser transformados.
        b) use: Le dice a Webpack qupe loader estamos utilizando en el archivo.
    4) Plugins (complemento). Los loaders permiten utilizat distintos tipos de módulos y formatos. Los plugims realizan 
    otro tipo de tares, tales como: Optimizar el bundlr, administración avanzada de assets. Se instalan vía NPM, y se
    importan al archivo Webpack con require(). */