const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const X = parseInt(input[0], 10);
const Y = parseInt(input[1], 10);

function isPalindrome(num: number): boolean {
    const str = String(num);
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let palindromeCount = 0;

for (let i = X; i <= Y; i++) {
    if (isPalindrome(i)) {
        palindromeCount++;
    }
}

console.log(palindromeCount);