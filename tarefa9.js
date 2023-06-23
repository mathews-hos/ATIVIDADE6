class Cliente {
    constructor(cpf, nome, datanascimento) {
        this.cpf = cpf
        this.nome = nome
        this.datanascimento = datanascimento
    }
}
class Produto {
    constructor(codigo, descricao, qtdestoque) {
        this.codigo = codigo
        this.descricao = descricao
        this.qtdestoque = qtdestoque
    }
}
class Venda {
    constructor(codigo, datahora, cliente, produto) {
        this.codigo = codigo
        this.datahora = datahora
        this.cliente = cliente
        this.produto = produto
    }
}
clientinho = new Cliente("123.456.789-00", "João da Silva", "15/03/1990")
clientelho = new Cliente("987.654.321-00", "Maria Souza", "28/07/1985")
clientao = new Cliente("555.888.777-00", "Pedro Santos", "10/12/1995")

// CPF: 123.456.789-00
// Nome: João da Silva
// Data de Nascimento: 15/03/1990

// CPF: 987.654.321-00
// Nome: Maria Souza
// Data de Nascimento: 28/07/1985

// CPF: 555.888.777-00
// Nome: Pedro Santos
// Data de Nascimento: 10/12/1995

camisinha = new Produto("001", "Camiseta branca", 50)
calcinha = new Produto("002", "Calça jeans", 30)
tenis = new Produto("003", "Tênis preto", 20)
vistido = new Produto("004", "Vestido floral", 15)
jaquetinha = new Produto("005", "Jaqueta de couro", 10)
berma = new Produto("006", "Bermuda jeans", 25)
sweter = new Produto("007", "Blusa de lã", 12)
chuteira = new Produto("008", "Calçado esportivo", 8)

// Código: 001
// Descrição: Camiseta branca
// Quantidade em estoque: 50

// Código: 002
// Descrição: Calça jeans
// Quantidade em estoque: 30

// Código: 003
// Descrição: Tênis preto
// Quantidade em estoque: 20

// Código: 004
// Descrição: Vestido floral
// Quantidade em estoque: 15

// Código: 005
// Descrição: Jaqueta de couro
// Quantidade em estoque: 10

// Código: 006
// Descrição: Bermuda jeans
// Quantidade em estoque: 25

// Código: 007
// Descrição: Blusa de lã
// Quantidade em estoque: 12

// Código: 008
// Descrição: Calçado esportivo
// Quantidade em estoque: 8

vendinha = new Venda("00123", "23/06/2023 10:15:00", clientinho, camisinha)
wandinha = new Venda("00456", "22/06/2023 14:30:00", clientelho, calcinha)
venderson = new Venda("00789", "21/06/2023 16:45:00", clientao, tenis)
vendado = new Venda("00234", "20/06/2023 11:00:00", clientinho, vistido)
vendido = new Venda("00987", "19/06/2023 09:20:00", clientelho, jaquetinha)

// Código da venda: 00123
// Data e Hora: 23/06/2023 10:15:00
// Cliente: João da Silva
// Produto: Camiseta branca

// Código da venda: 00456
// Data e Hora: 22/06/2023 14:30:00
// Cliente: Maria Souza
// Produto: Calça jeans

// Código da venda: 00789
// Data e Hora: 21/06/2023 16:45:00
// Cliente: Pedro Santos
// Produto: Tênis preto

// Código da venda: 00234
// Data e Hora: 20/06/2023 11:00:00
// Cliente: João da Silva
// Produto: Vestido floral

// Código da venda: 00987
// Data e Hora: 19/06/2023 09:20:00
// Cliente: Maria Souza
// Produto: Jaqueta de couro

listaclientes = [clientinho, clientelho, clientao]
listaprodutos = [camisinha, calcinha, tenis, vistido, jaquetinha, berma, sweter, chuteira]
listavendas = [vendinha, wandinha, venderson, vendado, vendido]

console.log("nomes :\n")
listaclientes.forEach(x => console.log(x.nome));
console.log("\ndescrição :\n")
listaprodutos.forEach(x => console.log(x.descricao));
console.log("\ndata e horada venda :\n")
listavendas.forEach(x => console.log(x.datahora));

arrmapclientes = new Map(listaclientes.map(cara => [cara.cpf, [cara.nome, cara.datanascimento]]))
arrmapprodutos = new Map(listaprodutos.map(item => [item.codigo, [item.descricao, item.qtdestoque]]))
arrmapvendas = new Map(listavendas.map(venda => [venda.codigo, [venda.datahora, venda.cliente, venda.produto]]))

console.table(arrmapclientes)
console.table(arrmapprodutos)
console.table(arrmapvendas)

arrmapclientes = new Map(listaclientes.map(cara => [cara.cpf, { nome: cara.nome, nascimento: cara.datanascimento }]))
arrmapprodutos = new Map(listaprodutos.map(item => [item.codigo, { descricao: item.descricao, qtdestoque: item.qtdestoque }]))
arrmapvendas = new Map(listavendas.map(venda => [venda.codigo, { datahora: venda.datahora, cliente: venda.cliente, produto: venda.produto }]))

console.table(arrmapclientes)
console.table(arrmapprodutos)
console.log(arrmapvendas)