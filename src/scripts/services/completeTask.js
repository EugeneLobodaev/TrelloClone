export const completeTask = obj => {
  if (obj.stage === `inprogress`) {
    obj.stage = `completed`
  }
}
