function Main(input) {
  let arr = input.split('')

  let count = 0

  for (let i = 0 ; i < arr.length ; i ++ ){
    if (arr[i] === "1")
    count ++
  }

  console.log(count)
}

// Main("101")

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
