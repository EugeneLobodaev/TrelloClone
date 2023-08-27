function getUserNames() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data.map(user => user.name))
    .catch(error => {
      console.error('Произошла ошибка:', error)
    })
}
getUserNames().then(names => {
  console.log(names)
})
