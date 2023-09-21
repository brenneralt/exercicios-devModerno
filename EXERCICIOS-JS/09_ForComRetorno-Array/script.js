function repetir (elemento, repeticoes){
    
    let numbers = []
    for (let i = 0; i < repeticoes; i++) {
        
       numbers.push(elemento)
    }

    return numbers
}


console.log(repetir(5, 2))