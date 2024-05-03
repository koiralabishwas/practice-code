function countTruthy(array) {
  // let counter = 0;
  // for(let i = 0; i < array.length ; i ++) {
  //   if (array[i]) {
  //     counter ++
  //   }
  // }
  // return counter;

  
  let counter = 0
  for (let value of array) {
    if (value) {
      counter ++
    }
  }
  return counter
  
}

const array1 = [0, 1, 2, 3, null,3];


console.log(countTruthy(array1));
