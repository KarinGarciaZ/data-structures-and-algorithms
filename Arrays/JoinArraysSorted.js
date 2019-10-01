let array1 = [4, 6, 1, 9, 0]
let array2 = [1, 8, 3, 5, 6]

const sort = (arr1, arr2) => {
  let arrJoined = [...arr1, ...arr2]

  for (let i = 0; i < arrJoined.length - 1; i++) 
    for (let j = i+1; j < arrJoined.length; j++) 
      if( arrJoined[i] > arrJoined[j] ) {
        let aux = arrJoined[i]
        arrJoined[i] = arrJoined[j]
        arrJoined[j] = aux      
    }   
    
  return arrJoined
}

console.log(sort(array1, array2))