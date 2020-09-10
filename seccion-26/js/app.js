const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		marca: 'Audi', 
		modelo: 'A4', 
		year: 2018, 
		precio: 40000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico' 
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		marca: 'Audi',
		modelo: 'A6',
		year: 2010, 
		precio: 35000,
		puertas: 4,
		color: 'Negro', 
		transmision: 'automatico' 
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
		marca: 'Ford',
		modelo: 'Mustang', 
		year: 2019, 
		precio: 80000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual' 
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		marca: 'Audi',
		modelo: 'A3',
		year: 2017, 
		precio: 55000,
		puertas: 2, 
		color: 'Negro',
		transmision: 'manual' 
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2017,
		precio: 60000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual' 
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		marca: 'Audi',
		modelo: 'A4',
		year: 2016, 
		precio: 30000, 
		puertas: 4, 
		color: 'Azul',
		transmision: 'automatico' 
	}
];
/* Higher order function (array methods. Funciones para arrays). Función que toma de parámetro otra función. */

/* forEach. Lista todos los elementos de manera individual. Se ejecuta una vez por cada elemento en el array.
No hace falta pasar una posición. Se recomienda utilizar filter para extraer valores.
Accede a los valores, no crea un nuevo array.
let resultado = [];
autos.forEach(auto => {
	console.log(auto);

	if(auto.color === 'Rojo') {
		resultado.push(auto);
	}
});

console.table(resultado); */

/* map. Muy similar al forEach. Accede a los valores y retorna un array nuevo (el return es implícito).
Muy utilizado en React.
let resultado = autos.map(auto => {
	return auto;
});

console.table(resultado); */

/* filter. Cre un array basado en una prueba evaluada. No hace falta utilizar un if. El return es implícito.
// let resultado = autos.filter(auto => auto.marca !== 'BMW');
// let resultado = autos.filter(auto => auto.color === 'Rojo');
// let resultado = autos.filter(auto => auto.year === 2018);
// let resultado = autos.filter(auto => auto.year > 2015);
let resultado = autos.filter(auto => auto.year >= 2015 && auto.year <= 2017);

console.table(resultado); */

/* find. Parecida a filter. La diferencia, es que va a retornar el primer resultado que encuentre.
let resultado = autos.find(auto => auto.marca === 'BMW');
console.table(resultado); */

/* reduce. Toma todos los valores y retorna un valor único.
Toma dos parámetros:
	1) Valor previo.
	2) Valor total.
// let resultado = autos.reduce((total, auto) => total + auto.precio, 0);
const numeros = [1, 2, 3];
let resultado = numeros.reduce((total, numero) => total + numero, 0);
console.table(resultado); */

/* some. Evalúa una condición. Retorna un boolean. */
let resultado = autos.some(auto => auto.marca === 'BMW');
console.table(resultado);
