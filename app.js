                let numeroSecreto = Math.floor(Math.random()*5);
                let tentativas = 3;

                while (Tentativa > 0) {

                    let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
                    if(numeroDigitado === numeroSecreto){
                        alert('Parabéns, você acertou!');
                        break;
                    } else if(numeroDigitado > numeroSecreto){
                        alert('Você digitou um número maior que o número secreto');
                    } else {
                        alert('Você digitou um número menor que o número secreto');
                    }
                    alert (`voce ainda tem ${tentativas} tentativas`);
                    tentativas = tentativas - 1;

                }

