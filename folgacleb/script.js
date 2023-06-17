const MILISECONDS_IN_AN_HOUR = 1000*60*60
const HOURS_IN_A_DAY = 24
const h1_folga = document.querySelector('#folga')
const img = document.querySelector('img')

const HOURS_PASSED_SINCE_1_1_1970 = (Date.now() / MILISECONDS_IN_AN_HOUR) - 3 //UTC -3
const DAYS_PASSED = HOURS_PASSED_SINCE_1_1_1970 / HOURS_IN_A_DAY

if (DAYS_PASSED % 2){
    h1_folga.textContent = "Cleb ta de folga hoje"
    img.src = "folga.jpg"
}else{
    h1_folga.textContent = "Cleb não ta de folga hoje"
    img.src = "semfolga.png"
}