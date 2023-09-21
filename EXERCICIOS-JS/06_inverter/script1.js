function inverso(valor) {
// [typeof] (Tipo de). Basicamente como a sua tradução sugere, 
// ele irar trabalhar com o tipo da estrutura do dado que você está trabalhando. 

    if (typeof valor === 'boolean') {
        return !valor
        // [ ! ] É uma negação lógica -- (Digamos que ele sempre estará contra você ~_~ )
    }
    else if (typeof valor === 'number') {
        return -valor
        // A expressão [ - ] basicamente inverte o sinal do número, seria a mesma coisa que multiplica-lo por -1
    }
    else {
        return "Os tipos Booleano ou números são esperados, mas o parâmetro inserido é do tipo: " + typeof valor
    }
}

console.log(inverso("teste"))