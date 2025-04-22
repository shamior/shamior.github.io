const divStart = '<div class="ciclo">\n'

document.querySelector('button').addEventListener(
    "click", (event) => {
        let entrada = Number(document.querySelector("#entrada").value)
        let porcentagem = (1/100) *  Number(document.querySelector("#porcentagem").value.replace(',', '.'))
        let container = document.querySelector("#container")
        let valor = entrada * porcentagem
        let cont = 1
        let ciclo = 0
        let insideDiv = divStart + `<h4>Ciclo: ${ciclo}</h4>`
        let html = ""
        let total = 0
        console.log(valor, entrada)
        while (total <= entrada) {
            total += valor
            if (cont % 8 === 1 && cont !== 1) {
                ciclo++
                html += insideDiv
                html += "</div>\n"
                insideDiv = divStart + `<h4>Ciclo: ${ciclo}</h4>`
            }
            insideDiv += `<p>${cont}: ${total.toFixed(4)}</p>\n`
            valor *= 1.077
            cont++
        }
        total += valor
        insideDiv += `<p>${cont}: ${total.toFixed(4)}</p>\n`
        html += insideDiv
        html += "</div>\n"

        container.innerHTML = html
    }
)