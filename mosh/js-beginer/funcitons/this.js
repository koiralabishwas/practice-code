// this represents "the object" which is running the current function

const video = {
  title : "a",
  play () {
    console.log(this)
  }
}
// this means the video object
const stop = () => {
  console.log(this)
}



// here this means the whole thing of the window!!!
function playVide() {
  console.log(this)
}

// playVide()

// in Constructior Funcitons
function Videos(title) {
  this.title = title
  console.log(this)
}

const v = new Videos("Xvideo")

console.log(v)


// this represents "the object" which is running the current function
 
// const video = {
//   title : "Bisshwas",
//   tags : ["a","b","c","d"],
//   showTags() {
//     // self is refering to video
//     const self = this;
//     this.tags.forEach(function(tag){
//       console.log(self.title , tag)
//     })
//   } 
// }

// video.showTags()
// 

