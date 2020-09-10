function fullNombre(nombre:string, ...otrosParam:string[]):string { 

    return `${ nombre } ${ otrosParam.join(' ') }`;   

} 

let superman:string = fullNombre('Clark', 'Joseph', 'Kent');
let batman:string = fullNombre('Bruce', 'Wayne');

console.log(superman);
console.log(batman);

