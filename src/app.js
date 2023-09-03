import './scss/index.scss'
import {
  updateTime,
  renderTasks,
  updateCounters,
  assignButton,
} from '../src/scripts/services/index'
import {
  addNewTask,
  deleteAll,
} from './scripts/EventListeners/handleButtonsClick'
import tasks from '../tasksPlaceholdes'
import { userList } from './scripts/utils/getUsers.js'
const main = () => {
  updateTime()
  addNewTask()
  deleteAll()
  renderTasks(tasks)
  updateCounters(tasks)
  assignButton()
  userList()
}

export default main
