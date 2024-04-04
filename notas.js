//crie um programa que calcula a media  de quatro notas e emite um alerta mostrando as notas e se o aluno passou basendo-se na media. 
//1 e 2 nota vale peso 1 | 3 e a 4 vale peso 2;
//voce deve usar lista array para armazenar as notas e funçao para calcular a media


// Função para calcular a média das notas
function calcularMedia(notas) {
    // Verifica se a lista de notas está completa
    if (notas.length !== 4) {
      console.log('Por favor, forneça exatamente 4 notas.');
      return;
    }
  
    // Calcula a média ponderada
    const media = (notas[0] + notas[1] + (notas[2] * 2) + (notas[3] * 2)) / 6;
  
    return media;
  }
  
  // Função para verificar se o aluno passou ou não
  function verificarAprovacao(media) {
    if (media >= 6) {
      return 'Aprovado';
    } else {
      return 'Reprovado';
    }
  }
  
  // Lista/array de notas
  const notas = [7, 8, 6, 9];
  
  // Calcula a média das notas
  const mediaFinal = calcularMedia(notas);
  
  // Verifica se o aluno passou e emite um alerta
  const resultado = verificarAprovacao(mediaFinal);
  alert(`Notas: ${notas.join(', ')}\nMédia: ${mediaFinal.toFixed(2)}\nResultado: ${resultado}`);
  