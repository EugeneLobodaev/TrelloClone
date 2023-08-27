import './scss/index.scss'
import tasks from '../tasksPlaceholdes'
import { updateTime, renderTasks } from '../src/scripts/services/index'
const main = () => {
  updateTime()
  renderTasks(tasks)
}
export default main
