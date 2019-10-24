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
  // 11.13% and 7.69%
  function mergeTrees(t1, t2) {

    if( !t1 && !t2 ) return null
    if (!t1 || !t2)  return t1 || t2

    let lastNode = null

    let traverse = (node1, node2, direction) => {
      if(!node1 && !node2) return null

      if( node1 && node2 )
        node1.value += node2.value

      if( !node1 && node2 ) {
        lastNode[direction] = new Node(node2.value)
        node1 = lastNode[direction]
      }

      lastNode = node1

      if(!node1)
        node1 = { right: null, left: null }
      if(!node2)
        node2 = { right: null, left: null }
      
      traverse(node1.left, node2.left, 'left')
      lastNode = node1
      traverse(node1.right, node2.right, 'right')
    }

    traverse(t1, t2)

    return t1
  }

  //A chinese solution xv
  var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) {
        return null;
    }
    
    if (!t1 || !t2) {
        return t1 || t2;
    }
    
    var root = new TreeNode(t1.val + t2.val);
    
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    
    return root;
};


let tree = new Tree()
tree.insert(6)
tree.insert(4)
tree.insert(2)
tree.insert(8)

let tree2 = new Tree()
tree2.insert(4)
tree2.insert(2)
tree2.insert(3)
tree2.insert(6)
tree2.insert(8)

console.log(mergeTrees(tree.root,tree2.root))

console.log(JSON.stringify(tree.root))

