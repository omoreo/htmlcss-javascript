const message = [
    "Hello, World!",
    "Hello, Universe!",
    "Hello, Everyone!",
    "Good, Night",
    "Good, Morning",
    "Good, Afternoon",
];

const btnnotification = document.querySelector(".btn")
const container = document.querySelector(".container")
btnnotification.addEventListener("click", () => createNotification())

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("notification");
    notif.innerText = randomMessage();
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);

}

function randomMessage() {
    return message[Math.floor(Math.random() * message.length)];
}
