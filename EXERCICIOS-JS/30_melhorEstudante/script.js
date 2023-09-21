function receberMelhorEstudante(estudantes){
    let nomeDoMelhor = "";
    let mediaDoMelhor = -1 
    
    // O for in está percorrendo o objeto ** 
for (aluno in estudantes) {
    const notas = estudantes[aluno]
    let soma = 0
            // Este for está percorrendo o array que está sendo retornado do For..in        
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i]      
        }
        const media = soma / notas.length
            
        if (media > mediaDoMelhor){
            nomeDoMelhor = aluno
            mediaDoMelhor = media
            }

        
    }
    return {
        nome: nomeDoMelhor,
        media: mediaDoMelhor
    }
}

let estudantes = {
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9] 
}
console.log(receberMelhorEstudante(estudantes))