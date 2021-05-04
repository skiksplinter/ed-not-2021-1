export class Queue {

    #data
    #head //controla o inicio da fila
    #tail //cauda, fim da estrutura

    constructor() {
        this.#data = {}    //Objeto vazio (onde armazena o que entra na fila)
        this.#head = 0     //Inicio da fila
        this.#tail = -1    //Final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    enqueue(val) {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    dequeue() {
        //Se a fila já estiver vazia, retorna undefined para nao
        //afetar o posicionamento de #head
        if(this.empty) return undefined

        let temp = this.#data[this.#head]  //Salva o elemento no inicio da fila
        delete this.#data[this.#head]      //Apaga o elemento no inicio da fila
        this.#head++                       //Chega o inicio da fila para a frente
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peek(){
        return this.#data[this.#head]
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

/*let fila = new Queue()

fila.enqueue('Maria')
fila.enqueue('Eduaney')
fila.enqueue('Davi')
fila.enqueue('Maria Rita')

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})

fila.enqueue('Ana Beatriz')

fila.dequeue()
fila.dequeue()
fila.dequeue()
*/