let array1 = [2, 4, 6, 7, 10]
let array2 = [1, 3, 8, 9]

const sort = (arr1, arr2) => {

  let arrSorted = []
  let indexArr1 = 0
  let indexArr2 = 0  
    
  while( arr1[indexArr1] || arr2[indexArr2] ) {
    if( arr1[indexArr1] < arr2[indexArr2] || !arr2[indexArr2] ) {
      arrSorted.push(arr1[indexArr1])
      indexArr1++
    } else {
      arrSorted.push(arr2[indexArr2])
      indexArr2++
    }
  }

  return arrSorted
}

console.log(sort(array1, array2))