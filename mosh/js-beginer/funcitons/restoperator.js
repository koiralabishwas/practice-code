function sum (discount ,...prices) {
  // only 2 arguments are expected but if more is passed ten use (arguments)

  const total = prices.reduce((a , b) => a + b )

  return total * (1-discount)

}

console.log(sum(0.1 , 20 , 30 ,50))