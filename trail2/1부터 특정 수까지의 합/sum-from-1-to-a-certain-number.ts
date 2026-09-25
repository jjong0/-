const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]); 

function getQuotient(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
    return Math.floor(sum / 10); 
}

console.log(getQuotient(n));