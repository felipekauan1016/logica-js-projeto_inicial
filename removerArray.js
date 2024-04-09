function removerItem(array, item) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


let frutas = ['maçã', 'banana', 'laranja', 'uva'];
console.log("Array original:", frutas);  

let novoArray = removerItem(frutas, 'banana');
console.log("Array após remover 'banana':", novoArray);  

novoArray = removerItem(frutas, 'pera');
console.log("Array após remover 'pera':", novoArray); 
