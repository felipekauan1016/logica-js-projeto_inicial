function somaNumerosPares(array) {
    let soma = 0;

   
    array.forEach(numero => {
        if (numero % 2 === 0) {
            soma += numero;
        }
    });

    return soma;
}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaPares = somaNumerosPares(arrayNumeros);

console.log("Array de números:", arrayNumeros);
console.log("Soma dos números pares:", somaPares);
