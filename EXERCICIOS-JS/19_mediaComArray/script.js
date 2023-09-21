function calcularMedia(array){
    const media = array.reduce((a, b) => a+b,0) / array.length
    return media
}

const teste = [ 1, 2, 3, 4, 7]
console.log(calcularMedia(teste))