// console.log("Eventos del DOM")

let button = document.getElementById("boton");
let input = document.querySelector('#entrada')



// button.addEventListener(
//     'click', () => { console.log('Me Hiciste Click')
// });

button.addEventListener('click',
    function alerta(){
        console.log('No me toque Sapo');
    }
)

button.addEventListener('dblclick',
    function alerta(){
        console.log('doble no me toque Sapo');
    }
)
input.addEventListener('mouseenter',
    function alerta(){
        console.log('Entraste a la zona del input');
    }
)
