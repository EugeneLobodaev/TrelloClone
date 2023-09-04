import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.js'

export const edit = () => {
  const assignButton = document.querySelector(`#modal-button-edit`)
  const taskTitle = document.querySelector(`#modal-title-edit`)
  const taskText = document.querySelector(`#modal-text-edit`)
  const selectTaskUser = document.querySelector(`#modal-select-edit`)
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
