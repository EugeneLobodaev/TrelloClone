import { setLocalStorage, getLocalStorage } from '../../utils/localStorage.js'

export const remove = id => {
  const tasks = getLocalStorage(`tasks`)
  setLocalStorage(
    `tasks`,
    tasks.filter(obj => obj.id !== id),
  )
}
