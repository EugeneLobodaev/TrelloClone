import './scss/index.scss'
import {
  updateTime,
  renderTasks,
  updateCounters,
} from '../src/scripts/services/index'
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
  updateCounters(tasks)
}

export default main
