

/*zapao*/
let gerarLinkButton = document.querySelector("#gerar-zap-msg")
let gerarLinkButtonNoMsg = document.querySelector("#gerar-zap-nomsg")

gerarLinkButton.onclick = async () => {
    let inputValue = ''

    navigator.clipboard.readText().then((data) => {
        inputValue = data.replaceAll(" ", '')
        window.open('whatsapp://send/?phone=55' +inputValue+'&text=Ola, tudo bem?%0ASou o entregador do Ponto do açaí.%0AVocê fez um pedido? Se sim, poderia me mandar localização?&type=phone_number&app_absent=0')
    })

}


gerarLinkButtonNoMsg.onclick = async () => {
    let inputValue = ''

    navigator.clipboard.readText().then((data) => {
        inputValue = data.replaceAll(" ", '')
        window.open('whatsapp://send/?phone=55' +inputValue + '&type=phone_number&app_absent=0')
    })

}


