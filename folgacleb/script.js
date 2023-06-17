const MILISECONDS_IN_AN_HOUR = 1000*60*60
const HOURS_IN_A_DAY = 24
const h1_folga = document.querySelector('#folga')
const img = document.querySelector('img')

function taDeFolga(date){
    const HOURS_PASSED_SINCE_1_1_1970 = (date.getTime() / MILISECONDS_IN_AN_HOUR) - 3 //UTC -3
    const DAYS_PASSED = HOURS_PASSED_SINCE_1_1_1970 / HOURS_IN_A_DAY
    console.log(DAYS_PASSED)
    return DAYS_PASSED % 2
}


if (taDeFolga(new Date())){
    h1_folga.textContent = "Cleb ta de folga hoje"
    img.src = "folga.jpg"
}else{
    h1_folga.textContent = "Cleb não ta de folga hoje"
    img.src = "semfolga.png"
}


const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const months = [
    'Janeiro',  'Fevereiro',    'Março',    'Abril',
    'Maio',     'Junho',        'Julho',    'Agosto',
    'Setembro', 'Outubro',      'Novembro', 'Dezembro'
]
function getFirstAndLastDayOfMonth(date){
    let first_day_of_month = new Date(date.getFullYear(), date.getMonth())
    let last_day_of_month = new Date(date.getFullYear(), date.getMonth()+1, 0)
    return [first_day_of_month, last_day_of_month]
}

function totalWeeks(firstDayOfMonth, lastDayOfTheMonth){
    return Math.ceil((firstDayOfMonth.getDay() + lastDayOfTheMonth.getDate())/7)
}


let today = new Date()

const [firstDay, lastDay] = getFirstAndLastDayOfMonth(today)
const [nextFirstDay, nextLastDay] = getFirstAndLastDayOfMonth(
    new Date(
        today.getFullYear(),
        today.getMonth(),
        lastDay.getDate() + 1
    )
)

function ehHoje(date){
    let hoje = new Date()
    return (
        date.getFullYear() == hoje.getFullYear() &&
        date.getMonth() == hoje.getMonth() &&
        date.getDate() == hoje.getDate()
    )
}

function buildCalendar(firstDay, lastDay){
    let thisTotalWeeks = totalWeeks(firstDay, lastDay)
    let first_weekday_of_month = firstDay.getDay()
    let last_day_of_month = lastDay.getDate()
    
    let html = '<div class="calendar">'
    html += `<div class="month">${months[firstDay.getMonth()]}</div>`
    html += '<div class="calendar-row weekrow">'
    for (let i = 0; i < 7; i++){
        html += `<div class="weekday">${weekdays[i]}</div>`
    }
    html += '</div>'
    let day = 1
    let thisDay
    for (let i = 0; i < thisTotalWeeks; i++){
        html += `<div class="calendar-row">`
        for (let j = 0; j < first_weekday_of_month; j++){
            html += '<div></div>'
        }
        for (let j = first_weekday_of_month; j < 7; j++){
            thisDay = new Date(firstDay.getFullYear(), firstDay.getMonth(), day)
            html += `<div class="calendar-day ${taDeFolga(thisDay) ? "folga": "sem-folga"} ${ehHoje(thisDay)? "hoje" : ""}">${day}</div>`
            if (day > last_day_of_month){
                break
            }
            day++
        }
        first_weekday_of_month = 0
        html += `</div>`
    }
    html += '</div>'
    return html
}

calendarios.innerHTML = buildCalendar(firstDay, lastDay)
calendarios.innerHTML += buildCalendar(nextFirstDay, nextLastDay)

