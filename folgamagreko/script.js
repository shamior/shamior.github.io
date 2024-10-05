const MILISECONDS_IN_AN_HOUR = 1000*60*60
const HOURS_IN_A_DAY = 24
const h1_folga = document.querySelector('#folga')
const img = document.querySelector('img')

const qtd_fotos = {
    semfolga: 1,
    folga: 1,
    dormindo: 1
}

function random(start, end){
    return Math.floor(Math.random()*(end-start+1) + start)
}

function taDeFolga(date){
    const HOURS_PASSED_SINCE_1_1_1970 = (date.getTime() / MILISECONDS_IN_AN_HOUR) - 3 //UTC -3
    const DAYS_PASSED = parseInt(HOURS_PASSED_SINCE_1_1_1970 / HOURS_IN_A_DAY)
    return {
        trabalho: ((DAYS_PASSED + 2) % 4) == 0,
        dormindo: ((DAYS_PASSED + 1) % 4) == 0
    }

}

const tadefolgahj = taDeFolga(new Date())
if (tadefolgahj.trabalho){
    h1_folga.textContent = "Magreko Dreams não ta de folga hoje"
    img.src = `./semfolga/${random(1, qtd_fotos.folga)}.jpeg`
}else if (tadefolgahj.dormindo){
    h1_folga.textContent = "Magreko Dreams está a mimir hoje"
    img.src = `./dormindo/${random(1, qtd_fotos.semfolga)}.jpeg`
}else{
    h1_folga.textContent = "Magreko Dreams ta de folga hoje"
    img.src = `./folga/${random(1, qtd_fotos.semfolga)}.jpeg`
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
    let folguinha
    for (let i = 0; i < thisTotalWeeks; i++){
        html += `<div class="calendar-row">`
        for (let j = 0; j < first_weekday_of_month; j++){
            html += '<div></div>'
        }
        for (let j = first_weekday_of_month; j < 7; j++){
            thisDay = new Date(firstDay.getFullYear(), firstDay.getMonth(), day)
            folguinha = taDeFolga(thisDay)
            html += `<div class="calendar-day ${
                folguinha.trabalho ? "sem-folga":
                folguinha.dormindo ? "dormindo" :
                "folga"
            } ${ehHoje(thisDay)? "hoje" : ""}">${day}</div>`
            day++
            if (day > last_day_of_month){
                break
            }
        }
        first_weekday_of_month = 0
        html += `</div>`
    }
    html += '</div>'
    return html
}

calendarios.innerHTML = buildCalendar(firstDay, lastDay)
calendarios.innerHTML += buildCalendar(nextFirstDay, nextLastDay)

