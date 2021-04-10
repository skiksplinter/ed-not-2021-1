/* 
  Algoritmo Selection Sort
*/
let trocas, pass, comps

function selectionSort(vetor, fnComp) {

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
                // Este loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++) {
                //Inverte a ordem dos obj na passagem para funçao de comparacao.
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }

    // Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)
        
        // Parâmetros em ordem invertida
        if(fnComp(vetor[i], vetor[menor])) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas++
        }
        comps++
    }
}

// Função de comparação retorna true caso o PRIMEIRO objeto seja MAIOR que o SEGUNDO
import { gastos } from '../amostras/cota-parlamentar-35-mil.mjs'

console.time('Ordenando cotas de parlamentares...')

selectionSort(gastos, (a, b) => {
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