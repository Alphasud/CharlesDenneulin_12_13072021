export function getUserTime(id) {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}