// create bodgpost obj
// title
// body
// views
// comments
//  (author , body)
// isLive

const post = new Post('a', 'b', 'c');

console.log(post);

// constructor function

function Post(title , body , author ) {
  this.title = title,
  this.body = body,
  this.author = author,
  this.views = 0,
  this.comments = [],
  this.isLive = false

}


