const timeEl = document.querySelector(".time");
const toggleBtn = document.querySelector(".toggle");

function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
                        ${minutes < 10 ? `0${minutes}` : minutes }:
                        ${seconds < 10 ? `0${seconds}` : seconds}`
}

toggleBtn.addEventListener("click", () => {
    console.log("Swap mode")
    const html = document.querySelector("html")
    if(html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    } else {
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }
})

setTime();
setInterval(setTime, 1000);