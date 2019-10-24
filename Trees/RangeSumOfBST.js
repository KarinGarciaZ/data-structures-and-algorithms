class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insert( value ) {
    let newNode = new Node(value)

    if( !this.root ) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root
      while( true ) { 
        if( currentNode.value > value ) {
          if( !currentNode.left ) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        }
        else {
          if( !currentNode.right ) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  //solution with not ordered array. 68.79% and 11.54%
  rangeSumBST(L, R) {
    let arrayWithValues = []

    let traverse = node => {
      if(!node) return null

      traverse(node.left)
      traverse(node.right)
      arrayWithValues.push(node.value)
    }

    traverse(this.root)

    let total = 0
    for( let i = 0; i < arrayWithValues.length; i++ ) {
      if( arrayWithValues[i] >= L && arrayWithValues[i] <= R )
        total += arrayWithValues[i]
    }

    return total
  }

  //solution getting total while looping tree. 53.46% and 53.85%
  rangeSumBSTOrdered(L, R) {
    let total = 0

    let traverse = node => {
      if(!node) return null

      traverse(node.left)      
      traverse(node.right)
      if( node.value >= L && node.value <= R )
        total += node.value
    }

    traverse(this.root)

    return total
  }

  //solution with customized recurtion. 88.55% and 30.77%
  rangeSumBSTCustomized(L, R) {
    let total = 0

    let traverse = node => {
      if(!node) return null

      if( node.value > L )
        traverse(node.left)    
      if( node.value < R )   
        traverse(node.right)
      if( node.value >= L && node.value <= R )
        total += node.value
    }

    traverse(this.root)

    return total
  }
}

let tree = new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
tree.insert(18)

console.log(tree.rangeSumBST(7,15))
console.log(tree.rangeSumBSTOrdered(7,15))
console.log(tree.rangeSumBSTCustomized(7,15))

console.log(JSON.stringify(tree.root))

