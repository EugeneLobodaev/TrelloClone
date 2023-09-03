export const showModal = () => {
  const showModal = document.querySelector(`#modal-window-manage`)
  showModal.toggleAttribute(`hidden`)
}

const modalButtonClose = document.querySelector(`.modal__button--close`)
modalButtonClose.addEventListener(`click`, () => {
  showModal()
})

export const showModalEdit = () => {
  const showModalEdit = document.querySelector(`#modal-window-edit`)
  showModalEdit.toggleAttribute(`hidden`)
}
const modalButtonCloseEdit = document.querySelector(`.modal__button--discard`)
modalButtonCloseEdit.addEventListener(`click`, () => {
  showModalEdit()
})
