const productos = [
    {
        name : "Zanahoria",
        price : 2000,
        amount : 4,
        category: "Verduras",
        img : "img/zanahoria.jpg"
    },

    {
        name : "Lechuga",
        price : 5000,
        amount : 5,
        category :"Verduras",
        img : "img/lechuga2.jpg"
    },

    {
        name : "Pollo",
        price : 11500,
        amount : 3, 
        category : "Carne",
        img : "img/pollo.jpg"
    }, 

    {
        name : "Cerdo",
        price : 15000,
        amount : 2,
        category : "Carne",
        img : "img/cerdo.jpg"
    },

    {
        name : "Manzana",
        price : 2000,
        amount : 8,
        category : "Frutas",
        img : "img/manzana.jpg"
    },

    {
        name : "Mandarina",
        price : 1500,
        amount : 8,
        category : "Frutas",
        img : "img/mandarina.jpg"
    }
]

//Funcion, insertar productos en el contenedor Main

const printProducts = (listProducts, container) => {
    container.innerHTML = '';//Vaciar contenedor

    productos.forEach(product => {
        const article = document.createElement('article');
        article.classList.add("main__card");
        console.log(article.classList);
        article.innerHTML = `
        <figure class="card__image">
                    <img src=${product.img} alt="${product.name}">
                    <h4>Nombre: <span>${product.name}</span></h4>
                    <h4>Precio: <span>${product.price}</span></h4>
                    <h4>Cantidad: <span>${product.amount}</span></h4>
                    <h4>Categoria: <span>${product.category}</span></h4>
                </figure>
                `;
        container.appendChild(article);
    });
    
}

//Capturarel contenedor donde queremos pintar las cards de Products

const main = document.querySelector('.main');
console.log(main);

const contenedorCards = document.getElementById("contenedorCards");
console.log(contenedorCards);

printProducts(productos, contenedorCards);