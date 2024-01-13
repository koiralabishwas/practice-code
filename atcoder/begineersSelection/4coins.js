let input =`2
2
2
100`
// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
  
  let a = parseInt(input[0],10)
  let b = parseInt(input[1],10)
  let c = parseInt(input[2],10)
  let x = parseInt(input[3],10)

  console.log(a,b,c,x)

  let totlaSum = 0
}


// custom inputs

Main(input)

// to run at atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
