const nestedArray = [1, [2, 3], 4, [5, 6]];

// Destructuring nested arrays
const [first, [second, third], fourth, [fifth, sixth]] = nestedArray;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
console.log(fourth); // Output: 4
console.log(fifth); // Output: 5
console.log(sixth); // Output: 6
