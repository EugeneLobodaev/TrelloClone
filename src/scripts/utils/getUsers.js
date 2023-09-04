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
