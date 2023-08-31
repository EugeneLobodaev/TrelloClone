export function updateCounters(tasks) {
  const tasksToDo = tasks.filter(task => task.stage === 'todo')
  const tasksInProgress = tasks.filter(task => task.stage === 'inprogress')
  const tasksDone = tasks.filter(task => task.stage === 'done')
  document.getElementById('todo-items-count').textConent = tasksToDo.length
  document.getElementById('in-progress-items-count').textConent =
    tasksInProgress.length
  document.getElementById('done-items-count').textConent = tasksDone.length
}
