export function getUserActivity(id) {
    return fetch(`http://localhost:3000/user/${id}/activity`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}