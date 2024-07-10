
// getters => access properties
// setters => change / mutate properties

const person = {
  firstName : "Bishwas" , 
  lastName : "Koirala",
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {

    if (typeof(value) !== 'string') 
      throw new Error('Value is  not  a String BBBBBBB')
    
    
    const parts = value.split("Bishwas")

    if (parts.length !== 2 ) 
      throw new Error("Enter a First and Last Value")
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

try {
  person.fullName = "bishwas koirala" 
  
} catch (error) {
  console.log(error)
}

console.log(person)

