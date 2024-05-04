let names = ["head" , "tain" , "boyy"]

let mappedName = names.map(name => {
  if(name === "head"){
    return name + "mapped"
  }
  return null
}).filter(name => name !== null)


console.log(mappedName)