function calcularSalario(horasTrabalhadas, ganhoPorHora){

    const salarioBruto = horasTrabalhadas * ganhoPorHora;
    const salarioLiquido = (salarioBruto - (salarioBruto * 30/100))

return "Salário líquido é igual a R$" + salarioLiquido

}



const teste = calcularSalario(180, 60)
console.log(teste)