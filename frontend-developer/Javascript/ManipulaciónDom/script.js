/**
 * Solo funciona si se ejecuta js desde el navegador, porque desde NodeJs es para backend y alli no hay conexión con HTML
 * querySelector solo elige al primer elemnto que cumpla con lo requerido
 * querySelectorAll los elige todos
 */
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

//Con estos metodos no es necesario especificar si es clase o id con . o #
const parrafo = document.getElementsByClassName('parrafo');
const pId  = document.getElementById('parrafoId');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pId,
    input,
});

//Permite ingresar código html malisioso por parte de los usuarios
    //h1.innerHTML = 'Cambio de texto <br> desde JS';
//Esta pasa todo a texto incluso lo que es HTML
h1.innerText = 'Cambio de texto <br> desde JS';

//Leer atributos de nuestro elemento
console.log(h1.getAttribute('pantalla'));
/* El cambio de clase se ve desde el inspector
Primero se indica el atributo a cambiar y luego su nuevo valor*/
    //h1.setAttribute('pantalla', 'rojo');

//añadir y eliminar clases, solo funciona cuando la clase esta nombrada como class
h1.classList.add('azul', 'morado');
h1.classList.remove('azul');

//Cuando hay eventos. Quitar y poner clase
h1.classList.toggle('azul');

//Devuelve true o false si contiene la clase que se le indica
h1.classList.contains('azul');


//Asignar un valor por defecto desde JS, pero el usuario aún lo puede modificar
input.value = "42359"

//Crear elemento HTML desde JS
console.log(document.createElement('img'));

//Crearlo y que se vea en la pagina
const img = document.createElement('img');
img.setAttribute('src', 'https://png.pngitem.com/pimgs/s/532-5325601_stickers-tumblr-en-blanco-y-negro-on-log.png');
console.log(img);

//vaciar el parrafo
    //pId.innerHTML = "";
pId.appendChild(img);
