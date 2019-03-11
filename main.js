var i
const max = 10
var click_times = new Array()
var random = new Array()

for (var i=0; i<max; i++) {
  random[i] = Math.floor( Math.random() * 11 )
}

alert("jsのalertを" + max + "回閉じるタイムアタック\nOKを押すと開始")
const start_time = performance.now()
click_times[0] = start_time

for (i=1; i<=max; i++) {
  alert(i + "回目" + "\n".repeat(random[i-1]))
  click_times.push(performance.now())
}

const finish_time = performance.now()
const result = finish_time - start_time

window.onload = function() {
  document.getElementById("res").innerHTML = "Result: " + result + "<br>Average: " + result/max + "[ms]<br>"

  var lap_times_str = ""
  for (i=1; click_times[i]!=null; i++) {
    lap_times_str += i + "回目: " + (click_times[i] - click_times[i-1]) + "[ms]<br>"
  }
   document.getElementById("lap").innerHTML = lap_times_str
}
