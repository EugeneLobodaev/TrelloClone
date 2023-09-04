import { toggleModalWindowVisibility } from '../utils/toggleModalWindowVisibility'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'
import { tasks, updateCounters } from '../services'

export const handleSubmit = event => {
  event.preventDefault()
  const {
    target: { description, user, title },
    target: form,
  } = event

  const allTasks = getLocalStorage(`tasks`)

  if (form.dataset.role === 'add') {
    const task = {
      id: self.crypto.randomUUID(),
      title: title.value,
      description: !description.value ? 'No description.' : description.value,
      stage: 'todo',
      user: user.value === 'null' ? 'No user assigned.' : user.value,
      date: new Date().toLocaleDateString(),
    }

    allTasks.push(task)
  }

  if (form.dataset.role.includes('edit')) {
    const id = form.dataset.role.split('---')[1]
    const taskToEdit = allTasks.find(task => task.id === id)

    taskToEdit.title = title.value
    taskToEdit.description = description.value
    taskToEdit.user = user.value === 'null' ? 'No user assigned.' : user.value
  }

  setLocalStorage(`tasks`, allTasks)

  form.reset()
  toggleModalWindowVisibility(form.closest('.modal'))
  tasks.render()
  updateCounters()
}
