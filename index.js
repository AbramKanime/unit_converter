/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const resultLen = document.getElementById("result-len")
const resultVol = document.getElementById("result-vol")
const resultMass = document.getElementById("result-mass")
const convertBtn = document.getElementById("convert-btn")
const errorEl = document.getElementById("error-el")

convertBtn.addEventListener("click", function() {
   errorEl.textContent = ""
   let inputVal = Number(inputEl.value)
   if (isNaN(inputVal)) {
       errorEl.textContent = "Invalid Entry! Enter a number."
       resultLen.textContent = ""
       resultVol.textContent = ""
       resultMass.textContent = ""
   } else {
       let resultM = inputVal * 3.281
       let resultF = inputVal * 0.305
       resultLen.innerHTML = `${inputVal} meters = ${resultM.toFixed(3)} feet | ${inputVal} feet = ${resultF.toFixed(3)} meters`
       let resultL = inputVal * 0.264
       let resultG = inputVal * 3.788
       resultVol.innerHTML = `${inputVal} liters = ${resultL.toFixed(3)} gallons | ${inputVal} gallons = ${resultG.toFixed(3)} liters`
       let resultK = inputVal * 2.204
       let resultP = inputVal * 0.454
       resultMass.innerHTML = `${inputVal} kilograms = ${resultK.toFixed(3)} pounds | ${inputVal} pounds = ${resultP.toFixed(3)} kilograms`
   }
})

