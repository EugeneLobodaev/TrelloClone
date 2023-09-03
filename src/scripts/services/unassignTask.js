import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'

export const unassignTask = id => {
  const tasks = getLocalStorage(`tasks`)
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    task.stage = `todo`
    setLocalStorage(`tasks`, tasks)
  }
}
