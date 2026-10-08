const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const result = arr.map(num => (num % 2 === 0 ? num / 2 : num));

console.log(result.join(' '));