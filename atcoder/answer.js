const fs = require('fs');

// Read the input from a file
// FIXME:change to '/dev/stdin' when submitting to atcoder
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const a500 = parseInt(input[0]);
const b100 = parseInt(input[1]);
const c50 = parseInt(input[2]);
const total = parseInt(input[3]);

let counter = 0;

for (let i = 0; i <= a500; i++) {
    for (let j = 0; j <= b100; j++) {
        for (let k = 0; k <= c50; k++) {
            const sumValue = i * 500 + j * 100 + k * 50;
            if (sumValue === total) {
                counter++;
            }
        }
    }
}

console.log(counter);
