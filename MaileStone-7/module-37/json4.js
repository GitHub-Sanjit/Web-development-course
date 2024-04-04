const apiUrl = "https://jsonplaceholder.typicode.com/users";
async function fData() {
    const res = await fetch(apiUrl)
    const data = await res.json()
    console.log(data)
}
fData()
