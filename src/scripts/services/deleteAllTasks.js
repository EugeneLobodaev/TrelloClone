import tasks from '../../../tasksPlaceholdes'
import { setLocalStorage } from '../utils/localStorage'

export const deleteAllTasks = () => {
  const completedTasks = tasks.filter(task => task.stage === 'done')

  completedTasks.forEach(task => {
    tasks.splice(tasks.indexOf(task), 1)
    setLocalStorage(`tasks`, tasks)
  })
}
