function calcularFatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

const numeroParaCalcularFatorial = 5;
const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);

console.log(`O fatorial de ${numeroParaCalcularFatorial} é ${resultadoFatorial}.`);
