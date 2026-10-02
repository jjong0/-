import * as fs from 'fs';
const input = fs.readFileSync(0, 'utf-8').trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);


function pernum(a,b){
    let count = 0;
    for(let i=a;i<=b;i++){
        if(i % 2 === 0){
            continue;
        } else if(i % 10 === 5){
            continue;
        } else if(i % 3 ===0 && i % 9 !==0){
            continue;
        }
        count++;
    }
    return count;
}

console.log(pernum(a,b));