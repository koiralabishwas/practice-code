const numbers = [0,1,2,3,4,5]

const removedLast = []

for(let i = 0 ; i < numbers.length ; i ++) {
  if (numbers[i] === (numbers.length - 1)) {
    console.log(removedLast)
    
  }
  removedLast.push(numbers[i])


}