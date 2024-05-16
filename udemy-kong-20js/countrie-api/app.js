const container = document.getElementById('container')

const getCountriesAPI = async() => {
    const url = 'https://restcountries.com/v2/all';
    const responsive = await fetch(url);
    const items = await responsive.json();
    items.forEach(element => {
        createCard(element);
    })
}

const createCard = (data) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add("countries")
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flag}" />
        </div>
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <small>Capital Ciity : <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML = contentHTML;
    container.appendChild(cardEl);
}

getCountriesAPI(); // Call the function