import { handleButtonsClick } from '../handlers/taskCardButtonsClick.js'
import { handleSubmit } from '../handlers/formSubmit.js'
import { toggleModalWindowVisibility } from './toggleModalWindowVisibility'
import { tasks, updateCounters } from '../services'

export const setTaskButtonsHandlers = () => {
  const tasks = document.querySelectorAll('.task')
  for (const taskCard of tasks) {
    taskCard.addEventListener('click', event => {
      handleButtonsClick(event)
    })
  }
}

const modalManageWindow = document.getElementById('modal-window-manage')
const warningModalWindow = document.getElementById('modal-window-warning')

const setHandlers = () => {
  setFormSubmitHandler()
  setModalManageWindowControlsHandlers()
  setTasksHandlers()
  setWarningModalWindowHandlers()
}

const setFormSubmitHandler = () => {
  modalManageWindow.addEventListener('submit', event => {
    handleSubmit(event)
  })
}

const setModalManageWindowControlsHandlers = () => {
  modalManageWindow
    .querySelector('.modal__content')
    .addEventListener('click', event => {
      const {
        currentTarget: { closeBtn },
        currentTarget: form,
        target,
      } = event

      if (target === closeBtn) {
        form.reset()
        toggleModalWindowVisibility(modalManageWindow)
      }
    })
}

const setTasksHandlers = () => {
  const addNewTaskButton = document.getElementById('add-new-task')
  modalManageWindow.querySelector('.modal__content').dataset.role = 'add'
  addNewTaskButton.addEventListener('click', () => {
    toggleModalWindowVisibility(modalManageWindow)
  })

  warningModalWindow.querySelectorAll('.modal__button').forEach(button => {
    button.addEventListener('click', () => {
      toggleModalWindowVisibility(warningModalWindow)

      if (warningModalWindow.dataset.delete === 'true') {
        tasks.deleteAll()
        updateCounters()
        tasks.render()

        warningModalWindow.dataset.delete = 'false'
      }
    })
  })

  const deleteAllTasksButton = document.getElementById('tasks-delete-all')
  deleteAllTasksButton.addEventListener('click', () => {
    warningModalWindow.dataset.delete = 'true'
    toggleModalWindowVisibility(warningModalWindow)
    warningModalWindow.querySelector(
      '.modal__text',
    ).textContent = `Are you sure you want to delete all tasks?`
    warningModalWindow.dataset.delete = 'false'
  })
}

const setWarningModalWindowHandlers = () => {}

export default setHandlers
