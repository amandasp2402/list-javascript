const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

input.forEach(num => {
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
    if (num > 0) {
        positivos++;
    } else if (num < 0) {
        negativos++;
    }
});

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);