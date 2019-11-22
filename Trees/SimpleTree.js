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

  //My implementation of remove
  remove(value) {
    let currentNode = this.root
    let prevNode = this.root

    while(currentNode) {   
      if( value === currentNode.value ) {        
        let LR = (currentNode.value > prevNode.value)? 'right' : 'left'
        let nodeToUse

        //When the node is a leaf
        if( !currentNode.left && !currentNode.right )
          prevNode[LR] = null

        //Get lowest number from right direction
        if( currentNode.right ) {
          nodeToUse = currentNode.right
          let prevNodeToUSe

          if( nodeToUse.left ) {
            while( nodeToUse.left ) {            
              prevNodeToUSe = nodeToUse
              nodeToUse = nodeToUse.left
            }
            currentNode.value = nodeToUse.value
            prevNodeToUSe.left = nodeToUse.right
          } else {
            currentNode.value = nodeToUse.value
            currentNode.right = nodeToUse.right
          }
        }
        
        //Get greatest number from left direction if there's not right direction
        if( currentNode.left && !currentNode.right ) {
          nodeToUse = currentNode.left
          let prevNodeToUSe

          if( nodeToUse.right ) {
            while( nodeToUse.right ) {            
              prevNodeToUSe = nodeToUse
              nodeToUse = nodeToUse.right
            }
            currentNode.value = nodeToUse.value
            prevNodeToUSe.left = nodeToUse.right
          } else {
            currentNode.value = nodeToUse.value
            currentNode.right = nodeToUse.left
          }
        }

        return this
      }

      prevNode = currentNode

      if(value < currentNode.value) 
        currentNode = currentNode.left
      else
        currentNode = currentNode.right
    }
  }

  breathFirstSearch() {
    let current = this.root
    let list = []
    let queue = []
    queue.push(current)
    
    while(queue.length) {
      current = queue.shift()
      list.push(current.value)
      if( current.left )
        queue.push(current.left)
      if( current.right )
        queue.push( current.right )
    }

    return list
  }

  breathFirstSearchRecursive( list, queue ) {
    if( !queue.length )
      return list

    let current = queue.shift()
    list.push(current.value)
    if( current.left )
      queue.push(current.left)
    if( current.right )
      queue.push( current.right )

    return this.breathFirstSearch(list, queue)
  }

  depthFirstSearchInorder() {
    let list = []
    let traverse = node => {
      if(!node) return

      traverse(node.left)
      list.push(node.value)
      traverse(node.right)
    }
    traverse(this.root)
    return list
  }

  depthFirstSearchPreorder() {
    let list = []
    let traverse = node => {
      if(!node) return

      list.push(node.value)
      traverse(node.left)
      traverse(node.right)
    }
    traverse(this.root)
    return list
  }

  depthFirstSearchPostorder() {
    let list = []
    let traverse = node => {
      if(!node) return

      traverse(node.left)
      traverse(node.right)
      list.push(node.value)
    }
    traverse(this.root)
    return list
  }
}

let tree = new Tree()
tree.insert(40)
tree.insert(5)
tree.insert(3)
tree.insert(1)
tree.insert(4)
tree.insert(18)
tree.insert(16)
tree.insert(17)
tree.insert(13)
tree.insert(12)
tree.insert(15)
tree.insert(9)
tree.insert(10)
tree.insert(11)
tree.insert(16)
tree.insert(14)
tree.insert(19)
tree.insert(25)
tree.insert(23)
tree.insert(24)

tree.remove(19)

console.log(tree.breathFirstSearch())
console.log(tree.breathFirstSearchRecursive([], [tree.root]))
console.log(tree.depthFirstSearchInorder())
console.log(tree.depthFirstSearchPreorder())
console.log(tree.depthFirstSearchPostorder())
//console.log(JSON.stringify(tree.lookup(5)))

//console.log(JSON.stringify(tree.root))

