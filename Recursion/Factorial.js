const getFactorial = num => {
    if ( num <= 2 ) return num;

    return getFactorial(num - 1) * num;
}

console.log(getFactorial(5));