## Variables y operaciones

- ¿Qué es una variable y para qué sirve?
  Es un espacio reservado en memoria, usado para almacenar información dependiendo del tipo y estructura.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  Al declarar se asigna un nombre y espacio en memoria
  Inicializar una variable se le asigna un valor a la variable
  Se usa mas let y const porque var en casos especificos falla.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  Sumar numeros es adicionar valores a otros(matemática) y concatenar strings es unir cadenas de texto en un solo valor.

- ¿Cuál operador me permite sumar o concatenar?
  El operador + permite concatenar o sumar valores numericos.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

let nombre String
let apellido String
let username String
let edad Number
let mail String
let isAdult Boolean
let saveMoney Number
let debts Number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = "Juan";
let apellido = "Costa";
let username = "Juan Costa";
let edad = "21";
let mail = "juan@costa.mail";
let isAdult = true;
let saveMoney = 1200;
let debts = 200;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```
let nombreCompleto = nombre + apellido;
let realMoney = saveMoney - debts;
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
  Encapsular bloques de código que va a ser reutilizable y ejecutable en el futuro
  Conjunto de secuencias y tareas que se resuelven basado en la información que recibe

  un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida

- ¿Cuándo me sirve usar una función en mi código?
  Cuando tenemos variables o bloques de código muy parecidos (con cambios que pueden ser parametros y argumentos) que se pueden encapsular para reutilizar en el futuro.

  Mejorar y orednar la legibilidad del código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  Las funciones reciben parametros cuando las creamos y les enviamos argumentos cuando las ejecutamos.
  Parametros: variables que se le pasan a la funcion
  Argumentos: Datos que se le pasan a los parametros de una funcion

### 2️⃣ Convierte el siguiente código en una función, pero cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
//respuesta clase
function nombreCompleto(name, lastName){
     return name + ' ' + lastName
}

function saludo(name, lastName, username){
     const completeName = nombreCompleto(name, lastName);

     console.log("Mi nombre es " + completeName", pero prefiero que me digas" + userName);
}

//Mi respuesta
let persona = function (name, lastName, userName) {
     let completeName = name + lastName
     console.log("Mi nombre es " + completeName", pero prefiero que me digas" + userName);
}
```

### Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
  Un condicional es una sentencia que debe cumplirse para ejecutar el código que contiene
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  if, else, else if: Permite hacer validaciones distintas en cada validacion o condicional.

  swith: evalua la expresion y compara los case con la misma variable o condicion que definimos en el switch

- ¿Puedo combinar funciones y condicionales?
  Si se pueden combinar, se puede definir una condición y que cuando se cumpla de paso a la función

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

//con if else

```
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertePlus") {
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 

```
function consegirTipoSuscripción(tipoDeSuscripcion){
     if (tipoDeSuscripcion == "Free") {
          console.log("Solo puedes tomar los cursos gratis");
          return;
     } 

     if (tipoDeSuscripcion == "Basic") {
          console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
          return;
     } 

     if (tipoDeSuscripcion == "Expert") {
          console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
          return;
     } 

     if (tipoDeSuscripcion == "ExpertePlus") {
          console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
          return;
     }
     console.warn('Ese tipo de suscripción no existe')
}
```

```
const tiposDeSuscripciones = {
     free: 'Solo puedes tomar los cursos gratis',
     basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
     expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
     expertplus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion){
     if (tiposDeSuscripciones[suscripcion]){
          console.log(tiposDeSuscripciones[suscripcion]);
          return;
     }
          console.warn('Ese tipo de suscripción no existe')
}

```



## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
  bloque de codigo que se repite n veces, hasta que la condición determinada se cumpla
- ¿Qué tipos de ciclos existen en JavaScript?
  for, for on/in, while, do while
- ¿Qué es un ciclo infinito y por qué es un problema?
  un ciclo infinito es cuando el bloque de codigo se repite sin fin y eso puede ocupar mucho espacio en memoria
- ¿Puedo mezclar ciclos y condicionales?
  si se puede

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

//Respuesta
i = 0;
while (i < 5) {
console.log("El valor de i es: " + i);
i++;
}

let i = 10;
while (i >= 2) {
console.log("El valor de i es: " + i);
i--;
}

### Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```
let respuesta;
while (respuesta != '4') {
     let pregunta = prompt('¿Cual es el resultado de 2 + 2?')
     respuesta = pregunta;
}


 let respuesta = 0;
 do {
   let respuesta = prompt('¿Cual es el resultado de 2 + 2?')
   respuesta *= 1;
 } while (!(respuesta === 4))

```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
  conjunto de datos relacionados en forma de lista de cualquier tipo de dato
- ¿Qué es un objeto?
  conjunto de caracteristica de un objeto real, cadaelemento tiene una key
- ¿Cuándo es mejor usar objetos o arrays?
  Uso arrays cuando tengo un conjunto de objetos relacionados y objetos cuando necesito especificar las caracteristicas de cada uno de esos objetos
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  Si se pueden mezclar

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
var conjuntos = ["Casa 1", "Casa 2", "Casa 3"];

var filtrarConjuntos = function(conjuntos){
     console.log(conjuntos[0]);
}

function conocerConjuntos(conjunto){
     console.log(`Este conjunto esta integrado por la ${conjunto}`)
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function imprimirElementoPorElemento(conjuntos){
     for(var i = 0; i < conjuntos.length; i++){
     console.log(conjuntos[i]);
     }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
const obj = {
     tipo: 'Casa 1',
     habitantes: 2,
     color: 'blanca',
     cuartos: ['cocina', 'cuartos', 'lavadero'],
};

convertir en un array las propiedades de un objeto
function imprimirElementoPorElementoObjeto(obj) {
     const arr = Object.values(obj);
     for (let i = 0; i < arr.length; i++){
          console.log(arr[i])
     }
}

```
