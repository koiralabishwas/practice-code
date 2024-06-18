let address = {
  street : "sfasdf",
  city : "city of the place",
  zipCode : "12353e"
}

function showAddress (address : object) {
  for (const key in address)
    console.log(key+' : '+ address[key])
}

showAddress(address)

// ans

