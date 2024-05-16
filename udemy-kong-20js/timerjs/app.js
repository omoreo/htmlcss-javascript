const timeEl = document.querySelector(".time")
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let timer = null

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)
function startTimer() {
    if(timer != null) {
        clearInterval(timer)
    }

    timer = setInterval(displayTime,10)
}

function pauseTimer() {
    clearInterval(timer)
}

function resetTimer() {
    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0
    pauseTimer();
    timeEl.innerHTML = "00:00:00:0000"
}

function displayTime() {
    milliseconds += 10;

    if (milliseconds >= 1000) {
        milliseconds = milliseconds % 1000;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = seconds % 60;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = minutes % 60;
        hours++;
    }
    //ternary operator
    let h = hours < 10 ? "0" + hours : housrs
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds
    timeEl.innerHTML = `${h}:${m}:${s}:${ms}`
}
