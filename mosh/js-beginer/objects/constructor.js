const square = {
  hel : 200,
  build : () => {
    console.log("build")
  }
}

const circle = {
  radius : 1,
  draw() {
    console.log("draw")
  }
}

// assing all properties of second obj inside 


 let another = {name : "another" ,...circle , ...square }

console.log(another)
