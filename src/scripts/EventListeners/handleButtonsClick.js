import { editTask } from '../services/editTask.js'
import { removeTask } from '../services/removeTask.js'
import { renderTasks } from '../services/renderTasks.js'
import tasks from '../../../tasksPlaceholdes.js'

export const handleButtonsClick = event => {
  const { target } = event
  const { name } = target
  const { id } = event.target

  switch (name) {
    case `assign`:
      console.log(`assign`)
      // assignTask(id)
      break
    case `edit`:
      console.log(`edit`)
      editTask()
      break
    case `delete`:
      removeTask(id)
      break
    case `unassign`:
      console.log(`unasssign`)
      // unassignTask(id)
      break
    case `completed`:
      removeTask(id)
      console.log(`completed`)
      break
  }
  renderTasks(tasks)
}
