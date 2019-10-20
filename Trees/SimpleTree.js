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
}

let tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)

console.log(JSON.stringify(tree.root))

