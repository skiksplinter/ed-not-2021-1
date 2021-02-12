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