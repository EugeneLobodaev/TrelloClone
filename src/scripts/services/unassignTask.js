export const unassignTask = obj => {
  if (obj.stage === `inprogress`) {
    obj.stage = `todo`
  }
}
