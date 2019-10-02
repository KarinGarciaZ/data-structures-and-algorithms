class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) 
      hash = (key * (i + 1)) % this.data.length          
    return hash
  }

  get(key) {
    let address = this._hash(key)

    if(this.data[address])
      for (let i = 0; i < this.data[address].length; i++)
        if( this.data[address][i][1] === key )
          return key      

    return null
  }

  set(key, value) {  
    let address = this._hash(key)  
    if(!this.data[address]) 
      this.data[address] = []
    
    this.data[address].push([key, value])            
  }
}

let arr1 = [2, 5, 1, 2, 3, 55, 1, 2, 4]

const myHashTable = new HashTable(arr1.length)

for (let i = 0; i < arr1.length; i++) {
  let valueRepeated = myHashTable.get(arr1[i])

  if( valueRepeated ) {
    console.log(valueRepeated)
    break
  }

  myHashTable.set(arr1[i], arr1[i])
}

/*--------------------------SOLUTION 2---------------------------- */

const returnRepeated = arr => {
  let map = {}

  for (let i = 0; i < arr.length; i++) {
    if ( map[arr[i]] || (typeof(map[arr[i]]) === 'number') ) 
      return arr[i]
      
    map[arr[i]] = arr[i]    
  }  

  return undefined
}

console.log(returnRepeated(arr1))