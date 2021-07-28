const maleCheckBox = document.getElementById('male')
const femaleCheckBox = document.getElementById('female')
const poundsCheckBox = document.getElementById('pounds')
const kilogramsCheckBox = document.getElementById('kilograms')

const ageInput = document.querySelector('.age-input')
const feetInput = document.querySelector('.feet-input')
const inchesInput = document.querySelector('.inches-input')
const centimetersInput = document.querySelector('.centimeters-input')
const weightInput = document.querySelector('.weight-input')

const heightContainer = document.querySelector('.height-values')
const centimeterContainer = document.querySelector('.centimeter-value')

const activityAmountSelect = document.querySelector('.activity-amount')

const calculateCaloriesButton = document.querySelector('.calculate-calories-button')

maleCheckBox.checked = true
poundsCheckBox.checked = true

const clearCalorieInputs = () => {
    ageInput.value = ''
    feetInput.value = ''
    inchesInput.value = ''
    centimetersInput.value = ''
    weightInput.value = ''
}

const clearTrackerInputs = () => {
    currentWeightInput.value = ''
    yearInput.value = ''
    monthInput.value = ''
    dayInput.value = ''
}

poundsCheckBox.addEventListener('click', () => {
    weightInput.setAttribute('placeholder', 'Pounds(lbs.)')
    centimeterContainer.classList.add('hidden')
    heightContainer.classList.remove('hidden')

    clearCalorieInputs()
})

kilogramsCheckBox.addEventListener('click', () => {
    weightInput.setAttribute('placeholder', 'Kilograms(kgs.)')
    centimeterContainer.classList.remove('hidden')
    heightContainer.classList.add('hidden')

    clearCalorieInputs()
})

calculateCaloriesButton.addEventListener('click', () => {
    let convertedKilograms = +(+weightInput.value * 0.45359237).toFixed(2)
    let convertedCentimeters = +((+feetInput.value * 30.48) + (+inchesInput.value * 2.54)).toFixed(2)

    if(maleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'no-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 5) * 1.2)

        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'light-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 5) * 1.375)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'moderate-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 5) * 1.55)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'hard-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 5) * 1.725)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'very-hard-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 5) * 1.9)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'no-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 5) * 1.2)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'light-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 5) * 1.375)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'moderate-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 5) * 1.55)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'hard-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 5) * 1.725)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (maleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'very-hard-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 5) * 1.9)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'no-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 161) * 1.2)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'light-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 161) * 1.375)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'moderate-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 161) * 1.55)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'hard-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 161) * 1.725)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && poundsCheckBox.checked == true && activityAmountSelect.value == 'very-hard-exercise') {
        let result = Math.floor((10 * convertedKilograms + 6.25 * convertedCentimeters - 5 * +ageInput.value + 161) * 1.9)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'no-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 161) * 1.2)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'light-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 161) * 1.375)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'moderate-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 161) * 1.55)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'hard-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 161) * 1.725)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else if (femaleCheckBox.checked == true && kilogramsCheckBox.checked == true && activityAmountSelect.value == 'very-hard-exercise') {
        let result = Math.floor((10 * +weightInput.value + 6.25 * +centimetersInput.value - 5 * +ageInput.value + 161) * 1.9)
        
        document.querySelector('.calorie-count-maintain').textContent = result
        document.querySelector('.calorie-count-mild').textContent = result - 250
        document.querySelector('.calorie-count-loss').textContent = result - 500
        document.querySelector('.calorie-count-extreme').textContent = result - 1000
    } else {
        return
    }
})

clearInputs()