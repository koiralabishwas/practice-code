const main = (arg) => {
  const input = arg
    .trim()
    .split("\n")
    .flatMap((i) => i.split(" "));

  const y = Number(input.shift());
  
  const d = [...Array(input.length)].map(() => {
    // d)
    // 'before each shift' , input)
    Number(input.shift());
    
    
  });
  // ...Array(input.length) will create a array of having 7 index undefined now
  // each time input.shift() is performed
  // first value now in input array will go to d
  
  
  const set = [...new Set(d)];


  // set.length);
};

let input = `7
50
30
50
100
50
80
30
`;
main(input);
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
