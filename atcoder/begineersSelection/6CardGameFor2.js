// sort in desending order
// add each to alice , bob , alice bob
// alice - bob is answer

// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");

  // sheets of cards we have
  let cardLength = parseInt(input[0], 10);

  // making a num array cards for a
  let cardsInString = input[1].split(" ");
  let cards = cardsInString.map(Number);

  let sortedDecendCards = descendingSort(cards);

  let aliceSum = 0;
  let BobSum = 0;

  for (let i = 0; i < sortedDecendCards.length; i += 2) {
    aliceSum += sortedDecendCards[i];
    let j = i + 1;

    // if length is 4 , we have [i0,i1,i2,3]
    // it steps 2 so when we are in 4th index , it will be the last process
    if (j < sortedDecendCards.length) BobSum += sortedDecendCards[j];
  }

  // console.log("alice", aliceSum, "bob", BobSum);

  console.log(aliceSum - BobSum);
}

function descendingSort(arr) {
  let len = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false; //resed swapping
    for (let i = 1; i < len; i++) {
      if (arr[i - 1] < arr[i]) {
        // then swap
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    len--;
  }

  return arr;
}

// custom inputs
let input = `3
2 7 4 
`;

Main(input);

// to run at atcoder
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
