import './scss/index.scss'
import {
  updateTime,
  setClickTaskButtons,
  renderTasks,
} from '../src/scripts/services/index'
import tasks from '../tasksPlaceholdes'

const main = () => {
  updateTime()
  setClickTaskButtons()
  renderTasks(tasks)
}

export default main
