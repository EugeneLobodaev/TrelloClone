import './styles.scss'
export function createTask(task) {
  const taskItem = document.createElement(`li`)
  taskItem.classList.add(`tasks__list-item`)

  const taskContainer = document.createElement(`article`)
  taskContainer.className = `task`
  taskContainer.id = task.id

  const taskHeader = document.createElement(`header`)
  taskHeader.className = `task__header`

  const taskTitle = document.createElement(`h3`)
  taskTitle.className = `task__title`
  taskTitle.textContent = task.title

  const taskButtonsWrapper = document.createElement(`div`)
  taskButtonsWrapper.className = `task__controls`

  const taskDescription = document.createElement(`p`)
  taskDescription.className = `task__desctription`
  taskDescription.textContent = task.description

  const taskFooter = document.createElement(`footer`)
  taskFooter.className = `task__footer`

  const assignedUser = document.createElement(`p`)
  assignedUser.className = `task__user`
  assignedUser.textContent = task.user

  const assignedDate = document.createElement(`p`)
  assignedDate.className = `task__date`
  assignedDate.textContent = task.date

  if (task.stage === `todo`) {
    const acceptButton = document.createElement(`button`)
    acceptButton.type = `button`
    acceptButton.className = `task__btn`
    acceptButton.textContent = `Take`
    acceptButton.name = `assign`

    const editButton = document.createElement(`button`)
    editButton.type = `button`
    editButton.className = `task__btn`
    editButton.id = `task-button-edit`
    editButton.textContent = `Edit`
    editButton.name = `edit`

    const deleteButton = document.createElement(`button`)
    deleteButton.type = `button`
    deleteButton.className = `task__btn`
    deleteButton.textContent = `Delete`
    deleteButton.name = `delete`

    taskButtonsWrapper.append(acceptButton, editButton, deleteButton)
  }
  if (task.stage === `inprogress`) {
    const backButton = document.createElement(`button`)
    backButton.type = `button`
    backButton.className = `task__btn`
    backButton.textContent = `Unassign`
    backButton.name = `unassign`

    const completeTask = document.createElement(`button`)
    completeTask.type = `button`
    completeTask.className = `task__btn`
    completeTask.textContent = `Completed!`
    completeTask.name = `completed`

    taskButtonsWrapper.append(backButton, completeTask)
  }

  if (task.stage === `done`) {
    const deleteButton = document.createElement(`button`)
    deleteButton.type = `button`
    deleteButton.className = `task__btn`
    deleteButton.textContent = `Clear`
    deleteButton.name = `delete`

    taskButtonsWrapper.append(deleteButton)
  }

  taskHeader.append(taskTitle, taskButtonsWrapper)
  taskFooter.append(assignedUser, assignedDate)
  taskContainer.append(taskHeader, taskDescription, taskFooter)
  taskItem.append(taskContainer)
  return taskItem
}
