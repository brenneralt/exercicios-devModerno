function contarCaractere(caractereEscolhido, frase){
    let quantidade = 0;
    for (let indice = 0; indice < frase.length; indice++){
        if (frase[indice] == caractereEscolhido) {
            quantidade ++
        }
    }

    return quantidade
}

console.log(contarCaractere('a', "Maria"))