function ConstructorFunctionAddress(street, city, zipCode) {
  this.street = street,
  this.city = city
  this.zipCode = zipCode
}

let address1 = new ConstructorFunctionAddress("a" , "b" , "c")
let address2 = new ConstructorFunctionAddress("a" , "b" , "c")
let address2copy = address2


// fuction areEqula
function areEqual(address1 , address2) {
  return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}

// function areSame
function areSame( address1 , address2) {
  return address1 === address2

}
// properties are equal
console.log(areEqual(address1 , address2))

//  same object or not
// same properties but they are different individual object
console.log(areSame(address1 , address2))

// address 2 is refrence of same object so they are the same thing
console.log(areSame(address2copy , address2))