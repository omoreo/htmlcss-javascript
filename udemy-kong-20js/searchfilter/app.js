
const result = document.getElementById("result");
const filter = document.getElementById("filter")
const listItem = [];

/// get restcountries
const getCountriesAPI = async() => {
    const url = 'https://restcountries.com/v2/all';
    const responsive = await fetch(url);
    const items = await responsive.json();
    result.innerHTML = ""
// show and create html 
    items.forEach(data => {
        const li = document.createElement("li");
        listItem.push(li);
        li.innerHTML = `
            <img src="${data.flag}">
            <div class="info">
                <h4>${data.name}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `
        result.appendChild(li);
    });    
}
//filter event 
filter.addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();
    console.log(search)
    listItem.forEach(country => {
        if(country.innerText.toLowerCase().includes(search)) {
            //show country relative
            country.classList.remove("hide")
        } else {
            //hidden list no relative
            country.classList.add("hide")
        }
    })
})

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

getCountriesAPI();