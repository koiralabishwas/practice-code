// Create a TypeScript function describePerson that takes an object with the properties name (a string), age (a number), and isStudent (a boolean) and returns a string describing the person.

type Person {
  name: string,
  age:number,
  isStudent:boolean,
}

function describePerson(theperson:Person):string {
  
  return `${theperson.name}and${theperson.age}and${theperson.isStudent}`

}

