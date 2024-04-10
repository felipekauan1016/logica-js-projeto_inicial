function encontrarNumeroMaisFrequente(array) {
   
    const contagem = {};


    array.forEach(numero => {
        contagem[numero] = (contagem[numero] || 0) + 1;
    });

   
    let numeroMaisFrequente;
    let frequenciaMaxima = 0;
    for (let numero in contagem) {
        if (contagem[numero] > frequenciaMaxima) {
            numeroMaisFrequente = numero;
            frequenciaMaxima = contagem[numero];
        }
    }

    return parseInt(numeroMaisFrequente);
}

const arrayNumeros = [1, 3, 5, 3, 7, 9, 3, 1, 5, 3, 5];
const numeroMaisFrequente = encontrarNumeroMaisFrequente(arrayNumeros);

console.log("Array de números:", arrayNumeros);
console.log("Número mais frequente:", numeroMaisFrequente);
