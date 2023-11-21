"use strict"

//preguntar el nombre al usuario y saludarlo  por su nombre 


/* Preguntar nombre al usuario y saludarlo por su nombre.
Si el usuario no escribe su nombre saludar: "Hola, desconocido."
*/
// ejercico de prueba
/*
const nombre = prompt("Por favor escriba su Nombre: ");
if (nombre){
    alert("Hola" + " " + nombre);}
else{
    alert("Hola" + " " + "Desconocido" );

} */



/* Preguntar nombre al usuario y saludarlo por su nombre.
Si el usuario no escribe su nombre saludar: "Hola, desconocido."
*/

/*
const nombre = prompt("Por favor ingrese su nombre:");
if (nombre) {
  document.write("Hola" + nombre);
} else {
  document.write("Hola, desconocido.");
} */



const nombre1 = prompt("Por favor escriba su Nombre: ");
const apellido = prompt("Por favor escriba su Apellido: ");

//function saludar() {
//    console.log("Hola" + " " + nombre1 + " " + apellido)}
 //saludar()
 /*
 function saludo2(){
    return "Hola" + " " + nombre1 + " " + apellido;
 }
 const respuesta = saludo2();
 console.log(respuesta);

 */
function saludo3(nombre1 = "deconocido ", apellido =" " ){
    return "Hola" + " " + nombre1 + " " + apellido;
 }
console.log(saludo3())

/*1. Preguntar nombre y apellido al usuario y saludarlo por su nombre y apellido.
const nombre1 = prompt("Por favor escriba su Nombre: ");
const apellido = prompt("Por favor escriba su Apellido: ");
alert("Hola" + " " + nombre1 + " " + apellido); */


// 2.Preguntar al usuario si desea continuar y saludarlo o despedirlo
/*const preguntar = prompt("Acepta continuar")
if(preguntar){alert("Hola Bienvenido")}
else{alert("Adios")} */

//const nombre = prompt("Por favor escriba su Nombre: ");
//console.log ("Hola" + " " + nombre);
//alert("Hola" + " " + nombre);

//3. Leer nombre y mostrar si es mayor de edad o no
/*let nombre= prompt("Cual es tu nombre?")
let edad= prompt("Cuantos años tienes?")
if (edad>=18) {alert("eres mayor de edad")}
else {alert("eres menor de edad")} */

//4. Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.

/*
const rol= "vendedor";

switch (rol) {
    case "administrador":
        console.log("Dirijase a la gerencia");
        break;
    case "vendedor":
        console.log("dirijase a gerencia Comercial");
        break;

    case "cliente":
        console.log("Bienvenido a nuestra tienda");
        break;
    default:
        console.log("No estas registrado, vaya a recepción" );
        break;
}
*/

//5. Leer un número, mostrar el doble de n

/*
let numero1=10;
let numero2=2;
console.log(numero1 + numero1); 
*/

 /*

// 6. Leer un número, mostrar la mitad de n.
let numero1=30;
let numero2=2;
console.log (numero1/numero2); */


//7. Leer un número, mostrar si es positivo, negativo o cero.
/*
let numero = prompt("ingrese un número ");
if(numero == 0){
    document.write (numero + " es un número neutral");
}
else if (numero > 0){
    document.write(numero + " es un número Positivo");
}
else{
    document.write(numero + " es un número negativo");
    }
    */
   

// 8. Leer un número, mostrar si es par o impar.

/*
let numero = prompt("ingresa un número");
if(numero % 2==0){
    document.write("El número "+ numero +" es par");
}else{document.write("El número "+numero + " es impar");
}
*/

// 9. Leer dos números, mostrar el mayor.
/*
let numero1 = prompt( "ingresa un numero");
let numero2 = prompt( "ingresa otro numero");
if (numero1 >= numero2){
    document.write("el número mayor es: " + numero1);
}
else{document.write("el número mayor es: "+ numero2);
}
*/

// 10. Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).
/*
const numero1 = parseInt(prompt("ingresa un número"));
const numero2 =parseInt(prompt("ingresa otro número"));


let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero2;
let divide= numero1 / numero2;
let modo= numero1 % numero2;
let cuadrado= numero1 **numero2;


document.write("el valor de la suma es: " +suma);
document.write("el valor de la resta es: "+ resta);
document.write("el valor de la multiplicaciones: " +multi);
document.write("el valor de la división es: "+ divide);
document.write("el valor del residuo es: "+ modo);
document.write("el valor al cuadrado es: "+ cuadrado);
*/


// Leer dos números, mostrar la suma dividido en la resta.
/* no me salio 
const numero1 = 8
const numero2 = 4;
const numero3 = 2;
const numero4 = 3;
console.log = (numero1+numero2/)

*/
