
import { product } from "../data.js";

let productos = sessionStorage.getItem("productos") ? JSON.parse(sessionStorage.getItem("productos")) : [];
console.log(productos);
const printProducts = (listProducts, container) => {
    listProducts.forEach((productos) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerHTML = `
        <td>${productos.name}</td>
        `;
        const td2 = document.createElement('td');
        td2.innerHTML = `<td>${productos.price}</td>
        `;
        const td3 = document.createElement('td');
        td3.innerHTML = `<td>${productos.amount}</td>
        `;
        const td4 = document.createElement('td');
        td4.innerHTML = `<td>${productos.category}</td>
        `;
        const update = document.createElement('td','button');
        update.innerHTML= `<button id="bActualizar">${"Actualizar"}</button> <button id="bEliminar">${"Eliminar"}</button> `;
        update.setAttribute("id", "update", "id", "delete");
    container.appendChild(tr);
    container.appendChild(td1);
    container.appendChild(td2);
    container.appendChild(td3);
    container.appendChild(td4);
    container.appendChild(update);
    });
}

const containerTable = document.getElementById("containerTable");
console.log(containerTable);


document.addEventListener("DOMContentLoaded", () => {
    //Estaba aqui el sessionStorage del inicio.
    if(productos.length === 0){
        sessionStorage.setItem("productos", JSON.stringify(product));
        productos = JSON.parse(sessionStorage.getItem("productos"));
        console.log(productos);
    } 
    
    printProducts(productos, containerTable);
})

