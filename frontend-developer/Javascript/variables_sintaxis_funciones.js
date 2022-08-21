// Tipos primitivos
40   // Numeros 
3.14

 "Cadena de texto"  // Strings (cadenas de texto), Esto es la forma en la que puedo crear algo que se pueda imprimir en la pantalla, o escribir información, que el usuario pueda entender y leer. utilizar palabras, o frases.

 'Cadena de texto'

 true   // Booleanos, estos fueron inventados por George Boole, un Matemático británico. y esto hace referencia a cosas que podamos validar.
 false

 null   // Valores vacios (Empty values), es como un placeholder (espacio reservado para algun valor) de algún valor faltante.
 
 undefined

 
 // Tipos de objetos o no primitivo
 [1, 2, 3, 4] // corchetes // arrays
 { nombre: 'Nombre' }  // llaves // objetos


 /* ================================================================ */ 
 /* Variable es un lugar en memoria
Es una representación de algún lugar en la memoria para guardar datos
 */
var nombre = "Diego"; // Nombre apuntará en algún lugar en la memoria (nosotros no sabemos donde, pero eso no es importante), pero dirá la señal de = tomará ese string y lo guardará en ese lugar.  y después si queremos utilizar ese valor, utilizaremos la variable Nombre para pedir que nos traigan ese string de memoria.

// = es igual a operador de asignación 

var edad; // Declarar
edad = 30; // Inicializar 

var elementos = ['Computadora', 'Celular']; // Aquí la variable seleccionará toda una sección para los elementos del array, y después tendremos acceso a toda la sección destinada en memoria.

var persona = {   //Crear un objeto de igual forma para el objeto
    nombre: "Diego",
    edad: 30
}

console.log(elementos[2]); // consola es de igual forma una variable que le pertenece al navegador, con 





 /* ================================================================ */ 
// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.
// Tenemos dos tipo de funciones en js, function Declaration y function Expression 
// el nombre reservado de function y parametros que recibira esa function 

function miFuncion() { // function  Declarativas expresión 
    return 3; 
}
miFuncion(); // mandamos llamar la funcion

var miFuncion = function(a,b) {  // function Expression (también conocidas como funciones anónimas)
    return a + b;
}
miFuncion(); // mandamos llamar la variable como funcion

/** Es que las declarativas son definidias para usarse de forma posterior en cualquier momento de su llamado. Las de Expresión solo pueden ser invocadas hasta el momento posterior a su definición. */
/* ============================= */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}


function suma(a,b) {  // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
    var resultado = a + b; 
}

// Return, cómo regresamos un valor con una function. 



function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

function suma(a,b) {
    return a + b; 
}

suma(20, 30); 