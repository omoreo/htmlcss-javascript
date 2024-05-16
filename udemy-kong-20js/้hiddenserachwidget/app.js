const search = document.querySelector('.search');
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    search.classList.toggle('active') //add class="search" to class="search active" but can toggle
    input.focus()
})