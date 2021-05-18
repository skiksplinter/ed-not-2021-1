/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

function decForBin(NumDec) {
    
    var restPilha = [], //pilha de restos
      rest, //variável de resto
      binString = ''; //string de binários inicializada como vazio
  
    //enquanto o numero decimal for maior que zero
    while (NumDec > 0) {
      //res recebe arredondamento pra baixo, o resto de NumDec/2
      //é maior que 0?
      rest = Math.floor(NumDec % 2);
      restPilha.push(rest); 
      NumDec = Math.floor(NumDec / 2); //sempre arredonda pra baixo
    } // volta no loop até ficar 0
  
    while (restPilha.length > 0) {
      // tamanho da pilha é maior que 0?
      binString += restPilha.pop().toString(); // recebe cumulativamente o ultimo valor
    } //convertido em string
    return binString; // retorna com os resultados invertido
  }
  
  console.log(decForBin(100));
  