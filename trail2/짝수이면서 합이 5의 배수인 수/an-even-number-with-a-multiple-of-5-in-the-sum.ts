const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

function checkNumber(num) {

    let isEven = num % 2 === 0;
    
    let tens = Math.floor(num / 10);
    let ones = num % 10;
    let sum = tens + ones;
    
    let isSumMultipleOf5 = sum % 5 === 0;

    if (isEven && isSumMultipleOf5) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(checkNumber(n));