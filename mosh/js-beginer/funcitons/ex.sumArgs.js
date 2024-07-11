function checkArray(arr) {
  return Array.isArray(arr)
}

console.log(checkArray({a : "b"}))


// function sum(){
//   let total = 0
//   for (let item of arguments)
//     if (Array.isArray(item)) 
//       for (let i of item)
//         total += i
//      else {

//       total += item
//     }
//   return total
// } 

// console.log(sum(1,2,3,4,5))



// 模範解答
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]]
  }


  return items.reduce((a , b) => a + b)

}

console.log(sum([1,2,3,4,5]))
console.log(sum(1,2,3,4,5))