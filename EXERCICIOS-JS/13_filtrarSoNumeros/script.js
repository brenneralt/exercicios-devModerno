function filtrarNumeros(array){
    const numeros = array.filter(item => typeof item === 'number');
    return numeros
    
}

const meuArray = [27, 3, 'quatro', 'dez', 5];
console.log(filtrarNumeros(meuArray))