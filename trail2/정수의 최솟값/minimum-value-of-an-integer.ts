const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let mini = 0;
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

function minimum(a, b, c) {
    if (a <= b && a <= c) {
        mini = a;
    } else if (b <= a && b <= c) {
        mini = b;
    } else {
        mini = c;
    }
    return mini;
}

console.log(minimum(a,b,c));