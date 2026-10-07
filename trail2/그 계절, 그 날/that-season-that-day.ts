const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
const Y = Number(input[0]);
const M = Number(input[1]);
const D = Number(input[2]);


function isLeapYear(y: number): boolean {
    if (y % 400 === 0) return true;
    if (y % 100 === 0) return false;
    if (y % 4 === 0) return true;
    return false;
}


function isValidDate(y: number, m: number, d: number): boolean {
    if (m < 1 || m > 12) return false;

    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (isLeapYear(y)) {
        daysInMonth[2] = 29;
    }

    return d >= 1 && d <= daysInMonth[m];
}

function getSeason(m: number): string {
    if (m >= 3 && m <= 5) return "Spring";
    if (m >= 6 && m <= 8) return "Summer";
    if (m >= 9 && m <= 11) return "Fall";
    return "Winter";
}


if (isValidDate(Y, M, D)) {
    console.log(getSeason(M));
} else {
    console.log("-1");
}