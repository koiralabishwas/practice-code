const isbnCode = '9784822341053'; // Replace this with the actual ISBN code

fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnCode}`)
  .then(response => response.json())
  .then(data => {
    console.log('Book data:', data);
  })
  .catch(error => {
    console.error('Error fetching book data:', error);
  });
