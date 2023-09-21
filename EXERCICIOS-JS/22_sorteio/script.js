function funcaoDaSorte(numeroEsperado){
    const max = 10;
    const min = 1;

    // O número gerado sempre tem que ser igual ou maior que o minimo e menor que o máximo
    const numeroSorteado = Math.floor(Math.random()*(max - min +1) + min);
    
            if(numeroSorteado === numeroEsperado){
                return `Parabéns! O número sorteado foi ${numeroSorteado}`
            } else {
                return `O número sorteado foi ${numeroSorteado}`
            }
    
}

console.log(funcaoDaSorte(2))