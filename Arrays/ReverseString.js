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

let reverse4 = str => {
    let i = str.length - 1

    let traverse = (i) => {
        if(i < 0)
            return ''
        return str[i]+ traverse(i-1)
    }
    return traverse(i)
}

function reverseStringRecursive (str) {
    console.log('====='+str)
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }


console.log(reverse('Hola Oscar'))
console.log(reverse2('Hola Oscar'))
console.log(reverse3('Hola Oscar'))
console.log(reverse4('Hola Oscar'))
console.log(reverseStringRecursive('Hola Oscar'))