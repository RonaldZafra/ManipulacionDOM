// Se leen los elementos de HTML
const h1 = document.querySelector('h1')
const form = document.querySelector('#formulario')
const inputOne = document.querySelector('#calculo1');
const inputTwo = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

// --------- 4. Escuchar eventos ----------
// Una de las formas de escuchar eventos de HTML desde JS es con el atributo onclick para button o onchange para input

/*
function btnOnclick (){
    const suma = inputOne.value + inputTwo.value; 
    result.innerText = "Resultado: "+suma;
}
*/

// --------- 5. addEventListener -----------
//button.addEventListener('click', btnOnclick); //Escuchar evento del BOTON

/*form.addEventListener('submit', sumarInputsValues); //Escuchar evento del FORMULARIO

function sumarInputsValues(event){
    //console.log({event});
    event.preventDefault(); //No se ejecuta la recarga de la pagina
    const suma = inputOne.value + inputTwo.value; 
    result.innerText = "Resultado: "+suma;
}*/

button.addEventListener('click', sumarInputsValues); //Escuchar evento del FORMULARIO

function sumarInputsValues(event){
    //console.log({event});
    //event.preventDefault(); //No se ejecuta la recarga de la pagina
    const suma = inputOne.value + inputTwo.value; 
    result.innerText = "Resultado: "+suma;
}
