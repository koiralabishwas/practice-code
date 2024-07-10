const num = [1, 2, 3, 4];

// function move(array : Array<any> , index : number , offset : number) {
// // validations

// // console.log(array)
//   if (index > array.length - 1 || index < 0){

//     console.error('invalid index')
//     return
//   }

//   // console.log(array[index] , "to "+offset)

//   if (typeof array[index + offset] !== "number") {
//     console.error("invalid offset")
//     return
//   }

//   const temp = array[index]
//   const filteredArray = array.filter(arr => arr !== temp)

//   filteredArray.splice(index + offset , 0 , temp)

//   // console.log(filteredArray)

//   return filteredArray

// }

// console.log(move(num , 3 ,-1))

// 模範解答

function move(array: Array<any>, index: number, offset: number) {
  // validations

  console.log(array);
  if (index > array.length - 1 || index < 0) {
    console.error("invalid index");
    return;
  }
  if (typeof array[index + offset] !== "number") {
    console.error("invalid offset");
    return;
  }

  let element = array.splice(index, 1)[0];
  console.log("element", element)
   array.splice(index + offset , 0 , element)
   return array
}

console.log(move(num, 1, -1));
