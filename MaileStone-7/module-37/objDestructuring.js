// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   country: "USA",
// };

// // Extracting properties using destructuring
// const { firstName, lastName, age } = person;

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe
// console.log(age); // Output: 30

// const person = {
//   firstName: 'John',
//   age: 30
// };

// const { firstName, lastName = 'Doe', age } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe (default value used)
// console.log(age);       // Output: 30


function greet({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

const person = {
  firstName: 'John',
  lastName: 'Doe'
};

greet(person); // Output: Hello, John Doe!
