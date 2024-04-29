/*Questão 07: Escreva uma arrow function chamada contaLetras que recebe uma
string como parâmetro e retorna um objeto contendo a contagem de cada letra
presente na string*/
const contaLetras = x => {
    let alfabeto = {}
    x.split("").forEach(letra => {
    if (letra !== " " ){
    alfabeto[letra] = (alfabeto[letra] || 0) + 1
    }
    })
    return alfabeto
    }
    console.log(contaLetras("Marcos"))