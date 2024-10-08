const DAY = document.querySelector("#day")
const MONTH = document.querySelector("#month")
const YEAR = document.querySelector("#year")
const BUTTON_SUBMIT = document.querySelector("#button__submit")
BUTTON_SUBMIT.addEventListener("click" ,  handleInput)
const INPUTS = document.querySelectorAll("input")
let FechaActual = new Date()


function handleInput(){
    let day = parseFloat(DAY.value)
    let month = parseFloat(MONTH.value)
    let year = parseFloat(YEAR.value)
  
 if(day && month && year){
     handleCalculator({day , month , year})

}else{
    alert("llenar campos")
    
}


}
function validNumber({day , month , year}){
    const invalidDay = document.querySelector("#invalid__day")
    const invalidMonth = document.querySelector("#invalid__month")
    const invalidYear = document.querySelector("#invalid__year")
    day > 31 ? invalidDay.style.display = "flex" : invalidDay.style.display = "none"
    month > 12 ? invalidMonth.style.display = "flex" : invalidMonth.style.display = "none"
    year > 5000 ? invalidYear.style.display = "flex" : invalidYear.style.display = "none"
}
function handleCalculator({day , month , year}){
    validNumber({day , month , year})
    if(day <= 31 && month <= 12 && year <= 5000 ){
        let resultYear = Math.abs(FechaActual.getFullYear() - year)
        let resultMonth = Math.abs(FechaActual.getMonth() - month)
        let resultDay = Math.abs(FechaActual.getDay() - day)
        const CampusYear = document.querySelector("#campusYear").textContent = resultYear
        const CampusMonth = document.querySelector("#campusMonth").textContent = resultMonth
        const CampusDay = document.querySelector("#campusDay").textContent = resultDay
    }


}


