const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim();

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

if (isPalindrome(input)) {
    console.log("Yes");
} else {
    console.log("No");
}