// inputに入力データ全体が入る

let answer = [];
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");

  input.shift();
  input.pop();
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    let isCopy = false;
    for (let j = 0; j < answer.length; j++) {
      if (input[i] === answer[j]) {
        isCopy = true;
        break;
      }
    }
    if (!isCopy) {
      answer.push(input[i]);
    }
  }

  console.log(answer.length);
}

// custom inputs and run
let input = `3
15
15
15
`;
Main(input);

// to run at atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
