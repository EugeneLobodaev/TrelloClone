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
      console.log(`completed`)
      break
    case `assign-new`:
      assignTask()
      break
    case `delete-all`:
      deleteAllTasks()
      break
  }
  console.log(tasks)
  renderTasks(tasks)
}
