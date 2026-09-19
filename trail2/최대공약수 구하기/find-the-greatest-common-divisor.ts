import * as fs from 'fs';

const input: string[] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');
const n: number = parseInt(input[0], 10);
const m: number = parseInt(input[1], 10);

function printGCD(a: number, b: number): void {
    let x = a;
    let y = b;

    while (y !== 0) {
        let remainder = x % y;
        x = y;
        y = remainder;
    }

    console.log(x);
}

printGCD(n, m);