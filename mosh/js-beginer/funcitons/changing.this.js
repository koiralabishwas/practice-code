// this represents "the object" which is running the current function
 

// const video = {
//   title : "Bisshwas",
//   tags : ["a","b","c","d"],
//   showTags() {
//     // self is refering to video FIXME:not a good practice
//     const self = this;
//     this.tags.forEach(function(tag){
//       console.log(self.title , tag)
//     })
//   } 
// }

// video.showTags()


// knowledge!

// // here this references the whole window object
// function playVIdeo() {
//   console.log(this)
// }
// // changed this to reference the passed object
// playVIdeo.call({name : "Mosh"},1,2) // we can pass like 1 , 2, 3,...
// playVIdeo.apply({name : "Mosh"},[1,2]) // we have to pass in an array [1 , 2 ,3....]
// playVIdeo.bind({name : "Mosh"})() // return a new function that always refers the passed objc
// playVIdeo()




// // good pranctice
// const video = {
//   title : "Bisshwas",
//   tags : ["a","b","c","d"],
//   showTags() {
//     // a good practice
//     // ↓　this represents global object
//     this.tags.forEach(function(tag){
//       console.log(this.title , tag)
//     }.bind(this))
//     // this ↑ represents video objcet
//     // callback function's reference reassigned
//   } 
// }

// video.showTags()


// best Practice
const video = {
  title : "Bisshwas",
  tags : ["a","b","c","d"],
  showTags() {
    // just use arrow function to get rid of this this nonsense
    this.tags.forEach((tag) => {
      console.log(this.title , tag)
    })

  } 
}

video.showTags()
