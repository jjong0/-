import * as fs from 'fs';
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
let a = Number(input[0]);
let c = Number(input[2]);
let o = String(input[1]);

function plus(a, c) {
    return a + c;
}

function minus(a, c) {
    return a - c;
}

function multiply(a, c) {
    return a * c;
}

function divide(a, c) {
    return Math.floor(a / c);
}

function cal(a, o, c) {
    if (o === "+") {
        console.log(`${a} ${o} ${c} = ${plus(a, c)}`);
    } else if (o === "-") {
        console.log(`${a} ${o} ${c} = ${minus(a, c)}`);
    } else if (o === "*") {
        console.log(`${a} ${o} ${c} = ${multiply(a, c)}`);
    } else if (o === "/") {
        console.log(`${a} ${o} ${c} = ${divide(a, c)}`);
    } else {
        console.log("False"); 
    }
}

cal(a, o, c);