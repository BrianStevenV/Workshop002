const addElement = (list, addItem = "") => {
    if(addItem){
        list.push(addItem);
        console.log(list);
    }
}

const deleteElement = (list, posDelete = null) => {
    const lastPosition = list.length - 1;
    const position = posDelete === null ? lastPosition : posDelete;
    list.splice(position, 1);
    console.log(list);
}

const addOrDelete = (callback, list, addOrPosition) => {
    callback(list, addOrPosition);
}
