function interest(principal , rate = 3.5 , years = 5) {
  // traditionala consideration of default values
  // rate = rate || 3.1
  // years = years || 5
  return principal  * rate / 100  * years
}

console.log(interest(100000 ))