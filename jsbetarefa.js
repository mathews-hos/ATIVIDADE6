const prompt = require('prompt-sync')();

var alunos = ["André", "Brunno", "Carlos", "David", "Esther", "Gabriel", "Ilton", "João vitor", "Lucas", "Marcelo", "Mariana", "Mathews", "Rafael", "Ramon", "Ricardo"]
saida = ""
// for (meliante of alunos) {
//     console.log(meliante)
// }

alunos.forEach(x => saida += x + ", ")

console.log(`será adicionado mais três nomes à seguinte lista: ${saida}\naperte enter para continuar`)
prompt() 

alunos.push("Samuel", "Suellen", "Geraldin")
// console.log("digite três nomes para ser adicionado a seguinte lista: " + saida)
// alunos.push(prompt(), prompt(), prompt())
saida = new String
alunos.forEach(x => saida += x + ", ")

console.log(`agora a lista está assim: ${saida}\naperte enter para continuar`)
prompt()

console.log("adicione um aluno na terceira posição da lista de alunos")

alunos.splice(2, 0, "Muleke doido")
alunos.splice(6, 0, "Garibaldo", "Lindomar")
alunos.sort().reverse()
alunos.pop()
alunos.splice(5, 1)
alunos.shift()
alunos.sort()

// alunos.forEach((x, i) => console.log(i + x + ","))
for (const aluno of alunos) {
    console.log(`${alunos.indexOf(aluno)} - ${aluno},`)
}

console.log("Aperte enter para continuar")
prompt()

var notas = new Array

for (index = 0; index < alunos.length; index++) {
    console.log(`escreva a nota do aluno ${alunos[index]}`)
    notas.push((Math.random() * (10 - 0 + 1) + 0).toFixed(1))
    // notas.push(parseFloat(prompt()))
    console.log(notas[index])
}

prompt()
// console.table(notas)
notas = notas.map(x => parseFloat(x) + 1)
bonota = notas.filter(nota => nota >= 7)

console.table(bonota)
prompt()
notalunos = new Array
alunos.forEach((nome, index) => {
    notalunos.push(`${nome} - ${notas[index]}`)
})

console.table(notalunos)
prompt()
// console.table(alunos)
// console.table(notas)
// console.table(bonota)

notas.forEach(x => {

    x >= 7 ? console.log(x + '\x1b[32m aprovado\x1b[0m') : console.log(x + '\x1b[31m reprovado\x1b[0m')
    // if (x >= 7) {
    //     console.log(x + '\x1b[32m aprovado\x1b[0m')
    // } else {
    //     console.log(x + '\x1b[31m reprovado\x1b[0m')
    // }

})

console.log(alunos.indexOf("Lucas"))

console.log(alunos.findIndex(nota => nota > 9))

console.log(alunos.includes("Lucas"))

media = notas.reduce((nota1, nota2) => nota1 + nota2) / notas.length
console.log(media)

console.log(notas.every(nota => nota >= media))
console.log(notas.some(nota => nota > media))

