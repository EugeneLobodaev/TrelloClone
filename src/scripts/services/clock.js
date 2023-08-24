export function currentTime() {
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  hour = updateTime(hour)
  min = updateTime(min)
  sec = updateTime(sec)
  document.getElementById('clock').innerText = hour + ' : ' + min + ' : ' + sec
  date = setTimeout(function () {
    currentTime()
  }, 1000)
  function updateTime(num) {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }
}
currentTime()
