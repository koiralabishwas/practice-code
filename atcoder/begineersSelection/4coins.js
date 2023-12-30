// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	console.log(input)
  
  // destructuring and storing each coins
  let c500 = parseInt(input[0])
  let c100 = parseInt(input[1])
  let c50 = parseInt(input[2])

  let amount = parseInt(input[3])
	
  console.log(c500,c100,c50,amount)
}
// custom inputs
let input =`5
1
0
150
`

Main(input)

// to run at atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
