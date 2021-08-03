export function getUserPerformance(id) {
    return fetch(`http://localhost:3000/user/${id}/performance`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}