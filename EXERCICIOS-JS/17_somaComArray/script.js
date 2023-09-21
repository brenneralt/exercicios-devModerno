function somarNumeros(array){
    let soma = 0;
    array.forEach(numero => soma += numero )
    return soma

}
const teste = [1,2,3,4]
console.log(somarNumeros(teste))