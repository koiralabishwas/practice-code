// finde element primitives
const numbers = [1, 2, 3, 4];


// if we have same element multiple times in array,
// indexOf() will return the first index of the element
// lastIndexOf() will return the last index of the element
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(2));

console.log(numbers.includes("a"));


// find element reference
const course = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

course.includes({ id: 1, name: 'a' }); // false
// because the object we are looking for is not the same object in memory

const theCourse = course.find(function (course) {
return course.id === 1 && course.name === 'b';
})

console.log(theCourse);