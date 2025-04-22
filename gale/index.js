const divStart = '<div class="ciclo">\n'

function getGale(cont){
    if (cont%8 === 0) return "sg"
    return `g${cont%8}`
}

document.querySelector('button').addEventListener(
    "click", (event) => {
        let entrada = Number(document.querySelector("#entrada").value)
        let porcentagem = (1/100) *  Number(document.querySelector("#porcentagem").value.replace(',', '.'))
        let container = document.querySelector("#container")
        let valor = entrada * porcentagem
        let cont = 0
        let ciclo = 0
        let insideDiv = divStart + `<h4>Ciclo: ${ciclo}</h4><div class="entries">`
        let html = ""
        let total = valor
        while (total <= entrada) {
            if (cont % 8 === 0 && cont !== 0) {
                ciclo++

                html += insideDiv
                html += "</div>\n</div>"
                insideDiv = divStart + `<h4>Ciclo: ${ciclo}</h4><div class="entries">`
            }
            insideDiv += `<p><span class="ciclo-cont">${getGale(cont)}:</span> ${total.toFixed(2)}</p>\n`
            valor *= 1.077
            cont++
            total += valor
        }

        insideDiv += `<p><span class="ciclo-cont">${getGale(cont)}:</span> ${total.toFixed(2)}</p>\n`
        html += insideDiv
        html += "</div>\n</div>"
        document.querySelector("#total-gale").innerHTML = `<h3>Total gales: ${cont+1}</h3>`

        container.innerHTML = html
    }
)