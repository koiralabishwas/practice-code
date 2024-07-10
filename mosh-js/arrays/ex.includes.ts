const numArray  = [1,2,3,4,5]

const checkIncluding  = (num : string | number , arr : Array<any>) : boolean => {
  for (let a of arr) {

    if (a === num)
      return true
  }
  
  return false
}

console.log(checkIncluding(6,numArray))