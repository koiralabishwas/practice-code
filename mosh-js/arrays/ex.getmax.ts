const numArray = [3423,100,1,2,3,4,5,6,7,8,9,]

function max(array : Array<any>) {
  array.reduce((currentValue , nextValue) => nextValue > currentValue ? nextValue : currentValue)
} 

console.log(max(numArray))