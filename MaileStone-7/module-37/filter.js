// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers = numbers.filter(number => number % 2 == 0)
// console.log(filteredNumbers)

// Example array of objects
// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 40 },
//   { name: "Eve", age: 20 },
// ];
// const age = people.filter(person => person.age < 30);
// console.log(age)

// const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// const aFruits = fruits.filter(fruit => fruit.includes('a'))
// console.log(aFruits)

// Example array of arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const fMatrix = matrix.filter(row => row.reduce((sum, num) => sum + num) > 10)
console.log(fMatrix)