const submitButton = document.querySelector('.submit-weight-button')
const refreshButton = document.querySelector('.submit-refresh-button')

const currentWeightInput = document.querySelector('.current-weight')
const yearInput = document.querySelector('.date-year')
const monthInput = document.querySelector('.date-month')
const dayInput = document.querySelector('.date-day')

let weightData = JSON.parse(localStorage.getItem('weightData'))
let dateData = JSON.parse(localStorage.getItem('dateData'))

let weightArray = []

submitButton.addEventListener('click', () => {
    let newWeightData = currentWeightInput.value
    let newDateData = `${yearInput.value}-${monthInput.value}-${dayInput.value}`

    if (localStorage.getItem('weightData') == null && localStorage.getItem('dateData') == null) {
        localStorage.setItem('weightData', '[]')
        localStorage.setItem('dateData', '[]')
    }

    let oldWeightData = JSON.parse(localStorage.getItem('weightData'))
    oldWeightData.push(newWeightData)
    let oldDateData = JSON.parse(localStorage.getItem('dateData'))
    oldDateData.push(newDateData)

    localStorage.setItem('weightData', JSON.stringify(oldWeightData))
    localStorage.setItem('dateData', JSON.stringify(oldDateData))
})

refreshButton.addEventListener('click', () => {
    location.reload()
    console.log(window.innerWidth)
    // console.log(window.innerHeight)
})




for (let i = 0; i < weightData.length; i++) {
    weightArray.push(parseInt(weightData[[i]]))
}

let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.font.size = 18
Chart.defaults.color = 'black'

let massPopChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: dateData,
        datasets: [{
            label: 'Weight (lbs. or kgs.)',
            data: weightArray,
            backgroundColor: '#42f57b',
            fontSize: '20px',
            borderColor: 'black',
            pointRadius: 10
        }]
    },
    options: {
        responsive: true
    }
})