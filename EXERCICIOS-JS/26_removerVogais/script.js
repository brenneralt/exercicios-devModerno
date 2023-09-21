function removerVogais(stringCompleta){

    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
        vogais.forEach(vogal => stringCompleta = stringCompleta.replace(vogal, ''))

return stringCompleta
}

console.log(removerVogais('Maria'))