const read = require('readline-sync')
console.clear()
function sumFib(number){
    const fib = [0,1]
    for(let i = 2; i < number; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    console.log(fib)
    if(fib.includes(number)){
        console.log(`${number} é um numero da sequencia de Fibonacci`)
    } else {
        console.log(`${number} não é um numero da sequencia de Fibonacci`)
    }
}

const num = parseInt(read.question('Me indique um numero para verificar na sequencia de Fibonacci: '))
sumFib(num)