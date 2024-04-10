function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let count = 0;

    for (let char of texto) {
        if (vogais.includes(char)) {
            count++;
        }
    }

    return count;
}

const minhaString = 'Olá, mundo! Esta é uma string de exemplo.';
const numeroDeVogais = contarVogais(minhaString);

console.log(`A string "${minhaString}" possui ${numeroDeVogais} vogais.`);
