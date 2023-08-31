import './scss/index.scss'
import tasks from '../tasksPlaceholdes'
import {
  updateTime,
  renderTasks,
  updateCounters,
} from '../src/scripts/services/index'

const main = () => {
  updateTime()
  renderTasks(tasks)
  updateCounters(tasks)
}

export default main
