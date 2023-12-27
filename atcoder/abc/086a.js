function Main (input) {
  input = input.split('\n')
  input = input[0].split(' ')
  let a = Number(input[0])
  let b = Number(input[1])
  let c = a * b
  console.log(c)

  if (c%2 === 0) {
    console.log("Even")
  } else {
    console.log('Odd')
  }

}

const input = "3 1"

Main(input)