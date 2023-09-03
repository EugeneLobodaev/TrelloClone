import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'
import { showModal } from './modals.js'

export const assignTask = () => {
  showModal()
}
export const assignButton = () => {
  const assignButton = document.querySelector(`#modal-button-close`)
  const taskTitle = document.querySelector(`.modal__title`)
  const taskText = document.querySelector(`.modal__text`)
  const selectTaskUser = document.querySelector(`.modal__select`)
  assignButton.addEventListener(`click`, () => {
    const taskArr = getLocalStorage(`tasks`)
    const taskObj = {
      id: self.crypto.randomUUID(),
      title: taskTitle.value,
      description: taskText.value,
      stage: 'todo',
      user: selectTaskUser.value,
      date: new Date().toLocaleDateString(),
    }
    taskArr.push(taskObj)
    setLocalStorage(`tasks`, taskArr)
    console.log(taskArr)
  })
}
