/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('hero-btn')
const inputEl = document.getElementById('hero-input')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

const meterToFeetFactor = 3.281
const literToGallonFactor = 0.264
const kiloToPoundFactor = 2.204

function getLength(value) {
    let valueInFeet = (meterToFeetFactor * value).toFixed(3)
    let valueInMeters = (value / meterToFeetFactor).toFixed(3)
    lengthEl.textContent = `${value} meters = ${valueInFeet} feet | ${value} feet = ${valueInMeters} meters`
}

function getVolume(value) {
    let valueInGallon = (literToGallonFactor * value).toFixed(3)
    let valueInLiter = (value / literToGallonFactor).toFixed(3)
    volumeEl.textContent = `${value} liters = ${valueInGallon} gallons | ${value} gallons = ${valueInLiter} liters`
}

function getMass(value) {
    let valueInPounds = (kiloToPoundFactor * value).toFixed(3)
    let valueInKilos = (value / kiloToPoundFactor).toFixed(3)
    massEl.textContent = `${value} kilos = ${valueInPounds} pounds | ${value} pounds = ${valueInKilos} kilos`
}

convertBtn.addEventListener('click', () => {
    const baseValue = Number(inputEl.value)
    if(baseValue) {
        getLength(baseValue)
        getVolume(baseValue)
        getMass(baseValue) 
    }
})