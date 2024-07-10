const movies = [
  { title: "A", year: 2019, rating: 4.5 },
  { title: "B", year: 2018, rating: 4.1 },
  { title: "V", year: 2018, rating: 3 },
  { title: "FF", year: 2023, rating: 2 },
];

function operate(array: Array<any>) {
  const resutlt = array
    .filter((arr) => arr.year === 2018 && arr.rating >= 4)
    .sort((a, b) => a.rating - b.rating ).reverse()
    .map((arr) => arr.title);

  return resutlt;
}

console.log(operate(movies));
