let frutas = ['maca', 'laranja', 'pera', 'uva', 'mamao', 'banana' ]

//Vetor original
console.log(frutas)

//Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

//Vetor Alterado
console.log(frutas)
console.log(ultimaFruta)

//Retirar o primeiro elemento do  vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoçao em posicao intermediaria
//1 parametro -> a posicao de remocao (contagem comeca em 0) 
//2 parametro -> quantidade de elementros a remover clear
let terceiraFruta = frutas.splice(2,1)

console.log(frutas)
console.log(terceiraFruta)

//inserindo no final do vetor
frutas.push('amora') // Pode inserir mais de um elemento ao mesmo tempo
console.log(frutas)

//inserir no inicio do vetor
frutas.unshift('jabuticaba') //tambem pode inserir mais de um elemento ao mesmo tempo
console.log(frutas)

//insercao no meio do vetor
//Parametro do splice() para insercao
//1 - posicao para insercao
//2 - numero elementos a serem excluidos (para insercao, usa-se 0)
//3 - em diante, elementros que serao inseridos.
frutas.splice(2, 0,'pessego') //inserindo na terceira posicao
//tambem funciona para inserir varios elementros so mesmo tempo
//exemplo (2,0, 'pessego', 'jaca', 'nectaria') 
console.log(frutas)

//usando splice() pasa substituiçao
//Parametros
//1 - posicao para substituicao
//2 - quantidade de elementros que serao excludos (para substituicao, 1)
//3 - o elemento que sera incluido no lugar
frutas.splice(4, 1, 'ameixa') // substituicao na 5 posicao
console.log(frutas)

//insercao multipla com splice()
frutas.splice(1, 0,'nectarina', 'jaca' )
console.table(frutas)

/*********************************
 *PERCURSO DE VETOR
 *
 * 
 */
console.log('---------------------------------------------------------')
// 1 - Percurso com FOR tradicional
//A) a contagem começa em zero (0 - primeiro elemento)
//B) ocorro enquanto o contador for MENOR que o numero de elementros do vetor
//C) length termina com TH (lingua mole)
//D) é o metuido mais fexivel pois se necessario, é possivel fazer um percurso 
//parcial (comecar em algum elemento q n é o primeiro e terminar antes do final)
for(let i = 0; i <frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('---------------------------------------------------------')
// 2 - For tradicional, em ordem inversa
//A) o contador inicia em length -1
//B)a condicao é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)

for(let i= frutas.length - 1; i >=0; i--) {
     console.log(i, frutas[i])
}

console.log('---------------------------------------------------------')
// 3 - Percurso For..of
// A) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade
// de uma varivel contadora.
// Variáveis
// f - variavel que recebera cada elemento do vetor (pode ser qualquer nome 
// valido de variavel)

for(let f of frutas) {
    console.log(f)
}

console.log('---------------------------------------------------------')
// 4 - Percurso ForEach
// ForEach() recebe como parametro uma funcao que recebe como
// parametro cada elemento do vetor
// o nome do parametro da funcao pode ser qql nome valido de indentificador
frutas.forEach(function(elemento){
console.log(elemento)
})

console.log('---------------------------------------------------------')
//o mesmo forEach(), usando uma arrow function como parametro
frutas.forEach(elemento => console.log(elemenmto))