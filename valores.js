//crie uma função que aceite dois parametros(números) e some os valores.

function somarNumero (num1,num2){
    let soma = num1 + num2;
    alert(`a soma dos valores ${num1} + ${num2} é ${soma}`)
}

let valor1 = parseInt (prompt ("digite seu primeiro valor"));
let valor2 = parseInt (prompt ("digite seu segundo valor"));

somarNumero(valor1, valor2);