
alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = 3;
let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));

if(numeroDigitado === numeroSecreto){
    alert('Parabéns, você acertou!');
} else if(numeroDigitado > numeroSecreto){
    alert('Você digitou um número maior que o número secreto');
} else {
    alert('Você digitou um número menor que o número secreto');
}