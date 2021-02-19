//Funcao que eleva um numero ao quadrado
// se precisar disso em uma situaçao real, use Math.pow() ou
// o operador **

function quadrado(n) {
    return n * n
}

console.log(quadrado(9))

// caracterustucas da funcao acima:
// 1 - apenas um parametro
// 2 - apenas um linha de codigo, com return
// 3 - CANDITADA PERFEITA A VIRAR ARROW FUNCTION

// transformando em arrow function
// a - nao precisa de parenteses envolvendo o parametro
// b - palavra function é substituida pelo sinal =>, DEPOIS do parametro
// c - nao sao necessarias as chaves nem a palavra return
 const quadrado2 = n => n * n
 console.log(quadrado2(9))


 //Funçao com mais de um parametro
 function potencia(b,e) { //b = base, e = expoente
    return b ** e

 }

 console.log(potencia(2,8))

 // Funcao equivalente no formato arrow function
 //Quando temos mais de um parametro, os parenteses em volta dos 
 //argumentos voltam a ser obrigatorios

 let potencia2 = (b,e) => b**e
 console.log(potencia2(2,8))

 //Funcao sem parametro
 function megasena() {
     //Esta funcao retorna um numero aleatorio entre 1 e 60
     //Math.random()-> retorn um num aleat entre 0 (inclusive) e 1 (exclusive)
     //* 60 - ajusta a faixa de valores para entre 0 e 59
     // +1 - ajusta a faixa de valores para entre 1 e 60
    // Math.floor - arredonda para o menor inteiro (tira as casas decimais)
     return Math.floor(Math.random() *60 +1)
 }
 console.log(megasena(), megasena(), megasena())

 // Quando a funcao nao tem argumentos, na arrow function é necessario deixar
 //um par de parenteses vazios para marcar seu lugar

 const megasena2 = () => Math.floor(Math.random() *60 +1)
 console.log(megasena(), megasena(), megasena())

 //funcao com mais de uma linha de codigo no corpo
 function somaVet(vet) {
     let soma = 0
     for (let n of vet) soma += n
     return soma
 }
 console.log(somaVet([12, 42, -11, 20, 9, 16]))

 //qundo a funcao tem mais de uma linha de codigo, na arrow function equivalente
 // retornam as chaves 

 const somaVet2 = vet => {
     let soma = 0
     for (let n of vet) soma += n
     return soma
 }
 console.log(somaVet2([12, 42, -11, 20, 9, 16]))

 //CONCLUSAO: arrow function foram concebidas para facilitar a escrita de
//funcoes de apenas um alinha, embora tambem possam ser usadas para funcoes de 
//multiplas linhas