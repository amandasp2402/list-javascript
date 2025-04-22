function encontreSubstring(s, palavras) {
    const tamanhoPalavra = palavras[0].length;
    const totalPalavras = palavras.length;
    const tamanhoConcat = tamanhoPalavra * totalPalavras;
    const resultado = [];

    const palavrasMap = new Map();
    for (const palavra of palavras) {
        palavrasMap.set(palavra, (palavrasMap.get(palavra) || 0) + 1);
    }

    for (let i = 0; i <= s.length - tamanhoConcat; i++) {
        const palavrasVistas = new Map();
        let valido = true;

        for (let j = 0; j < totalPalavras; j++) {
            const inicio = i + j * tamanhoPalavra;
            const palavra = s.slice(inicio, inicio + tamanhoPalavra);

            if (!palavrasMap.has(palavra)) {
                valido = false;
                break;
            }

            palavrasVistas.set(palavra, (palavrasVistas.get(palavra) || 0) + 1);

            if (palavrasVistas.get(palavra) > palavrasMap.get(palavra)) {
                valido = false;
                break;
            }
        }

        if (valido) {
            resultado.push(i);
        }
    }

    return resultado;
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const s = input[0];
const palavras = input[1].split(',').map(palavra => palavra.trim());

console.log(`[${encontreSubstring(s, palavras).join(', ')}]`);