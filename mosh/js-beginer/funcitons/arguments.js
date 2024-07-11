// can just make here empty if not using any specific args is not used
function sum (
  // a,b
) {
  // only 2 arguments are expected but if more is passed ten use (arguments)
  console.log(arguments)

  let total = 0
  for (let args of arguments)
    total += args
  console.log(total)
  return total
}

console.log(sum(1,2,3,4,5))