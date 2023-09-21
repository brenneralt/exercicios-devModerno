function inverter (objeto){
    const resultado = {}
     Object.entries(objeto)
            .forEach(parChaveValor => {
                const chave = 0 , valor = 1
                    resultado [parChaveValor[valor]] = parChaveValor[chave]
            })
    
return resultado
}

const teste = {a: 1, b: 2, c: 3}
console.log(inverter(teste))