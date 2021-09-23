/* alert("Hola mundo segunda forma"); */

console.log("Hola mundo desde consola");
document.write("<h1>Hola mundo desde JavaScript</h1>");

// tipos de datos: String, Number,Boolean

var nombre='Jeimy';
let correo='jeimynataliaolarte@gmail.com';
const mayor = 18;
//utilizar mejor let, porque permite controlar el alcance de las variables
let  edad=19;
let altura=1.85;
let extranjero=false;

let mensaje="Hola, soy "+nombre+" mi correo"+
 " es "+correo+", tengo "+edad+" años";

nombre= prompt("Escriba su nombre...");
correo = prompt("Escriba su correo...");
edad = parseInt(prompt("Escriba su edad..."));
altura = parseFloat(prompt("Escriba su Altura..."));

let mensaje2=`Hola, soy ${nombre} mi correo es
 ${correo}, tengo ${edad} años mido ${altura} metros`;
 
//let variable="variable con let";
if(edad>mayor){
        mensaje2+=`, soy mayor de edad`;
    }else if(edad<mayor){
        mensaje2+= `, soy menor de edad`;
    }else{
    mensaje2+=`, tengo 18`;
}

//alert(variable);

document.write("<h4>"+mensaje2+"</h4>");
console.log("<h2>"+mensaje2+"</h2>")



