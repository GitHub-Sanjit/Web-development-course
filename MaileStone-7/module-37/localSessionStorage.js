// Sample object to store
var user = {
  name: "John Doe",
  email: "john@example.com",
};

// Serialize the object to JSON and store it in localStorage
localStorage.setItem("user", JSON.stringify(user));

// Retrieve the JSON string from localStorage and parse it back to an object
var retrievedUser = JSON.parse(localStorage.getItem("user"));

console.log(retrievedUser); // Output: { name: "John Doe", email: "john@example.com" }

// Do the same with sessionStorage
sessionStorage.setItem("user", JSON.stringify(user));
var retrievedUserSession = JSON.parse(sessionStorage.getItem("user"));
console.log(retrievedUserSession); // Output: { name: "John Doe", email: "john@example.com" }
