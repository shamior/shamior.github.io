let bodyStyle = document.body.style
let progText = document.querySelector('#prog-text')
let notCalled = true

let a = document.querySelector('a')
a.onclick = () => {
    document.querySelector('dialog').show()
}

const fillProgress = () => {
    let concordaComTermos = document.querySelector('input[type="checkbox"]').checked
    const loop = (prog) => {
        document.body.style.setProperty('--progress-count', `${prog}%`)
        progText.textContent = `${prog.toFixed(1)}%`
        if (prog >= 100){
            progText.textContent = 'Completo'
            return
        }
        setTimeout(()=>{
            loop(prog + 1.2)
        }, 60)
    }
    if (notCalled && concordaComTermos) {
        notCalled = false
        loop(0)
    }
}

