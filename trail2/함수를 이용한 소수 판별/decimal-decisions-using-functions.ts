import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let sum = 0;

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}


for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
        sum += i;
    }
}

console.log(sum);