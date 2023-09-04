import { getUserNames } from '../utils/getUsers'

export const createSelectOptions = async () => {
  const select = document.querySelector('.modal__select')
  const usersList = await getUserNames()
  const options = usersList.map(user => {
    const selectOption = document.createElement('option')
    selectOption.textContent = user
    selectOption.value = user
    return selectOption
  })
  select.append(...options)
}
