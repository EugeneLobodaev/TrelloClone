import { showModal } from './modals.js'

export const addNewTask = document.querySelector(`#add-new-task`)
addNewTask.addEventListener(`click`, () => {
  showModal()
})
