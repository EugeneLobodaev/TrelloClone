import './scss/index.scss'
import tasks from '../tasksPlaceholdes'
import {
  updateTime,
  renderTasks,
  setClickTaskButtons,
} from '../src/scripts/services/index'

const main = () => {
  updateTime()
  renderTasks(tasks)
  setClickTaskButtons()
}

export default main
