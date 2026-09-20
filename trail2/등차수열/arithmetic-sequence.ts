import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0], 10);
const a = input[1].split(' ').map(Number);

let maxPairs = 0;

for (let k = 1; k <= 100; k++) {
    let currentPairs = 0;
    

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] + a[j] === 2 * k) {
                currentPairs++;
            }
        }
    }
    
    maxPairs = Math.max(maxPairs, currentPairs);
}

console.log(maxPairs);