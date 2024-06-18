let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

//  Factory function

// function factory (street , city , zipCode) {
//   const address = {
//     street : street,
//     city : city,
//     zipCode : zipCode
//   }

//   return address
// }

function factoryFunctionAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// while calling factory ... jus call the funciton
const aFactory = factoryFunctionAddress("a" , "b" , "c")
console.log(aFactory)

function ConstructorFunctionAddress(street, city, zipCode) {
  this.street = street,
  this.city = city
  this.zipCode = zipCode
}

// while calling a constryctor ,,, use new
// also use PascalNotation as a good practice
const x = new ConstructorFunctionAddress("hey", "bae", "boy");

console.log(x);
