import * as fs from 'fs';
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

function isPrime(n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function isDigitSumEven(n: number): boolean {
    let sum = 0;
    let temp = n;

    while (temp > 0) {
        sum += temp % 10;       
        temp = Math.floor(temp / 10); 
    }
    
    return sum % 2 === 0;
}

let count = 0;

for (let i = a; i <= b; i++) {
    if (isPrime(i) && isDigitSumEven(i)) {
        count++;
    }
}

console.log(count);