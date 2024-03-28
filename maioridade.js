//crie um programa em que o usuario digita sua idade e apareça um alerta dizendo se é maior ou menor de idade.

let idade = parseInt(prompt("digite sua idade."));
let maioridade = 18

if (idade === maioridade) {
    alert('voce é de maior!')
}
if (idade > maioridade){
    alert('voce é de maior!.')
}
else if (idade < maioridade) {
    alert('voce nao é de maior.')
}