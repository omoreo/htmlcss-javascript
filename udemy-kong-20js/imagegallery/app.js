const smallImg = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-dummy");
const modal = document.querySelector(".modal");
smallImg.forEach(img => {
    img.addEventListener("click", () => {
        const fullsize = img.getAttribute("alt")
        const path = `https://placehold.it/640/480/${fullsize}.jpg`
        fullImg.src = path
        modal.classList.add("open")
    })
})

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})