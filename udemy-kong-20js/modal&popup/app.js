const openModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('#close-modal')
const modalcontainer = document.querySelector('.modal-container')

openModal.addEventListener("click", () => {
    modalcontainer.classList.add('show')
})
closeModal.addEventListener("click", () => {
    modalcontainer.classList.remove('show')
})