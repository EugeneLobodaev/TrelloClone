import { tasks, updateCounters } from '../services'
import { getLocalStorage } from '../utils/localStorage'
import { toggleModalWindowVisibility } from '../utils/toggleModalWindowVisibility'

export const handleButtonsClick = event => {
  const { target } = event
  const { name } = target
  const { id } = event.currentTarget

  switch (name) {
    case `assign`:
      const allTasks = getLocalStorage(`tasks`)
      if (allTasks.filter(task => task.stage === 'inprogress').length < 6)
        tasks.start(id)
      else {
        const warningModalWindow = document.getElementById(
          'modal-window-warning',
        )
        warningModalWindow.querySelector(
          '.modal__text',
        ).textContent = `You can't assign more than 6 tasks :)`

        toggleModalWindowVisibility(warningModalWindow)
      }
      break
    case `edit`:
      const task = getLocalStorage(`tasks`).find(task => task.id === id)

      const modalManageWindow = document.getElementById('modal-window-manage')
      const from = modalManageWindow.querySelector('.modal__content')
      from.dataset.role = `edit---${id}`
      const { title, description, user } = from
      title.value = task.title
      description.value = task.description
      user.value = task.user === 'No user assigned.' ? 'null' : task.user
      toggleModalWindowVisibility(modalManageWindow)
      break
    case `delete`:
      tasks.remove(id)
      break
    case `unassign`:
      tasks.unassign(id)
      break
    case `completed`:
      tasks.complete(id)
      break
  }
  tasks.render()
  updateCounters()
}
