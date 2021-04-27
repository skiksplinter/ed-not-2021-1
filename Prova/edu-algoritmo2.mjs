/*
        * BUSCA BINÁRIA

1. Identificar a qual algoritmo de busca corresponde o código; e
2. Importar o vetor contido em `countries.mjs` e fazer uma busca pelo valor `Brazil` no campo `country`.

k -> funcao de busca, no caso busca Binaria
m -> passando por argumento a lista que vamos buscar
n -> depois da lista, o item minimamente que vai buscar
o -> indice de inicio
p -> indice do fim
q -> pra calcular o meio

 */

function k(m, n) {
    
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2) // arredonda pra baixo
        if(m[q] === n) return q   //verifica se o que ta no meio é = ao que procura, se sim retorna encontrou.
        else if(n > m[q]) o = q + 1 // se for maior pega a sublista direita
        else p = q - 1  // se for menor pega a sublista esquerda
    }
    return -1  // Não existe
}

import { countries } from './countries.mjs'

console.time('Buscando Brazil')
console.log(k(countries, (obj, busca = 'Brazil') => {
    if(busca === obj.country) return 0
    else if(busca < obj.country) return -1
    else return 1
}), {})
console.timeEnd('Buscando Brazil')
