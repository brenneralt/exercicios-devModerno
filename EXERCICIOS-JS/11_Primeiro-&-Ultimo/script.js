function receberPrimeiroeUltimoElemento(array){
    // pega o primeiro elemento
    const primeiro = array.shift()
    
    //Pega o Ultimo elemento:
    const ultimo = array[array.length - 1];
    
    /*      Como um array começa no "0", o length conta quantos itens tem no array e diminui 1. 
    Ex: Normal[0,1,2,3,4] ; length[1,2,3,4,5]  (-1 (que foi o caso desse))
    */
   // console.log(array.length)
    
   
   return [primeiro, ultimo];
}

const imprima = [1,2,3,10]
const resultado = receberPrimeiroeUltimoElemento(imprima)
console.log(resultado)