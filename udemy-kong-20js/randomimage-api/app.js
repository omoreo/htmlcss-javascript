// const getImageAPI = async() => {
//     const url = "";
//     const responsive = await fetch(url);
// }

const container = document.querySelector(".container")
const rows = 2 //แถวอะ
const cols = 3; //
function randomNum() {
    return(Math.floor(Math.random() * 500))
}

for(let i = 0; i < rows * cols; i++) {
    const url = `https://source.unsplash.com/random/${randomNum()}` // string interpolation
    const imgEl = document.createElement("img")
    imgEl.src = url
    container.appendChild(imgEl)
}