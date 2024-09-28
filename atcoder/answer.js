const fs = require('fs');

// Read the input from a file
// FIXME:change to '/dev/stdin' when submitting to atcoder
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

let count = 0;

for (let i = 0 ; i < input.length ; i ++ ) {
    // index (count from 0)のときインデックスとおなじものがあったらカウント
    if (input[i].length == i + 1){
        count ++
    }
}

console.log(count)