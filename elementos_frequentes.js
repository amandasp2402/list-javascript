function elementosMaisFrequentes(arr, k) {
    const frequencia = new Map();
    const ordemInsercao = new Map();
    
    arr.forEach((num, index) => {
        if (!frequencia.has(num)) {
            frequencia.set(num, 0);
            ordemInsercao.set(num, index);
        }
        frequencia.set(num, frequencia.get(num) + 1);
    });

    const ordenado = [...frequencia.entries()].sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]; // Maior frequência primeiro
        }
        return ordemInsercao.get(a[0]) - ordemInsercao.get(b[0]);
    });

    const resultado = [];
    for (const [num] of ordenado.slice(0, k)) {
        resultado.push(num);
    }
    
    return resultado;
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const arr = input[0].split(' ').map(Number);
const k = parseInt(input[1]);

console.log(`[${elementosMaisFrequentes(arr, k).join(', ')}]`);