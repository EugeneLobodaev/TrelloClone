import { createTask } from '../../components/index.js'
import { setClickTaskButtons } from './setHandlers.js'

export function renderTasks(tasks) {
  const unassignedTasks = tasks.filter(task => task.stage === `todo`)
  const inprogressTasks = tasks.filter(task => task.stage === `inprogress`)
  const completedTasks = tasks.filter(task => task.stage === `done`)
  const unassignedStage = document.getElementById(`tasks--unassigned`)
  const inprogressStage = document.getElementById(`tasks--inprogress`)
  const completedStage = document.getElementById(`tasks--completed`)
  unassignedStage.innerHTML = ``
  completedStage.innerHTML = ``
  inprogressStage.innerHTML = ``

  unassignedTasks.forEach(task => {
    unassignedStage.append(createTask(task))
  })
  inprogressTasks.forEach(task => {
    inprogressStage.append(createTask(task))
  })
  completedTasks.forEach(task => {
    completedStage.append(createTask(task))
  })
  setClickTaskButtons()
}
