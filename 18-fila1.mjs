import { Queue } from './lib/Queue2.mjs'

let fila = new Queue()
console.log(fila.print())

fila.enqueue('Eduaney')
console.log(fila.print())

fila.enqueue('Maria')
console.log(fila.print())

fila.enqueue('Nicolas')
console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

fila.enqueue('Livia')
console.log(fila.print())