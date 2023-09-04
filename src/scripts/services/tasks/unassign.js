import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.js'

export const unassign = id => {
  const tasks = getLocalStorage(`tasks`)
  tasks.find(task => task.id === id).stage = `todo`
  setLocalStorage(`tasks`, tasks)
}
