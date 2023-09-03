import tasks from '../../../tasksPlaceholdes.js'
import { setLocalStorage } from '../utils/localStorage.js'
import { renderTasks } from '../services/renderTasks.js'

const saveButton = document.querySelector(`#modal-button-edit`)
const taskTitle = document.querySelector(`.modal__title`)
const taskText = document.querySelector(`.modal__text`)
const selectTaskUser = document.querySelector(`.modal__select`)

export const editTask = id => {
  saveButton.addEventListener(`click`, () => {
    const task = tasks.find(obj => obj.id === id)
    if (task !== -1) {
      task.title = taskTitle.value
      task.description = taskText.value
      task.user = selectTaskUser.value
      setLocalStorage(`tasks`, tasks)
      renderTasks(tasks)
    }
  })
}
