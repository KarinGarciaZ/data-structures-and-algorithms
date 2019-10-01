class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) 
      hash = (hash + key.charCodeAt(i) * i) % this.data.length    
      
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if(!this.data[address]) 
      this.data[address] = []    
    this.data[address].push([key, value])

    return this.data
  }

  get(key) {
    let address = this._hash(key)
    if( this.data[address] )
      for (let i = 0; i < this.data[address].length; i++) {
        const element = this.data[address][i]
        if ( element[0] === key )
          return element[1]
      }

    return null
  }

  keys(){
    let keysArr = [];
    for(let i = 0; i < this.data.length; i++)
      if(this.data[i])
        for(let j = 0; j < this.data[i].length; j++)
          keysArr.push(this.data[i][j][0])      
    
    return keysArr
  }
}

const myHashTable = new HashTable(5)
console.log(myHashTable.set('apples', 50))
console.log(myHashTable.set('magos', 120))
console.log(myHashTable.set('applesss', 50))
console.log(myHashTable.set('magoss', 120))
console.log(myHashTable.set('appless', 50))
console.log(myHashTable.get('apples'))
console.log(myHashTable.get('magos'))
console.log(myHashTable.keys())