function setCurrentTime(element) {
  const date = new Date()
  const currentTime = date.toLocaleTimeString()
  element.textContent = currentTime
}
export function updateTime() {
  const clock = document.getElementById('time')
  setCurrentTime(clock)
  setInterval(function () {
    setCurrentTime(clock)
  }, 1000)
}
