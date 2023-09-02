import { editTask } from '../services/editTask.js'
import { removeTask } from '../services/removeTask.js'
import { renderTasks } from '../services/renderTasks.js'
import { assignTask } from '../services/assignTask.js'
import tasks from '../../../tasksPlaceholdes.js'
import { unassignTask } from '../services/unassignTask.js'
import { completeTask } from '../services/completeTask.js'
import { deleteAllTasks } from '../services/deleteAllTasks.js'

export const handleButtonsClick = event => {
  const { target } = event
  const { name } = target
  const { id } = event.currentTarget

  switch (name) {
    case `assign`:
      console.log(`assign`)
      assignTask()
      break
    case `edit`:
      console.log(`edit`)
      editTask()
      break
    case `delete`:
      removeTask(id)
      console.log(`delete`)
      break
    case `unassign`:
      unassignTask(id)
      console.log(`unasssign`)
      break
    case `completed`:
      completeTask(id)
      break
  }
  console.log(tasks)
  renderTasks(tasks)
}
export const addNewTask = () => {
  const addNewTask = document.querySelector(`#add-new-task`)
  addNewTask.addEventListener(`click`, () => {
    assignTask()
    renderTasks(tasks)
  })
}
export const deleteAll = () => {
  const deleteAll = document.querySelector(`#tasks-delete-all`)
  deleteAll.addEventListener(`click`, () => {
    deleteAllTasks()
    renderTasks(tasks)
  })
}
