let topping = prompt("Ingrese el topping deseado");
let precio;
let precioFinal;
let helado = 200;

if(topping == "Oreo" || topping == "oreo" || topping == "OREO")
{precio = 10;
 precioFinal = helado + precio;
 console.log("El helado cuesta $" + precioFinal)}
else if(topping == "KitKat" || topping == "kitkat" || topping == "Kitkat" || topping == "KITKAT")
{precio = 15;
 precioFinal = helado + precio;
 console.log("El helado cuesta $" + precioFinal)}
else if(topping == "Kinder" || topping == "kinder" || topping == "KINDER")
{precio = 25;
 precioFinal = helado + precio;
 console.log("El helado cuesta $" + precioFinal)}
else{console.log("No tenemos ese topping.")}


