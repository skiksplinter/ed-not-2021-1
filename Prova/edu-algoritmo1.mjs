/*
    QUICK SORT

1. Identificar a qual algoritmo de ordenação corresponde o código; e
2. Importar o vetor contido em `countries.mjs` e ordená-lo primeiro pelo campo `continent` e depois pelo campo `country`.

k -> funcao quickSort
m -> passando por argumento a lista que vamos buscar
fn -> funcao de comparacao
n -> indice do inicio
o -> indice do fim
p -> posicao do pivo
q -> divide em subvetor o principal
i -> contador inicia em 0 até penultimo
*/

function k(m, fn, n , o ) {
    if(o <= n) return //se inicio menor <= fim
    const p = o //pivo igual fim.
    let q = n - 1
    for(let i = n; i < o; i++) { //fazendo as comparaçoes para cada elemento, 
        if (fn(m[p], m[i])) { //verifica se o atual elemento é menor que o pivo
            q++ //pivo para o seu lugar definitivo
            
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ] 
        }
    }
    q++
    if(fn(m[q], m[p])) [ m[p], m[q] ] = [ m[q], m[p] ]
    k(m, fn, n, q - 1) //junta ordenado o subvetor da esquerda
    k(m, fn, q + 1, o) // ordena a direita do pivo
}

import { countries } from './countries.mjs'


k(countries, (obj1, obj2) => {
    if(obj1.continent === obj2.continent) {  
        return obj1.country > obj2.country

    } else return obj1.continent > obj2.continent   
}, 0, countries.length - 1)

console.log(countries)
