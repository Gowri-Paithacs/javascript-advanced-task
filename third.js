//Sequential async loop (no Promise.all) 
async function getUsers() {
    const ids = [1, 2, 3, 4, 5];
    for (const id of ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();
        console.log(user);
    }
}
getUsers();