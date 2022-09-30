

/*zapao*/
let gerarLinkButton = document.querySelector("#gerar-zap")

gerarLinkButton.onclick = () => {
    let inputValue = document.querySelector("#inputzap").value
    window.open('whatsapp://send/?phone=55' +inputValue+'&text=Ola,tudo bem? Sou o entregador do Ponto do açaí.%0AVocê fez um pedido? Se sim, poderia me mandar localização?&type=phone_number&app_absent=0')
}


