function despesasTotais(arrDeProdutos){
    // No reduce, o parâmetro 'a' é a que fica recebendo os dados do callback, já o parêmetro 'b' é o item que estou querendo processar
    // E o '0' é usado para evitar bugs, basicamente ele está dando o valor inicial do acumulador.
    const precoTotal = arrDeProdutos.map(soma => soma.preco).reduce((a,b) => a + b, 0)


     /* ////// MESMO RESULTADO, MAS ESTUDANDO MAIS AFUNDO SOBRE MAP, CALLBACK E REDUCE /////
     */
        //REPETE COM TODOS OS OBJETOS DO ARRAY
     const aprendendoMais = arrDeProdutos.map(p => p)
        console.log(aprendendoMais)
    
        // O map mapeia todos os objetos do array sem alterar o original 
        const aprendendoMais1 = arrDeProdutos.map(p => p.preco)
        console.log(aprendendoMais1)
    return precoTotal
}

const teste = [
    {nome:'Monitor', preco:500},
    {nome:'Climatizador', preco: 487},
    {nome:'Água', preco: 5},
    {nome:'Energia', preco: 97}
]

console.log(despesasTotais(teste))

