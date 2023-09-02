import tasks from '../../../tasksPlaceholdes.js'
import { renderTasks } from './renderTasks'
import { updateCounters } from './updateCounters.js'

export const completeTask = id => {
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    task.stage = `done`
    renderTasks(tasks)
    updateCounters(tasks)
  }
}
