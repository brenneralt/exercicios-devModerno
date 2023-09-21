function segundoMaior (array){
   
    const maiorNumero = Math.max(...array)
            array = array.filter(numero => numero != maiorNumero)
    
            const proximoMaiorNumero = Math.max(...array)
return proximoMaiorNumero
}

teste = [12,16,1,5]
console.log(segundoMaior(teste))