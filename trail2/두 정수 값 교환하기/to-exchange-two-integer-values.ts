const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
let n = Number(input[0]);
let m = Number(input[1]);

function swap(n,m) {
    [n,m] = [m,n];
    console.log(n,m);
}

swap(n,m);