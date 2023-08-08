//integrante: michelle xiomara molano bohorquez, Karol Tatiana Garzón Beltran 
/*4.Leer 3 números, determinar el mayor de los 3 e imprimirlo.*/

'use strict';

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

let mayor = numero1; 

if (numero2 > mayor) {
    mayor = numero2; 
}

if (numero3 > mayor) {
    mayor = numero3;
}

alert("El número mayor es: " + mayor);
