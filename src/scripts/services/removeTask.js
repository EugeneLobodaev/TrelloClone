import tasks from '../../../tasksPlaceholdes.js'
import { setLocalStorage } from '../utils/localStorage.js'

export const removeTask = id => {
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    tasks.splice(tasks.indexOf(task), 1)
    setLocalStorage(`tasks`, tasks)
  }
}
