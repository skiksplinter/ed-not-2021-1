/* 
  Algoritmo Bubble Sort
*/

let totTrocas, pass, comps

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0  //Iniciando variaveis com 0
    let trocas
    do {
        trocas = 0      //Iniciando uma nova passada
        pass++
        // Percurso do vetor, da primeira até a PENÚLTIMA posição
        for(let i = 0; i <= vetor.length - 2; i++) {
            if(fnComp(vetor[i], vetor[i + 1])) {   //compara duas estruturas de vetor
                // Troca direta em JS via desestruturação de vetor
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocas++
            }
            comps++
        }
        totTrocas += trocas
    } while (trocas > 0)
}

import { gastos } from '../amostras/cota-parlamentar-8.5-mil.mjs'

console.log('ANTES:', gastos)
console.time('Ordenando cotas de parlamentares...')


//Ordenação pelo partido, depois pelo nome do parlamentar e por fim, id_documento
bubbleSort(gastos, (a, b) => {
    
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
console.log({totTrocas, pass, comps, memoria})
console.timeEnd('Ordenando cotas de parlamentares...')