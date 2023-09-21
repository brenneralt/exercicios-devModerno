function despesasTotais(arrDeProdutos){
    
    const precoTotal = arrDeProdutos.map(soma => soma.preco).reduce((a,b) => a + b, 0)
    // Para entender melhor, use o depurador para ver passo a passo, só clicar em f5

    return precoTotal
}

const teste = [
    {nome:'Monitor', preco:500},
    {nome:'Climatizador', preco: 487},
    {nome:'Água', preco: 5},
    {nome:'Energia', preco: 97}
]

console.log(despesasTotais(teste))

