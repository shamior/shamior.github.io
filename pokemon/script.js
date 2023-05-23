function mountPokecardHTML(pokemon){
    let innerHTML = `<div class="pokemon main-${pokemon.types[0].type.name}">`
    innerHTML += `<img src="${pokemon.sprites.other['official-artwork'].front_default}">`
    innerHTML += `<div class="id">#${pokemon.id}</div>`
    innerHTML += `<footer>`
    innerHTML += `<div class="nome">`
    innerHTML += `<div>${pokemon.name}</div>\n`
    innerHTML += `</div>`
    innerHTML += `<div class="tipos">`
    pokemon.types.forEach((e) => {
        innerHTML += `<div class="type type-${e.type.name}">${e.type.name}</div>`
    })
    innerHTML += `</div>`
    innerHTML += `</footer>`
    innerHTML += `</div>`
    return innerHTML
}

async function fetchPokemon(name_or_id){
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name_or_id)
    .then(response => response.json())
    .then(mountPokecardHTML)
}

function fetchInterval(start, end){
    let promises = []
    for (let i = start; i <= end; i++){
        promises.push(fetchPokemon(i))
    }
    return promises
}

function fetchSingle(name_or_id){
    return [fetchPokemon(name_or_id)]
}



document.querySelector("#botao")
    .addEventListener('click', ()=>{
        const pokemonsElement = document.querySelector("#pokemons")
        const inputValue = document.querySelector("#maininput").value
        let [start, end] = inputValue.split('-')
        let promises
        if (isNaN(start)){
            promises = fetchSingle(start)
        }else{
            if (end == undefined){
                promises = fetchSingle(start)
            }else{
                promises = fetchInterval(Number(start), Number(end))
            }
        }
        Promise.all(promises).then(htmls => {
            let innerHTML = ""
            htmls.forEach(e => {
                innerHTML += e
            })
            pokemonsElement.innerHTML = innerHTML
        })
        
    })