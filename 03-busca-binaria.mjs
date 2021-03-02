/*************************************
 * BUSCA BINARIA
 *
 * Requer um conjunto de dados ORDENADO.
 * Atua dividindo o vetor sucessivamente em metades aproximadas, 
 * até que o valor de busca seja localizado, ou que o ponteiro
 * de fim acabe antes do pondeiro de inicio, Essa ultima situacao
 * iundica que o valor de busca nao existe no conjunto
 */

 function buscaBinaria(vetor, valorBusca){
     let ini = 0
     let fim = vetor.length - 1
     let meio 

    while(fim >= ini) {
        meio = Math.floor((fim + ini) / 2) //Math floor arredonda pra baixo
        if(vetor[meio]=== valorBusca) return meio //achou
        else if(valorBusca > vetor[meio]) ini = meio + 1
        else fim = meio - 1
    }
    return -1 // Nao existe
 }

 console.log(ini)