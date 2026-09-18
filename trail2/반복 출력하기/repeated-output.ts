function printNLines(n) {
    for (let i = 0; i < n; i++) {
        console.log("12345^&*()_");
    }
}

const fs = require("fs");
let rowNum = Number(fs.readFileSync(0).toString().trim());
printNLines(rowNum);
