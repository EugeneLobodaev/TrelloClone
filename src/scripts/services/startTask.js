import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'

export const startTask = id => {
  const tasks = getLocalStorage(`tasks`)
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    task.stage = `inprogress`
    setLocalStorage(`tasks`, tasks)
  }
}
