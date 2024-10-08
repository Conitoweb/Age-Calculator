const DAY = document.querySelector("#day")
const MONTH = document.querySelector("#month")
const YEAR = document.querySelector("#year")
const BUTTON_SUBMIT = document.querySelector("#button__submit")
BUTTON_SUBMIT.addEventListener("click" ,  handleInput)

const INPUTS = document.querySelectorAll("input")


function handleInput(){
 let day = parseFloat(DAY.value)
 let month = parseFloat(MONTH.value)
 let year = parseFloat(YEAR.value)

 if(day && month && year){
     handleCalculator({day , month , year})

}else{
   alert("RELLENAR TODOS LOS CAMPOS") 
 }
 
    
}

function handleCalculator({day , month , year}){
    if(day <= 31 && month <= 12 && year <= 5000 ){
        const CampusYear = document.querySelector("#campusYear").textContent = year
        const CampusMonth = document.querySelector("#campusMonth").textContent = month
        const CampusDay = document.querySelector("#campusDay").textContent = day
    }


}
function handleChange(){
INPUTS.forEach((campos) => (
   campos.addEventListener("change" , changeCampus)
    
))
}

function changeCampus(e) {
    console.log(e.target.value);
    
}