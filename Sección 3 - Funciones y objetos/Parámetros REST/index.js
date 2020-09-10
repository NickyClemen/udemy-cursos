function fullNombre(nombre) {
    var otrosParam = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otrosParam[_i - 1] = arguments[_i];
    }
    return nombre + " " + otrosParam.join(' ');
}
var superman = fullNombre('Clark', 'Joseph', 'Kent');
var batman = fullNombre('Bruce', 'Wayne');
console.log(superman);
console.log(batman);
