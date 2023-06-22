const prompt = require('prompt-sync')();

var alunos = ["Samuel", "Suellen", "André", "Brunno", "Carlos", "David", "Esther", "Gabriel", "Ilton", "João vitor", "Lucas", "Marcelo", "Mariana", "Mathews", "Rafael", "Ramon", "Ricardo"]

var notas = new Array

for (index = 0; index < alunos.length; index++) {
    notas.push((Math.random() * 10).toFixed(1))
}
notas = notas.map(x => x > 9 ? 10 : parseFloat(x) + 1)
// parseFloat(x) + 1

const alunota = new Array
alunos.forEach((a, x) => {
    let aluno = {
        "nome": a,
        "nota": notas[x]
    }
    alunota.push(aluno)
})
// console.log(alunota)

alunota.forEach(x => console.log(x["nome"]))

alunota.forEach(x => x["nota"] >= 7 ? x["situacao"] = "aprovado" : x["situacao"] = "reprovado")


const mapalunos = new Map

alunota.forEach((item, itera) => {
    mapalunos.set('aluno' + itera, item)
})

console.table(alunota)
mapalunos.forEach(x => { console.log(x); console.table(x) })
console.log(mapalunos)