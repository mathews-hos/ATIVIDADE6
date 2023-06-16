process.stdin.setEncoding('utf8');

function prompt() {
    return new Promise((resolve) => {
        process.stdin.once('data', (input) => {
            resolve(input.trim());
        });
    });
}
async function main() {
    var alunos = ["André", "Brunno", "Carlos", "David", "Esther", "Gabriel", "Ilton", "João vitor", "Lucas", "Marcelo", "Mariana", "Mathews", "Rafael", "Ramon", "Ricardo"]

    saida = ""

    // for (meliante of alunos) {
    //     console.log(meliante)
    // }

    alunos.forEach(x => saida += x + ", ")
    console.log("será adicionado mais três nomes à seguinte lista: " + saida + "\naperte enter para continuar")

    await prompt()

    alunos.push("Samuel", "Suellen", "Geraldin")

    // console.log("digite três nomes para ser adicionado a seguinte lista: " + saida)
    // alunos.push(await prompt(), await prompt(), await prompt())

    saida = ""
    alunos.forEach(x => saida += x + ", ")
    console.log("agora a lista está assim: " + saida + "\naperte enter para continuar")
    await prompt()
    console.log("adicione um aluno na terceira posição da lista de alunos")
    alunos.splice(2, 0, "Muleke doido")
    alunos.splice(6, 0, "Garibaldo", "Lindomar")

    alunos.sort().reverse()
    alunos.pop()
    alunos.splice(5, 1)
    alunos.shift()
    alunos.sort()

    // alunos.forEach(x => console.log(x + ","))

    for (const aluno of alunos) {
        console.log(alunos.indexOf(aluno) + " - " + aluno + ",")
    }

    console.log("Aperte enter para continuar")
    await prompt()

    var notas = new Array

    for (let index = 0; index < alunos.length; index++) {
        console.log("escreva a nota do aluno " + alunos[index])
        notas.push(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
        console.log(notas[index])
        // notas.push(await prompt())

    }

    await prompt()

    console.table(notas)
    notas = notas.map(x => x + 1)

    bonota = notas.filter(nota => {

        return nota >= 7
    })

    console.table(alunos)
    console.table(notas)
    console.table(bonota)
}
main()