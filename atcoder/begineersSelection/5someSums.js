// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  let rawdata = input.split(`\n`)
  let tmp = rawdata[0].split(' ')
// splitting in each vars
  let N = parseInt(tmp[0],10)
  let A = parseInt(tmp[1],10)
  let B = parseInt(tmp[2],10)
  console.log(N , A , B)
  // console.log(typeof(B))
  // all is in base 10 num
  let ans = 0

  // let nTemp = N.split("")
  // console.log(nTemp)
  for(let i = 1 ; i <= N ; i++) {
    let number = i
    let SumOfDigits = 0
    

    while (number > 0) {
      SumOfDigits += number % 10
      number = Math.floor(number / 10)
      // console.log("after ",number)
      
      // console.log(SumOfDigits)

    }
    // condition
    if (SumOfDigits >= A && SumOfDigits <= B) {
      ans += i
    }
  }

  console.log(ans)
}
// custom inputs
// let input = `20 2 5
// `;
// Main(input);

// to run at atcoder
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
