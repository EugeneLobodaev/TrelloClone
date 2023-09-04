import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.js'

export const complete = id => {
  const tasks = getLocalStorage(`tasks`)
  tasks.find(task => task.id === id).stage = `done`
  setLocalStorage(`tasks`, tasks)
}
