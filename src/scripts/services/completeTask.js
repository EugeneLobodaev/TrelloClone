import tasks from '../../../tasksPlaceholdes.js'
import { renderTasks } from './renderTasks'

export const completeTask = id => {
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    task.stage = `done`
    renderTasks(tasks)
  }
}
