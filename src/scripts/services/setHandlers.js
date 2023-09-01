import { handleButtonsClick } from '../EventListeners/handleButtonsClick.js'

export const setClickTaskButtons = () => {
  const tasks = document.querySelectorAll(`.tasks`)
  tasks.forEach(taskCard => {
    taskCard.addEventListener(`click`, event => {
      handleButtonsClick(event)
    })
  })
}
