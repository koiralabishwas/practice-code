function Main(input) {
  input = input.split("\n")
  let temp = input[0].split(" ")

  let a = parseInt(temp[0], 10)
  let b = parseInt(temp[1] , 10)
  let c = a * b
  // console.log(c)

  if (c%2 == 0) {
    console.log("Even")
  } else {
    console.log('Odd')
  }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("2 5")