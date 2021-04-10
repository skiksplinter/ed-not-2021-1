/* 
  Algoritmo Merge Sort
*/
let comps, divisoes, juncoes

function mergeSort(vetor, fnComp) {
    
    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            if(fnComp(vetDir[pDir], vetEsq[pEsq])) {    // Parâmetros invertidos
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Descobrir de qual lado sobrou
        let sobra

        // Sobra à esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)

        // Retorna vetor de resultados + sobra
        return [...vetRes, ...sobra]
    }
    
    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive - a posição final NÃO entra)
        let vetEsq = vetor.slice(0, meio)
        // Caso o segundo parâmetro de slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)
        divisoes++

        // Chamadas recursivas à função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++
        return vetFinal
    }
    return vetor    // Vetor de 1 elemento, não modificado, condição de saída
}

import { gastos } from '../amostras/cota-parlamentar-282-mil.mjs'

comps = 0, divisoes = 0, juncoes = 0

console.time('Ordenando cotas de parlamentares...')

let candidatosOrd = mergeSort(gastos, (a, b) => {
    
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
console.log({divisoes, juncoes, comps, memoria})
console.timeEnd('Ordenando cotas de parlamentares...')