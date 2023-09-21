function filtrarPorQuantidadeDeDigitos(numeros, quantidadeEspecifica) {
    let resultado = []
    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length
        
        
        if (quantidadeDeDigitos === quantidadeEspecifica) {
            resultado.push(numero)

        }
    }
    return resultado
}

arrayTeste = [38, 2, 365, 10, 125, 11]
numeroTeste = 2

console.log(filtrarPorQuantidadeDeDigitos(arrayTeste, numeroTeste))