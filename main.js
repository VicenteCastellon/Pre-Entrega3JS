/**

let usuarioName = "";

while (usuarioName === "") {
    usuarioName = prompt("Hola ¿cómo te llamas?");

    if (usuarioName === "") {
        alert("No ingresaste el nombre de usuario. Por favor, inténtalo de nuevo.");
    } else {
        alert("Nombre de usuario ingresado: " + usuarioName);
        usuarioName = prompt("bienvenido  " + usuarioName +  ", a continuacion te haremos unas preguntas para conocer un poco mejor que haces aqui (Responde con 'okay')")
    }
}

let saberMas = "";

while (saberMas.toLowerCase() !== "si" && saberMas.toLowerCase() !== "no") {
    saberMas = prompt("¿Quieres aprender sobre cómo funciona nuestra empresa y lo que hacemos? Elige una opcion: \n1.si\n2.no");
    
    if (saberMas.toLowerCase() !== "si" && saberMas.toLowerCase() !== "no") {
        alert("Por favor, responde con 'si' o 'no'.");
    }else{
        
    }
}

if (saberMas.toLowerCase() === "si") {
    let interes = "";
    
    while (interes !== "1" && interes !== "2" && interes !== "3") {
        interes = prompt("Que bien, ¿estás interesado en invertir o solo vienes aquí a aprender un poco más? Elige una opción:\n1. Estoy interesado en invertir\n2. Solo quiero aprender\n3. Me gustaría buscar trabajo en esta empresa");

        if (interes === "1" || interes === "2" || interes === "3") {
            alert("¡Genial! Estamos emocionados de saber qué piensas sobre lo que hacemos.");
        } else {
            alert("Por favor, elige una opción válida (1, 2 o 3).");
        }
    }
} else {
    alert("¡No hay problema! Estamos aquí si cambias de opinión.");
}
*/



// Array de objetos para los productos
const productos = [
    {
        nombre: "Producto 1",
        descripcion: "Alta calidad y excelente rendimiento.",
        precio: "$49.99",
        img: "assets/producto1.png"
    },
    {
        nombre: "Producto 2",
        descripcion: "Perfecto para uso diario.",
        precio: "$29.99",
        img: "assets/producto2.png"
    },
    {
        nombre: "Producto 3",
        descripcion: "Innovador y eficiente.",
        precio: "$99.99",
        img: "assets/producto3.png"
    }
];


function renderProduct(productos) {
    let container = document.getElementById('productosContainer'); 
    container.innerHTML = ''; 


    productos.map(producto => {
        let card = `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="text-primary font-weight-bold">${producto.precio}</span>
                        <button class="btn btn-primary btn-sm">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += card; 
    });
}


document.addEventListener('DOMContentLoaded', () => renderProduct(productos));











