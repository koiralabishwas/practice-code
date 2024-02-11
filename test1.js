const numbers = [1, 2, [3, 4, 5,[ 6, 7, 8, 9], 2, 1, 4], 3, 7];
console.log(numbers)

// let map = numbers.map((i) => );
let depth = Infinity
let flat = numbers.flat(depth)

console.log(flat);
