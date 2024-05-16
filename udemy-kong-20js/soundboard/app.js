const sounds = ["Effect1", "Effect2", "Effect3", "Effect4", "Effect5"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText = sound
    btn.addEventListener("click", () => {
        stopSound()
        document.getElementById(sound).play()
    })
    document.getElementById("controller").appendChild(btn)
})

function stopSound() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0
    })
}