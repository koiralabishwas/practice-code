/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */


let join = function(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length ;i ++) {
      result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length;i ++) {
    result.push(arr2[i]);
  }

  result.sort(function(a,b) {
    return a.id.toString().localeCompare(b.id.toString());
  })

  return result;
  // I want to sort it with its it
  // the Id has string value and sort it in acending
}


let array1 = [{"id": 4,"x": 1},{"id": 2,"x": 9}]
let array2 = [{"id": 1,"x": 5}]

console.log(join(array1,array2))
