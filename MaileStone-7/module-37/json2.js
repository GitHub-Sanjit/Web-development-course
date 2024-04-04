const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
  .then(res => res.json())
  .then(data=> console.log(data[9].phone))
