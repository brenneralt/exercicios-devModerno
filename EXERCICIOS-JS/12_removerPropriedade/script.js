
function removerPropriedade(objeto, nomeDaPropriedade){

    const copia = { ...objeto}
delete copia [nomeDaPropriedade]

return copia

}
const primeiro = {id:20, nome:"caneta", descricao:"Não preenchido"}
console.log(removerPropriedade(primeiro, "id"))
