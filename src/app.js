import './scss/index.scss'
import { updateTime, renderTasks } from '../src/scripts/services/index'
import {
  addNewTask,
  deleteAll,
} from './scripts/EventListeners/handleButtonsClick'
import tasks from '../tasksPlaceholdes'

const main = () => {
  updateTime()
  addNewTask()
  deleteAll()
  renderTasks(tasks)
}

export default main
