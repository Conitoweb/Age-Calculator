const DAY = document.querySelector("#day")
const MONTH = document.querySelector("#month")
const YEAR = document.querySelector("#year")
const BUTTON_SUBMIT = document.querySelector("#button__submit")
BUTTON_SUBMIT.addEventListener("click" ,  handleInput)
const INPUTS = document.querySelectorAll("input")
const LABEL = document.querySelectorAll("label")
let FechaActual = new Date()



function handleInput(){
    //parseamos para que sea number y no string
    let day = parseInt(DAY.value)
    let month = parseInt(MONTH.value)
    let year = parseInt(YEAR.value)
  
 if(day && month && year){
     handleCalculator({day , month , year})

}else{
  invalidForm()
}


}

function invalidForm() {
    INPUTS.forEach(input => {
        input.classList.add("warning")
      
    })
        LABEL.forEach(label => {
            label.classList.add("warning-label")
        })

}
function formValid(){
    INPUTS.forEach(input => {
        input.classList.remove("warning")
      
    })
        LABEL.forEach(label => {
            label.classList.remove("warning-label")
        })
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
   formValid()
    validNumber({day , month , year})
   
    if(day <= 31 && month <= 12 && year <= 5000 ){
        let resultYear = Math.abs(FechaActual.getFullYear() - year)
        let resultMonth = Math.abs((FechaActual.getMonth() + 1 ) - month)
        let resultDay = Math.abs(FechaActual.getDate() - day)
        
        const CampusYear = document.querySelector("#campusYear").textContent = resultYear
        const CampusMonth = document.querySelector("#campusMonth").textContent = resultMonth
        const CampusDay = document.querySelector("#campusDay").textContent = resultDay
    }


}


