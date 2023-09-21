function receberSomenteOsParesDeIndicesPares(array){
    return array.filter(par => par % 2 === 0)
}
const teste = [1,2,3,10]
console.log(receberSomenteOsParesDeIndicesPares(teste))