const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInput = document.querySelectorAll("input")

tempInput.forEach(input => {
    input.addEventListener("input", (e) => {
        let tempValue = parseInt(e.target.value) //get number
        let inputName = e.target.name // get unit temp

        if(e.target.value === "") {
            celciusInput.value = null
            fahrenheitInput.value = null
            kelvinInput.value = null
            return
        }

        if(inputName === "celcius") {
            let fahrenheit = tempValue * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)
            let kelvin = tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)

        } else if(inputName === "fahrenheit") {
            let celcius = (tempValue - 32) / 1.8
            celciusInput.value = celcius.toFixed(2)
            let kelvin = (tempValue- 32) / 1.8 + 273
            kelvinInput.value = kelvin.toFixed(2)
        
        } else if(inputName === "kelvin") {
            let celcius = tempValue - 273
            celciusInput.value = celcius.toFixed(2)
            let fahrenheit = (tempValue - 273) * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})

// C to F = 1.8xC+32 C to K = C+273