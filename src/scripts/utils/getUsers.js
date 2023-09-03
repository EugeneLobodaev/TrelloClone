export async function getUserNames() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await response.json()
    return usersData.map(user => user.name)
  } catch (error) {
    console.error(`Error: ${error}`)
    return []
  }
}

export async function userList() {
  const userOption = document.querySelector(`.modal__select`)
  userOption.addEventListener(`click`, async () => {
    const users = await getUserNames()
    users.forEach(user => {
      const userItem = document.createElement(`option`)
      userItem.textContent = user
      userOption.append(userItem)
    })
  })
}

export async function userListEdit() {
  const userOption = document.querySelector(`#modal-select-edit`)
  userOption.addEventListener(`click`, async () => {
    const users = await getUserNames()
    users.forEach(user => {
      const userItem = document.createElement(`option`)
      userItem.textContent = user
      userOption.append(userItem)
    })
  })
}
