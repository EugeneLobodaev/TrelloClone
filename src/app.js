import './scss/index.scss'
import { updateTime } from '../src/scripts/services/clock.js'
import { createTask } from './components/index.js'
import tasks from '../tasksPlaceholdes.js'
const main = () => {
    updateTime()
    console.log(createTask(tasks[0]))
}
export default main
