import * as fs from 'fs';

function printSquare(n: number){
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        const row: number[] = [];
        for (let j = 0; j < n; j++) {
            row.push((count % 9) + 1);
            count++;
        }
        console.log(row.join(' '));
    }
}

const input = fs.readFileSync(0, 'utf-8').trim();
const n = parseInt(input, 10);

printSquare(n);