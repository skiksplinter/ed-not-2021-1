/* 
  Algoritmo Quick Sort
*/
let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {     // Condição de saída das chamadas recursivas
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai até a PENÚLTIMA posição
        for(let i = ini; i < fim; i++) {
            if(fnComp(vetor[pivot], vetor[i])) {    // Parâmetros invertidos
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        // Colocamos o pivô no seu lugar definitivo
        if(fnComp(vetor[div], vetor[pivot])) {      // Parâmetros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++
        // Ordena o subvetor à esquerda do pivô
        quickSort(vetor, fnComp, ini, div - 1)
        // Ordena o subvetor à direita do pivô
        quickSort(vetor, fnComp, div + 1, fim)
    }
}

import { gastos } from '../amostras/cota-parlamentar-282-mil.mjs'

trocas = 0, pass = 0, comps = 0
console.time('Ordenando cotas de parlamentares...')

quickSort(gastos, (a, b) => {
    if(a.partido === b.partido) {  
        // Se os partidos forem iguais ->
        if(a.nome_parlamentar === b.nome_parlamentar)
        //Nomes parlamentar iguais ->
        return a.id_documento > b.id_documento
        //verificar id_documento
        else return a.nome_parlamentar > b.nome_parlamentar
    }
    // caso nao, ordena por partido.
    else return a.partido > b.partido
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('DEPOIS:', gastos)
console.log({trocas, pass, comps, memoria})
console.timeEnd('Ordenando cotas de parlamentares...')
