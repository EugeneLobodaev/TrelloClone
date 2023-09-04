import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'

export const deleteAll = () => {
  const tasks = getLocalStorage(`tasks`)
  setLocalStorage(
    `tasks`,
    tasks.filter(task => task.stage !== 'done'),
  )
}
