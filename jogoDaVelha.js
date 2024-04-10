let tabuleiro = [
    ['','',''],
    ['','',''],
    ['','','']
];

let jogador = 'x';

function jogo(linha, coluna) {
    tabuleiro[linha][coluna] = jogador;
    jogador === 'x' ? jogador = 'o' : jogador = 'x';
    
}

function verificarVencedor() {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '') {
            return tabuleiro[i][0];
        }
    }
    
    // Verifica colunas
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j] && tabuleiro[0][j] !== '') {
            return tabuleiro[0][j];
        }
    }
    
    // Verifica diagonais
    if ((tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) || 
        (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0])) {
        return tabuleiro[1][1];
    }
    
    // Se não houver vencedor, verifica empate
    let empate = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                empate = false;
                break;
            }
        }
        if (!empate) break;
    }
    
    if (empate) return 'Empate';
    
    return null;
}


console.table(tabuleiro);

const resultado = verificarVencedor();
if (resultado) {
    if (resultado === 'Empate') {
        console.log('O jogo empatou!');
    } else {
        console.log(`O jogador ${resultado} ganhou!`);
    }
} else {
    console.log('O jogo continua...');
}