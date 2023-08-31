export const showModal = () => {
  const showModal = document.querySelector(`#modal-window-manage`)
  showModal.toggleAttribute(`hidden`)
}

const modalButtonClose = document.querySelector(`.modal__button--close`)
modalButtonClose.addEventListener(`click`, () => {
  // const modalForm = document.getElementsByClassName(`modal__content`)
  // modalForm.reset()
  showModal()
})

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

export const submitChanges = () => {}
