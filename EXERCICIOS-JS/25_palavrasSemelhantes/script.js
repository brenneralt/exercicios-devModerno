function buscarPalavraSemelhantes(palavraAlvo, arrayDeStrings){
    let palavrasFiltradas = []
    
    for (let i=0; i < arrayDeStrings.length; i++){
        
            if (arrayDeStrings[i].includes(palavraAlvo)){
                palavrasFiltradas.push(arrayDeStrings[i])
            }
    }

    return palavrasFiltradas
}
const teste = ["programação","mobile","profissional"]
console.log(buscarPalavraSemelhantes('mo',teste))