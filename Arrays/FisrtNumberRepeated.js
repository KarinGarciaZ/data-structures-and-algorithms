let arr1 = [2, 5, 5, 2, 3, 55, 1, 2, 4]

//O(n^2)
const returnRepeated = arr => {
  for (let i = 1; i < arr.length; i++) 
    for (let j = i - 1; j >= 0; j--)      
      if( arr[i] === arr[j] )
        return arr[i]  

  return undefined
}

//O(n)
const returnRepeated2 = arr => {
  let tempArray = []

  for (let i = 0; i < arr.length; i++) {
    if ( tempArray[arr[i]] || (typeof(tempArray[arr[i]]) === 'number') ) 
      return arr[i]
      
    tempArray[arr[i]] = arr[i]    
  }    

  return undefined
}
console.log(returnRepeated(arr1))
console.log(returnRepeated2(arr1))