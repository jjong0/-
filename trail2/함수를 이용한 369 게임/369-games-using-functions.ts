import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf-8').trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);


function game(a, b) {
    let count = 0; 
    
    for (let i = a; i <= b; i++) {
        let strI = String(i);
        
        if (i % 3 === 0 || strI.includes('3') || strI.includes('6') || strI.includes('9')) {
            count++;
        }
    }
    return count;
}

console.log(game(a,b))