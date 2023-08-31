import tasks from '../../../tasksPlaceholdes.js'

export const removeTask = id => {
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    console.log(id)
    tasks.splice(task, 1)
    console.log(tasks)
  }
}
