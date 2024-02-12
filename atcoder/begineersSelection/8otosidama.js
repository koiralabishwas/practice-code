// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");
  let inputTemp = (input[0].split(" "));
  let inNum = inputTemp.map((i) => parseInt(i , 10))
  // console.log(inNum)

  let maisuu = inNum[0]
  console.log('まいすう ' , maisuu)

  let totalAmount = inNum[1]
  console.log('totalamount' , totalAmount)

  for (let i = 0 ; i <= maisuu ; i ++ ) {
    let tempAns = 0;
    
  }






}
// custom inputs and run
let input = `20 196000
  `;
Main(input);

// to run at atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
