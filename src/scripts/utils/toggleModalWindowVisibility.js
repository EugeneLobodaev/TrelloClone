export const toggleModalWindowVisibility = modalWindow => {
  modalWindow.toggleAttribute('hidden')
  document.body.style.overflowY === 'hidden'
    ? (document.body.style.overflowY = 'auto')
    : (document.body.style.overflowY = 'hidden')
}
