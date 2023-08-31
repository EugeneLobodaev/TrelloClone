import './scss/index.scss'
import { updateTime, setClickTaskButtons } from '../src/scripts/services/index'

const main = () => {
  updateTime()
  setClickTaskButtons()
}

export default main
