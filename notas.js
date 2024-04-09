//crie um programa que calcula a media  de quatro notas e emite um alerta mostrando as notas e se o aluno passou basendo-se na media. 
//1 e 2 nota vale peso 1 | 3 e a 4 vale peso 2;
//voce deve usar lista array para armazenar as notas e funçao para calcular a media

// Função para calcular a média das notas
function calcularMedia(notas) {
  let soma = 0;
  for (let nota of notas) {
      soma += nota;
  }
  return soma / notas.length;
}

// Função para verificar se o aluno passou ou não
function verificarAprovacao(media) {
  if (media >= 7.0) {
      return "Aprovado";
  } else {
      return "Reprovado";
  }
}

// Entrada das notas do aluno
let nota1 = parseInt(prompt("Digite a primeira nota: "));
let nota2 = parseInt(prompt("Digite a segunda nota: "));
let nota3 = parseInt(prompt("Digite a terceira nota: "));
let nota4 = parseInt(prompt("Digite a quarta nota: "));

// Criando a lista de notas
let notas = [nota1, nota2, nota3, nota4];

// Calculando a média
let media = calcularMedia(notas);

// Verificando se o aluno passou
let status = verificarAprovacao(media);

// Emitindo o alerta com as notas e o status de aprovação
alert(`Notas: ${notas}\nMédia: ${media}\nStatus: ${status}`);
