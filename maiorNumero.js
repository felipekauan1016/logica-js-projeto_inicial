function maiorNumero() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let numeroMaior = maiorNumero();
console.log("O maior número é:", numeroMaior);
