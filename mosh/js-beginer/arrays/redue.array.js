const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((previousValue , currentValue) => {
//   console.log("previousValue" , previousValue)
//   console.log('currentValue' , currentValue)
//   console.log(previousValue + currentValue)
//   return previousValue + currentValue
// },0)
// initial value is declared as 0


// short form
const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(sum);
