function convert(num){
    return Number(num.replace(/,+/g, '.'))
}

const IMCS = [
    17,
    18.5,
    25,
    30,
    35,
    40
]

const TYPES = [
    'Muito abaixo do peso',
    'Abaixo do peso',
    'Peso normal',
    'Acima do peso',
    'Obesidade I',
    'Obesidade II severa',
    'Obesidade III mórbida'
]


const COLORS = [
    '#f04d43',
    '#f0e643',
    '#90ee90',
    '#f0e643',
    '#f0c143',
    '#f08243',
    '#f04d43'
]

function calculaIMC(){
    let altura = convert(document.querySelector('#inp1').value)
    let peso = convert(document.querySelector('#inp2').value)
    if (isNaN(peso) || isNaN(altura)) return;
    if (peso <= 0 || altura <= 0) return;
    let resultado = peso/(altura*altura)
    let type
    for(type = 0; type < IMCS.length && resultado >= IMCS[type]; type++);
    console.log(type)
    tipo.textContent = TYPES[type]
    document.body.style.setProperty('--container-color', COLORS[type])
    result.textContent = resultado.toFixed(2)
}
