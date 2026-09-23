import * as fs from 'fs';

function getGCD(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getLCM(a: number, b: number): number {
    return (a * b) / getGCD(a, b);
}


const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
const n = Number(input[0]);
const m = Number(input[1]);

console.log(getLCM(n, m));