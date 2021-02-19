//Objetos sao estruturas que permitem armazenar diversos valores
//em uma mesma variavel, permitindo acessa-los por meio de um nome

//Criacao de um objeto vazio

let vazio1 = {}             //forma moderna
let vazio2 = new Object()   //forma tradicional

// Criando um objeto ja com dados

let pessoa = {
    //os dados sao armazenados no formato
    // propriedade: valor
    //ou tambem chamado de atrubuto
    //atributo: valor
    nome: 'Eduaney Augusto',
    sexo: 'M',
    dataNasc: '1986-05-09',
    ocupacao: 'estudante',
    //Nome da propriedade pode ter espacos ou acento.
    //nesse caso, o nome da propriedade precisa estar entre aspas
    'cidade de origem': 'Franca/SP',
    gostos: ['jogos', 'doces', 'dormir'] //vetor em uma posicao de objetos
}
console.log(pessoa)
console.table(pessoa)

//exibindo apenas o valor de uma prorpeidade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
//quando o nome da propriedade tem espacos ou acento, nao é possivel
//usar a sintaxe de ponto, é necessario usar a sintaxe de colchetes.
console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)

//A sintaxe dos colchetes SEMPRE funciona, mesmo se o nome da propriedade
//for a unica palavra sem acento

console.log(pessoa['nome'])
console.log(pessoa['gostos'][0])

//Outra conseguencia da sintaxe dos colchetes é a possibilidade de 
//usar nomes de propriedade que estao dentro de variaveis

let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

//Criando uma nova propriedade para um objeto ja existente
//Basta atribuir um valor a um nome de propriedade ainda nao existente

pessoa.email = 'eduaney@live.com'
pessoa.celular = '(16) 99234-7434'
console.table(pessoa)

//criando um objeto vazio e só depois adicionando propriedades

let carro = {}
    carro.marca = 'Volkswagen'
    carro.modelo = 'Fusca'
    carro.ano = 1971
    carro['combustivel'] = 'gasolina'
    carro.cor = 'bege'

    console.table(carro)


    //excluindo um propriedade de um objeto
    delete carro.ano
    console.table(carro)