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

export const submitChanges = () => {}
