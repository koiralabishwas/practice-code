
function menseki(a,b,h) {
  if (a <= 0 || a >= 101 || b <= 0 || b >= 101 || h <= 0 ||h >= 101 || h%2 !== 0){
    return console.error(error);
  }
  // console.log(ans)
  return (
    (a+b) * h / 2
  )

} 

// let a = 3
// let b = 4
// let h = 2
// console.log(menseki(a,b,h))

// a = 4 
// b = 4
// h = 4

// console.log(menseki(a,b,h))

// a = -1
// b = 4
// h = 3

const input = (require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")).map(str => parseInt(str, 10));
console.log((input[0] + input[1]) * input[2] / 2);