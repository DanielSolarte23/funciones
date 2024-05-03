// function saludar (name){
//      return `Hola  ${name}sita`;
// }

// let sap = saludar("Jhon");
// console.log(sap);

//FUNCION ANONIMA SALUDAR

// let saludaraJuanita = function(nombre){
//     return `Hola ${nombre} como estas?`
// }
// console.log(saludaraJuanita("Juanita"));

// //FUNCION ANONIMA SUMA


// let suma = function (num1, num2) {
//     return `La suma de los numeros es ${num1 + num2}`
// }
// console.log(suma(5, 5));


// const daniel =(a,b) =>{

// }







// function saludo(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
// }

// saludo();


// function suma  (){
//     let num1 = 5;
//     let num2 = 10;
//     let resultado = (num1 + num2);
//     console.log(`la suma es ${resultado}`);
// }

// suma();

// function bienvenido (){
//     console.log("Hola, eres Bienvenido al ADSO");

//     return "Hola desde consola"; 
// }

// bienvenido();
// const bienve = bienvenido();

// console.log(bienve);

// function suma2 (a, b){
//     return a + b
// }

// let sum = suma2(5,8);
// console.log(sum);

// crar una funcion que me diga si un numero es primo o no


// const numeroPrimo = function (num){
//     if (num % 2 == 0 && num % 1 == 0){
//         return `El numero ${num} es primo`
//     }else{
//         return `El numero ${num} no es primo`
//     }
// }

// console.log(numeroPrimo(prompt("Ingrese un numero")))

//ESCRIBE UNA FUNCION QUE IMPRIMA LA TABLA DE MULTIPLICAR DEL NUMERO DADO

//primera forma

// function Multiplicar(numero) {
//     let por = [];
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       por.push(resultado);
//     }
//     return por;
//   }
  
//   let numero = parseInt(prompt("Ingresa un numero"));
//   let tabla = Multiplicar(numero);
//   tabla.forEach(function(resultado) {
//     console.log(resultado);
//   });


// //Segunda Forma

// function Multiplicar(numero1){
//     let poor = [1,2,3,4,5,6,7,8,9,10];

//     console.log(numero1 * poor[0]);
//     console.log(numero1 * poor[1]);
//     console.log(numero1 * poor[2]);
//     console.log(numero1 * poor[3]);
//     console.log(numero1 * poor[4]);
//     console.log(numero1 * poor[5]);
//     console.log(numero1 * poor[6]);
//     console.log(numero1 * poor[7]);
//     console.log(numero1 * poor[8]);
//     console.log(numero1 * poor[9]);
// }

// let mult = Multiplicar(5);

//EJERCICIO 4 

/* function imprimirNumerosPares(num) {
  for (let i = 2; i <= num; i += 2) {
    console.log(i);
  }
}
imprimirNumerosPares(50); */

// EJERCICIO 3

/* let promedio = function (n1, n2){
  return(n1 + n2) / 2;
}
console.log(promedio(10,5)); */

//EJERCICIO 6

/* const numeroMayor = function (n1, n2 , n3){
  if (n1 > n2 && n2 > n3) {
        return `El numero ${n1} es mayor el ${n2} es el medio y ${n3} el menor`;
    } else if (n1 > n3 && n3 > n2) {
        return `El numero ${n1} es mayor el ${n3} es el medio y ${n2} el menor`;
    } else if (n2 > n1 && n1 > n3) {
        return `El numero ${n2} es mayor el ${n1} es el medio y ${n3} el menor`;
    } else if (n2 > n3 && n3 > n1) {
        return `El numero ${n2} es mayor el ${n3} es el medio y ${n1} el menor`;
    } else if (n3 > n1 && n1 > n2) {
        return `El numero ${n3} es mayor el ${n1} es el medio y ${n2} el menor`;
    } else if (n3 > n2 && n2 > n1) {
        return `El numero ${n3} es mayor el ${n2} es el medio y ${n1} el menor`;
    }
} */

// console.log(numeroMayor(15,20,30));

//EJERCICIO 7


/* function generar_caracteres(n, caracter) {
    return caracter.repeat(n);
}
console.log(generar_caracteres(10, 'x')); */


//EJERCICIO 8

/* function sumarNumero (numeroo){
  let i = 1;
  let suma = 0;

  while (i <= numeroo){
      suma += i;
      i++;

    }
    return `La suma de los números enteros positivos desde 1 hasta ${numeroo} es: ${suma}`
}

let sum = sumarNumero(10);
console.log(sum); */

// EJERCICIO 9

/* function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = 0;
let intentos = 0;

while (numero !== 7) {
  numero = generarNumeroAleatorio(1, 10);
  intentos++;
}

console.log(`Se obtuvo un 7 después de ${intentos} intentos.`); */

// EJERCICIO 10

/* function numerosPares(num){
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
}

numpar = numerosPares(20);

console.log(numpar); */

// EJERCICIO 11

/* function num1a5 (num){
  if(num < 0 || num > 5){
    console.log('numero invalido');
    num1a5(parseInt(prompt('¡NUMERO INVALIDO! \n Ingrese un numero entre 1 y 5')))
  }else{
    console.log(`Su numero es ${num}`);
  }
}

num = num1a5(parseInt(prompt('Ingrese un numero entre 1 y 5')));

console.log(num); */

// EJERCICIO 12

/* function fibonacci() {
  let a = 0, b = 1, nume;

  console.log(a);

  for (let i = 1; i < 10; i++) {
      console.log(b);
      nume = a + b;
      a = b;
      b = nume;
  }
}

console.log(fibonacci()); */

// EJERCICIO 13

function contraseña (ingreso){
  let contra = "123";
  let salir = "salir"

  if(ingreso === contra){
    console.log('1. la contraseña es correcta');
  }else if(ingreso === "salir"){
    console.log('Saliendo...');
  }else{
    console.log('Contraseña incorrecta');
    contraseña(prompt(" 1. Ingrese la contraseña \n 2. salir").toLowerCase());
  }
}

contraseña(prompt("Ingrese la contraseña"));
