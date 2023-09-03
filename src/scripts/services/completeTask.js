// import tasks from '../../../tasksPlaceholdes.js'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'

export const completeTask = id => {
  const tasks = getLocalStorage(`tasks`)
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    task.stage = `done`
    setLocalStorage(`tasks`, tasks)
  }
}
