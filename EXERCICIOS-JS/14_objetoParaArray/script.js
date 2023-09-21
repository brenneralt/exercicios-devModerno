// LEMBRAR DE REVISAR 
function objetoParaArray(objeto) {
    const resultado = []
    
    for (let elemento in objeto)
         resultado.push([elemento, objeto[elemento]])
    
        return resultado
}

const resultado = objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software",

})

console.log(resultado)