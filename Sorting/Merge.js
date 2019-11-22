let nums = [2,4,3,1,6,56,75,34]

const mergeSort = array => {
    if(array.length === 1)
        return array
    
    let left = array.splice(0, Math.floor(array.length / 2))
    let right = array
    
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

const merge = (left, right) => {
    let contL = 0
    let contR = 0
    let sortedArr = []

    while(contL < left.length && contR < right.length) {
        if( left[contL] < right[contR] ) {
            sortedArr.push(left[contL])
            contL++
        } else {
            sortedArr.push(right[contR])
            contR++
        }
    }

    if( contL < left.length )
        return [...sortedArr, ...left.splice(contL)]
    else
        return [...sortedArr, ...right.splice(contR)]
}

console.log(mergeSort(nums))