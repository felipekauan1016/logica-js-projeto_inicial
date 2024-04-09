function somaArray(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}
//exemplo de uso da função
let lista = [1, 4, 7, 2, 3, 15];
let soma = somaArray(lista);
alert(soma);
//a função retornará 12

function maiorNumeroArray(arr){
    let maior = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i];
        }
    }
    return maior;
}

alert(maiorNumeroArray(lista));