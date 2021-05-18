/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/
function palindromo(queue){

let array = queue.split("");
let reverse = array.reverse();

return queue === reverse.join("") ? "Sim é palíndromo" : "Nao é um palíndromo"
}

console.log(palindromo("o lobo ama o bolo"))