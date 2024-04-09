function verificarPalindromo() {
   
    let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");
 
 
    palavra = palavra.toLowerCase().replace(/\s/g, '');
 
   
    let caracteres = palavra.split('');
 
 
    let caracteresInvertidos = caracteres.slice().reverse();
 
   
    return caracteres.join('') === caracteresInvertidos.join('');
}
 

let resultado = verificarPalindromo();
 

if (resultado) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}