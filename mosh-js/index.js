// divisible by 3 , fizz 
// divisible by 5 , buzz
// divisible by 5 and 3 , fizz buzz
// else not divisible ? return the same number
// or NaN too

function fizzbuzz (input) {
  if (typeof(input) !== "number")
    return NaN

  if (input % 5 === 0 && input % 3 === 0) {
      return "fizz buzz"
    
  }
  if (input % 3 === 0) {
    return 'fizz'
  }

  if ( input % 5 === 0)
    return 'buzz'

  return input
}


const output = fizzbuzz(3)
console.log(output)
