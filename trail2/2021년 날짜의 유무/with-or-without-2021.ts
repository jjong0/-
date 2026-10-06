import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf-8').trim().split(" ");
let m = Number(input[0]);
let d = Number(input[1]);

function isExistDate(m: number, d: number): boolean {
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (m < 1 || m > 12) {
        return false;
    }

    if (d < 1 || d > daysInMonth[m]) {
        return false;
    }
    
    return true;
}

if (isExistDate(m, d)) {
    console.log("Yes");
} else {
    console.log("No");
}