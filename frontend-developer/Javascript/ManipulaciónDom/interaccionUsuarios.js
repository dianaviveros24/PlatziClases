const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* //Se le indica que evento escuchar y que funcion ejecutar
btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
 */

 form.addEventListener('submit', sumarInputsValues);
// Con preventDefault se evita recarcar la pagina automaticamente
function sumarInputsValues(e) {
    //console.log({e});
    e.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
} 

    /* // Otra forma de resolverlo es ejecutar la función del click
    form.addEventListener('click', sumarInputsValues);
    function sumarInputsValues(e) {
        //console.log({e});
        //e.preventDefault();
        const sumaInputs = Number(input1.value) + Number(input2.value);
        pResult.innerText = "Resultado: " + sumaInputs;
    }

    //En html, por defecto los botones son submit, al cambiar a tipo button y usar su evento click ya se previene la recarga automatica
    //Si no le especificamos a dónde ni con qué método, el formulario asume que es en la misma ruta y con el método GET, por eso s recarga la página.
    //<button type="button" id="btnCalcular">Calcular</button>
 */