const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      console.log(user.name);
    });
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });
