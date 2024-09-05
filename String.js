const read = require('readline-sync')
console.clear()

function CountA(inputString) {
    let count = 0

    // Convertendo para minúsculo para facilitar a contagem
    const lowerCaseString = inputString.toLowerCase()

    // Iterando sobre cada caractere da string
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] === 'a') {
            count++
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`)
    } else {
        console.log(`A letra 'a' não aparece na string.`)
    }
}

const input = read.question('Digite uma string: ')
CountA(input)
