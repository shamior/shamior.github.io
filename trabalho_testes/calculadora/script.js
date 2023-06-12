function realizaOperacao(tipo){
    let valor1 = inp1.value
    let valor2 = inp2.value

    if (!valor1 || !valor2){
        result.textContent = 'Preencha os campos'
        return
    }


    let resultado
    if (tipo == '*'){
        resultado = valor1 * valor2
    }else if (tipo == '+'){
        resultado = valor1 + valor2
    }else if (tipo == '-'){
        resultado = valor1 - valor2
    }else if (tipo == '/'){
        resultado = valor1 / valor2
    }
    if (resultado === Infinity){
        result.textContent = 'Erro: Divisão por zero não suportada'
    }
    result.textContent = resultado
}