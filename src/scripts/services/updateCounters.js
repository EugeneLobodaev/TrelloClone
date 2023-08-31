export function updateCounters(tasks) {
  const tasksToDo = tasks.filter(task => task.stage === 'todo')
  const tasksInProgress = tasks.filter(task => task.stage === 'inprogress')
  const tasksDone = tasks.filter(task => task.stage === 'done')
  document.getElementById('todo-items-count').textConent = tasksToDo
  document.getElementById('in-progress-items-count').textConent =
    tasksInProgress
  document.getElementById('done-items-count').textConent = tasksDone
}
