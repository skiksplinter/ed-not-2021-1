function buscaSequencial(vetor, valorBusca, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        //em vez de fazer a comparacao dentro da funcao de busca,
        //'terceirizamos' essa comparacao chamando uma funcao externa

        if(fnComp(vetor[i] === valorBusca)) return i //Retorna a posição onde foi encontrado
    }
    return -1 //Valor de busca não encontrado
}

/*function comparaNome(objNome, valorBusca) {
    return objNome.first_namo === valorBusca
}*/

const comparaNome = (objNome, valor) => objNome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'
console.log('---------------------------------------------------')