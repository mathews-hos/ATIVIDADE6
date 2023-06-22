const prompt = require('prompt-sync')();

const alunos = ["Samuel", "Suellen", "André", "Brunno", "Carlos", "David", "Esther", "Gabriel", "Ilton", "João vitor", "Lucas", "Marcelo", "Mariana", "Mathews", "Rafael", "Ramon", "Ricardo"]

var notas = new Array

// 1) A partir de um array de nomes e outro de notas, crie objetos da classe Aluno com os atributos "nome" e "nota" e adicione-os a um array de objetos. Utilize o loop FOR para percorrer os arrays.

for (index = 0; index < alunos.length; index++) {
    notas.push((Math.random() * 10).toFixed(1))
}
notas = notas.map(x => x > 9 ? 10 : parseFloat(x) + 1)
// parseFloat(x) + 1

const alunosComNota = new Array
alunos.forEach((a, x) => {
    let aluno = {
        "nome": a,
        "nota": notas[x]
    }
    alunosComNota.push(aluno)
})
// console.log(alunosComNota)

// 2) Percorra o array de objetos e exiba apenas o nome dos alunos.

alunosComNota.forEach(x => console.log(x["nome"]))

// 3) Percorra o array novamente para adicionar o atributo "situacao" a cada objeto. A situação do aluno será "Aprovado" se a nota for maior ou igual a 7.0 ou "Reprovado" caso contrário. Utilize o operador ternário na construção desta função.

alunosComNota.forEach(x => x["nota"] >= 7 ? x["situacao"] = "aprovado" : x["situacao"] = "reprovado")

// 4) Crie um mapa (objeto Map) a partir do seu array de objetos.

const mapalunosENotas = new Map

alunosComNota.forEach(aluno => {
    mapalunosENotas.set(aluno['nome'], aluno["nota"])
})

console.table(alunosComNota)
mapalunosENotas.forEach((x, y,) => { console.log(x, y) })
console.table(mapalunosENotas)

// 5) Utilize o método get( ) para obter a nota do 5º elemento do mapa.
quintoelemento = mapalunosENotas.get(alunos[4])
// console.log(quintoelemento)

// 6) Utilize o método delete( ) para remover o 4º elemento do mapa.

mapalunosENotas.delete(alunos[3])
console.table(mapalunosENotas)

// 7) Utilize o método has( ) para verificar se existe algum aluno chamado "Jon Snow" neste mapa.

console.log(mapalunosENotas.has('JonSnow'))

// 8) Mostre todas as chaves do mapa utilizando o método keys( ).

console.log(mapalunosENotas.keys())

// 9) Mostre todos os valores do mapa utilizando o método values( ).

console.log(mapalunosENotas.values())

// 10) Mostre as chaves e seus respectivos valores utilizando o método entries( ).

console.log(mapalunosENotas.entries())
