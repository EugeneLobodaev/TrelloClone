import './scss/index.scss'
import { updateTime, updateCounters, tasks } from './scripts/services'
import { createSelectOptions } from './scripts/services/createSelectOptions'
import setHandlers from './scripts/utils/setHandlers.js'

const main = () => {
  updateTime()
  tasks.render()
  updateCounters()
  createSelectOptions()

  setHandlers()
}

export default main
