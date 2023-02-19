//  impuesto+envio
const costoenvio = 0.76;



// precio bruto del pedido
let precioBruto = Number(
    prompt("Ingresa el precio bruto de tu pedido (sin impuestos):")
);


// Verifica si el valor que puso es valido o mayor que 0
while (isNaN(precioBruto) || precioBruto <= 0) {
    precioBruto = Number(
    prompt("El precio de tu pedido debe ser mayor que cero. Ingresa un precio válido:")
);
}


// Calcula el costo de envio + impuestos
const impuesto = precioBruto * costoenvio;


// Calcula el precio final que tenes que abonar
const precioNeto = precioBruto + impuesto;


// Imprime el resultado 
alert(`El precio final es: ${precioNeto}`);


// Verifica si el precio total es mayor que $100000
if (precioNeto > 100000) {
    alert(
    "El precio total supera los $100000. Estas seguro que deseas continuar con la compra? :/."
    );
} else {
    alert(
    "El precio total no supera los $100000. Mandale Mecha!."
);
}

