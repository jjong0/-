import * as fs from 'fs';


const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0], 10);
const heights = [];
for (let i = 1; i <= n; i++) {
    heights.push(parseInt(input[i], 10));
}

let maxChunks = 0;

const maxHeight = Math.max(...heights);


for (let s = 0; s <= maxHeight; s++) {
    let currentChunks = 0;
    let isIceberg = false;


for (let i = 0; i < n; i++) {
    if (heights[i] > s) {
        if (!isIceberg) {
            currentChunks++;
            isIceberg = true;
        }
    } else {
        isIceberg = false;
    }
}

    maxChunks = Math.max(maxChunks, currentChunks);
}


console.log(maxChunks);