const togglePassword = document.querySelector('#togglePassword');
const passwordEl = document.querySelector('#password');

togglePassword.addEventListener("click", () => {
    if(togglePassword.classList.contains("fa-eye")){
        togglePassword.classList.replace("fa-eye", "fa-eye-slash")
        passwordEl.setAttribute("type", "text")
    } else {
        togglePassword.classList.replace("fa-eye-slash", "fa-eye")
        passwordEl.setAttribute("type", "password")
    }
})