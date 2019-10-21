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

  lookup(value) {
    if (!this.root) return false

    let currentNode = this.root
    while(currentNode) {
      if( value === currentNode.value ) 
        return currentNode

      if(value < currentNode.value) 
        currentNode = currentNode.left
      else
        currentNode = currentNode.right
    }

    return false
  }
}

let tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(15)
tree.insert(170)
tree.insert(1)

console.log(JSON.stringify(tree.lookup(17410)))

console.log(JSON.stringify(tree.root))

