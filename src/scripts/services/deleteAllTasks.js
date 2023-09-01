import tasks from '../../../tasksPlaceholdes'

export const deleteAllTasks = () => {
  const completeTask = tasks.find(obj => obj.stage === `done`)
  if (completeTask !== undefined) {
    tasks.splice(tasks.indexOf(completeTask), 1)
  }
}
