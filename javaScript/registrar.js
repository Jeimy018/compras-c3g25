

/*
for (let i = 0; i < 5; i++) {
    
    
} */

/* for (let elemento of listaProductos) {
    document.write(`Dato ${elemento}`);
    document.write("</br>");
} */

/* while (){

    break;
} */

/* do {
    
} while (condition); */

//alert(`Cantidad de elemento: ${listaProductos.length}`);

/* listaProductos.pop();
listaProductos.push("Mouse");

listaProductos[5]="Pantalla";

let cadena = listaProductos.join("");

document.write(cadena);

listaProductos.splice(1,1);
console.log(listaProductos); */

let listaProductos = ["Disco duro", "Teclado", "Memoria", "Pantalla", "Mouse"];
let valoresProductos =[200000, 100000, 80000, 800000, 50000];

let cliente =prompt("Escriba el nombre del cliente...");
let documento = prompt(`Ecriba el documento de ${cliente}...`);
let menu="";

for (const i in listaProductos) {
    menu += `${parseInt(i)+1}. ${listaProductos[i]} ($${valoresProductos[i]})\n`;
}

let seleccion = parseInt(prompt(`${menu}\nSeleccione el producto...`))
let cantidad = parseInt(prompt("Escriba  la cantidad que desaa llevar..."));
let envio = parseInt(prompt("Seleccione el tipo de envio 1.Express/2. Normal"));

let total=0;
let descuento=0;

let subtotal=valoresProductos[seleccion-1]*cantidad;
let nombresEnvio= ["Express", "Normal"];
let valoresEnvio= [20000, 10000];
let valorEnvio=0;

if(cantidad>10){
    descuento = subtotal*0.1;
}

    if(subtotal>5000000){
        if (envio==1) {
            valorEnvio=valoresEnvio[envio];    
        } else {
            valorEnvio=0;
        }
        descuento+=valoresEnvio[envio-1]-valorEnvio;
    }else{
        valorEnvio=valoresEnvio[envio-1];
    }

total = valorEnvio+subtotal-descuento;

document.write(`
<h2>Estimad@ ${cliente}, el resumen de su compra es:</h2>
    <ul>
        <li><b>Producto:</b>${listaProductos[seleccion-1]}</li>
        <li><b>Precio:</b>${valoresProductos[seleccion-1]}</li>
        <li><b>Cantidad:</b>${cantidad}</li>
        <li><b>Envio:</b>${nombresEnvio[envio-1]}</li>
        <li><b>Descuento aplicado:</b>$${descuento}</li>
    </ul>
    <h3>Total valor compra: $${total}</h3>
`);



