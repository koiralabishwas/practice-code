let input =`30
40
50
6000
`
// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");

  const aInput = parseInt(input[0],10)
  const bInput = parseInt(input[1],10)
  const cInput = parseInt(input[2],10)
  const xInput = parseInt(input[3],10)

  let count = 0

  // funtion  to  process
  function countWays(A,B,C,X) {
    for (let a = 0 ; a <= A ; a ++ ) {
      for (let b = 0 ; b <= B ; b ++) {
        for(let c = 0 ; c <= C ; c++) {


          if (500 * a + 100 * b + 50 * c === X){
            count ++
          }
        }
      }
    }
  }

}

countWays(aInput,bInput,cInput,xInput)
console.log(count)

// custom inputs

Main(input)

// to run at atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
