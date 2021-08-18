function getUser(id) {
    return fetch(`http://localhost:3000/user/${id}`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}

function getUserActivity(id) {
    return fetch(`http://localhost:3000/user/${id}/activity`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}

function getUserPerformance(id) {
    return fetch(`http://localhost:3000/user/${id}/performance`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}

function getUserScore(id) {
    return fetch(`http://localhost:3000/user/${id}`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}

function getUserTime(id) {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then(data => data.json()
        .catch(error => console.log(error)))
}

export { getUser, getUserActivity, getUserPerformance, getUserScore, getUserTime }