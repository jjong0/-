import * as fs from 'fs';


const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [T, a, b] = input[0].split(' ').map(Number);

const sPositions: number[] = [];
const nPositions: number[] = [];


for (let i = 1; i <= T; i++) {
    const [char, posStr] = input[i].trim().split(' ');
    const pos = Number(posStr);
    
    if (char === 'S') {
        sPositions.push(pos);
    } else if (char === 'N') {
        nPositions.push(pos);
    }
}

let specialCount = 0;


for (let k = a; k <= b; k++) {
    let d1 = Infinity;
    let d2 = Infinity;

    
    for (const s of sPositions) {
        d1 = Math.min(d1, Math.abs(k - s));
    }

    
    for (const n of nPositions) {
        d2 = Math.min(d2, Math.abs(k - n));
    }

    
    if (d1 <= d2) {
        specialCount++;
    }
}

console.log(specialCount);