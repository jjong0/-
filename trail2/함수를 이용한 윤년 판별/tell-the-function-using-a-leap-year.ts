import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf-8').trim();
let y = Number(input);

function year(y) {
    if (y % 100 === 0 && y % 400 !== 0) {
        return false;
    }
    if (y % 4 === 0) {
        return true;
    }
    return false;
}

console.log(year(y));