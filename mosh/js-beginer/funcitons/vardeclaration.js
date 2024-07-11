// var => function scoped variabels
// let / const => blocked scoped variables

function test() {
  if (true) {
    var isVar = true
    let isLet = true
  }
  console.log("var is :" ,isVar) // still available 
  // console.log("let is :" ,isLet) // not available

}

test()