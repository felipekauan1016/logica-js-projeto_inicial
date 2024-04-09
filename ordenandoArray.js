//crie um programa que leia uma Array com numero de posições com escolhidas pelo usuario. Atribuições pelo usuário de números inteiros. Ordene os números no Array e apresente eles na ordem correta.


let arr = [];
let tamanhoDeLista = parseInt(prompt("Qual o tamanho da sua lista?"));

//função para gerar um lista aleatória
function geraLista(arr, tamanhoDeLista) {
    for(let i = 0; i < tamanhoDeLista; i++){
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}

//função para ordenar a lista
function ordenaLista(arr){
    let listaOrdenada = arr.sort(
        function compareNumbers(a, b) {
        return a - b;
      }
    );
    return listaOrdenada;
}

arr = geraLista(arr, tamanhoDeLista);
let listaOrdenada = ordenaLista(arr);

alert(arr);
alert(listaOrdenada.join(", "));