const numbers = [1 ,2 ,3,4 ,1]

function countElement (num , array  ) {
  return array.reduce((previousValue , currentValue ) => {
    const occurance = (currentValue === num)
    return previousValue + occurance
  },0 )
}

console.log(countElement(3 , numbers))