function getDiff(){
    let now = new Date()
    let [diaAtual, mesAtual, anoAtual] = [now.getDate(), now.getMonth() + 1, now.getFullYear()]
    let [diaNasc, mesNasc, anoNasc] = [16, 7, 1996]
    let [diffDia, diffMes, diffAno] = [diaAtual - diaNasc, mesAtual- mesNasc, anoAtual - anoNasc]
    if (diffDia < 0){
        diffDia += 31
        diffMes--
    }
    if (diffMes < 0){
        diffMes += 12
        diffAno--
    }
    return [diffDia, diffMes, diffAno]
}

function timeElapsedStringBuilder(days, months, years){
    string = ''
    string += `${years} anos `
    if (months > 0) {
        string += `${months} mes`
        if (months > 1) {
            string += 'es'
        }
        string += ' '
    }
    if (days > 0){
        string += `${days} dia`
        if (days > 1){
            string += 's'
        }
    }
    return string
}

document.querySelector("#idade")
    .textContent = timeElapsedStringBuilder(... getDiff())

let copyButton = document.querySelector(".copy-icon")
let emailDiv = document.querySelector("#email")

copyButton.addEventListener(
    "click",
    () => navigator.clipboard.writeText("katskuya@gmail.com"),
    false
)

emailDiv.onmouseover = () => copyButton.style.display = "flex"
emailDiv.onmouseleave = () => copyButton.style.display = "none"