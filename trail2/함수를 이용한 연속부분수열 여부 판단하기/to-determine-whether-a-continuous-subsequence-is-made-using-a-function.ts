import * as fs from 'fs';
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n1, n2] = input[0].trim().split(' ').map(Number);
const A = input[1].trim().split(' ').map(Number);
const B = input[2].trim().split(' ').map(Number);


function isContinuousSubsequence(a: number[], b: number[], lenA: number, lenB: number): boolean {
    if (lenB > lenA) return false;

    for (let i = 0; i <= lenA - lenB; i++) {
        let isMatch = true;

        for (let j = 0; j < lenB; j++) {
            if (a[i + j] !== b[j]) {
                isMatch = false; 
                break; 
            }
        }

        if (isMatch) return true;
    }

    return false;
}

if (isContinuousSubsequence(A, B, n1, n2)) {
    console.log("Yes");
} else {
    console.log("No");
}