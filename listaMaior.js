
function maiorNumero() {
   
    let input = prompt("Digite a lista de números separados por vírgula:");


    let numeros = input.split(",").map(Number);


    if (numeros.length === 0) {
        return "A lista está vazia.";
    }


    let maior = numeros[0];


    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior; 
}


let maior = maiorNumero();


console.log("O maior número na lista é:", maior);
