function Main(input) {
  let lines = [];
  let currentLine = '';
  for (let i = 0; i < input.length; i++) {
      if (input[i] === '\n') {
          lines.push(currentLine);
          currentLine = '';
      } else {
          currentLine += input[i];
      }
  }
  if (currentLine.length > 0) {
      lines.push(currentLine);
  }

  let n = parseInt(lines[0], 10);

  // lines[1]  destructureing in nextlinesarray
  let nextlines = lines[1]
  let numbers = [];
  let num = '';
  for (let i = 0; i <= nextlines.length; i++) {
      if (nextlines[i] === ' ' || i === nextlines.length) {
          if (num.length > 0) {
              numbers.push(parseInt(num, 10));
              num = '';

          }
      } else {
          num += nextlines[i];
      }
  }


  //processing withi numbers[]
  let count = 0;
  let allEven = true;
  while (allEven) {
      allEven = true;
      //checking all even with loop
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] % 2 !== 0) {
              allEven = false;
              break;
          }
      }
      if (allEven) {
          for (let i = 0; i < numbers.length; i++) {
              numbers[i] /= 2;
          }
          count++;
      }
  }

  console.log(count); // is result
}


let input = `3
8 12 40`

Main(input)


//call function in atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
