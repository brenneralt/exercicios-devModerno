function contarPalavras(string){
    let palavrasParaArray = string.split(' ')
    const resultado = palavrasParaArray.length

    return resultado
}


console.log(contarPalavras("Seja bem vindo a Terra"))