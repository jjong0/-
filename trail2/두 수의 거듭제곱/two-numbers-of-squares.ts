import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

function power(a, b) {
    let result = 1;                
    for(let i = 0; i < b; i++) {    
        result *= a;            
    }
    return result;
}

console.log(power(a, b));