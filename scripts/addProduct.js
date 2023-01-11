const form = document.querySelector('.form');

let productos = sessionStorage.getItem("productos") ? JSON.parse(sessionStorage.getItem("productos")) : [];
console.log(productos);

form.addEventListener("submit", (event) => {
    //Este codigo evita la recarga de la pagina al evento asociado de Submit
    event.preventDefault();
    console.log('Esto es un Submit');
    console.log(event);
    //hasta aqui

    //Ahora vamos a capturar la informacion del formulario

    //Nos entrega un array con todos los elementos hijos del Form.
    const valuesForm = Object.values(form);
    console.log(valuesForm);

    //Queremos obtener un objeto con toda la informacion ingresada en los inputs.

    const newProductInfo = {};
    valuesForm.forEach((valueInput) =>{
        if(valueInput.id){
            newProductInfo[valueInput.id] = valueInput.value;    
        }
    });
    console.log(newProductInfo);

    //Ahora vamos a pushear al array

    productos.push(newProductInfo);

    //Actualizamos la informacion

    sessionStorage.setItem("productos", JSON.stringify(productos));

    //Actualizamos ahora la variable personaje
    /* productos = JSON.parse(sessionStorage.getItem("productos"));
    console.log(productos); */

    //Limpiamos cada campo de input

    valuesForm.forEach(input => {
        if(input.id){
            input.value = "";
        }
    })
});