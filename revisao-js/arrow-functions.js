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
