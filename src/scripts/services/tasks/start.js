import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.js'

export const start = id => {
  const tasks = getLocalStorage(`tasks`)
  tasks.find(task => task.id === id).stage = `inprogress`
  setLocalStorage(`tasks`, tasks)
}
