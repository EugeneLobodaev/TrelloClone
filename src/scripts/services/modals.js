import tasks from '../../../tasksPlaceholdes.js'

export const showModal = () => {
  const showModal = document.querySelector(`#modal-window-manage`)
  showModal.toggleAttribute(`hidden`)
}

const modalButtonClose = document.querySelector(`.modal__button--close`)
modalButtonClose.addEventListener(`click`, () => {
  showModal()
})

export const showModalEdit = id => {
  const showModalEdit = document.querySelector(`#modal-window-edit`)
  showModalEdit.toggleAttribute(`hidden`)
  const taskTitle = document.querySelector(`#modal-title-edit`)
  const taskText = document.querySelector(`#modal-text-edit`)
  const selectTaskUser = document.querySelector(`#modal-select-edit`)
  const task = tasks.find(obj => obj.id === id)
  if (task !== -1) {
    taskTitle.value = task.title
    selectTaskUser.option = task.user
    taskText.textContent = task.description
  }
}
const modalButtonCloseEdit = document.querySelector(`.modal__button--discard`)
modalButtonCloseEdit.addEventListener(`click`, () => {
  showModalEdit()
})
