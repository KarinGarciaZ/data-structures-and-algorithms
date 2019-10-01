let reverse = str => {
    if( str.length <= 1 )
        return str

    let lengthString = str.length - 1
    let wordReversed = []

    for (let i = lengthString; i >= 0; i--)
        wordReversed.push(str[i])        

    return wordReversed.join('')
}

let reverse2 = str => {
    if( str.length <= 1 )
        return str

    let lengthString = str.length - 1
    let wordReversed = ''

    for (let i = lengthString; i >= 0; i--) 
        wordReversed = wordReversed + str[i]      

    return wordReversed
}

let reverse3 = str => [...str].reverse().join('')

console.log(reverse('Hola Oscar'))
console.log(reverse2('Hola Oscar'))
console.log(reverse3('Hola Oscar'))