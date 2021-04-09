/*
    1. Identifique o algoritmo abaixo.  SELECTION

    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/
let change, pass, compar  // criando as variaveis de troca, passagem e alteracao

function selectionSort(d, fnComp) { //inicio da funcao selection com 2
    change=0, pass=0, compar=0           // inicializando as variaveis com zero

    function foundSmall(inicio) {

        let small = inicio
        for(let g = inicio + 1; g < d.length; g++) {

         if(fnComp(d[small], d[g])) small = g
         compar++
        }
        return small
    }

    for(let h = 0; h < d.length - 2; h++) {
        pass++

        let small = foundSmall(h + 1)

        if(fnComp(d[h], d[small])) {
            [ d[small], d[h] ] = [ d[h], d[small] ]
            change++
        }  
        compar++
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
selectionSort(candidatos, (obj1, obj2) => obj1.SG_UE > obj2.NR_CANDIDATO)
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
//console.log({change, pass, compar})
