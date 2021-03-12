/*

SELECTION SORT

Trata-se de uma otimizaçao do bubble sort, diminuindo drasticamente
o número de trocas necessárias para fazer a ordenaçao.

Isola um dos valores do vetor e procura pelo menor valor entre os
restantes, promovendo a troca caso o primeiro valor seja maior 
que o segundo.
*/

let trocas, pass, comps

function selectionSort(vetor){

    trocas = 0 , comps = 0, pass = 0 
    function encontrarMenor(inicio) {
        let menor = inicio
        //Este lopp vai até a última posiçao
        for(let j = inicio + 1; j < vetor.length; j++){
            if(vetor[j] < vetor[menor]) menor = j
            comps++

        }
        return menor
    }


    //Percurso do vetor até a PENULTIMA posiçao
    for(let i = 0; i <= vetor.length - 2; i++){
        pass++
        let menor = encontrarMenor(i +1)
        if(vetor[menor] < vetor[i]) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas++
        }
        comps++
    }
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3, 10, 23]
selectionSort(nums)
console.log(nums)
console.log(`O numero de trocas é de ${trocas}`)
console.log(`O numero de passagens é de ${pass}`)
console.log(`O numero de comparaçoes é de ${comps}`)

/*import { nomes } from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando nomes...')
console.log('DEPOIS', nomes)
console.log(`O numero de trocas é de ${trocas}`)
console.log(`O numero de passagens é de ${pass}`)
console.log(`O numero de comparaçoes é de ${comps}`)
*/
