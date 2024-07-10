const numArr = [0,1,2,3,4,5,6,1]

function except(arr : Array<number>, rmArr : Array<number>) {
  let result : Array<number> = []

  for (let a of arr) {
    if (!rmArr.includes(a)) {
      result.push(a)
    }
  }

  return result;
}

console.log(except(numArr,numArr))