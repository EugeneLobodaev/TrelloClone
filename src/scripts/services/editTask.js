import { showModal } from './modals.js'

export const editTask = () => {
  showModal()
  const modalButtonSubmit = document.querySelector(`.modal__button`)
  modalButtonSubmit.addEventListener(`submit`, event => {
    // const taskHeader = document.querySelector(`.task__header`)
    // const taskDescription = document.querySelector(`.task__description`)
    // const taskFooter = document.querySelector(`.task__footer`)
    // taskHeader = Инпуту хедера
    // taskDescription = инпуту дескрипшена
    // taskFooter = инпуту футера
    // renderTasks()
  })
}
