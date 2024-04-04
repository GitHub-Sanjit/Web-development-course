// const mewArray = array.map((currentValue, index, array) => {
//     // return new value based on currentValue.
// })

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(num => num * 2)
// console.log(doubleNumbers)

// const users = [
//   { id: 1, name: "John", age: 30 },
//   { id: 2, name: "Alice", age: 25 },
//   { id: 3, name: "Bob", age: 35 },
// ];

// const userName = users.map(user => user.name);
// console.log(userName)

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Smartphone", price: 500 },
//   { id: 3, name: "Tablet", price: 300 },
// ];

// const increasedPrices = products.map((product) => {
//   return {
//     ...product,
//     price: product.price * 1.1,
//   };
// });
// console.log(increasedPrices)

// const students = [
//   { id: 1, name: "John", grade: "A" },
//   { id: 2, name: "Alice", grade: "B" },
//   { id: 3, name: "Bob", grade: "C" },
// ];

// const studentWithStatus = students.map((student) => {
//   return {
//     ...student,
//     status: student.grade === "A" ? "Excellent" : "Good",
//   };
// });
// console.log(studentWithStatus);

const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const bookWithSummary = books.map((book) => {
  return {
    ...book,
    summary: `${book.title} by ${book.author}, published in ${book.year}`,
    };
    
});

console.log(bookWithSummary)