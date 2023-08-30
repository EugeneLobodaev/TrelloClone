// import tasks from '../../../tasksPlaceholdes'

export const handleButtonsClick = event => {
  const { target } = event
  const { name } = target
  // const { id } = event.target // not used yet

  switch (name) {
    case `assign`:
      console.log(`assign`)
      break
    case `edit`:
      console.log(`edit`)
      break
    case `delete`:
      console.log(`delete`)
      break
    case `unassign`:
      console.log(`unasssign`)
      break
    case `completed`:
      console.log(`completed`)
      break
  }
}
