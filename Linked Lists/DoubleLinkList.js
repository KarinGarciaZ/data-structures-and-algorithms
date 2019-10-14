class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null, previous: null }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode
    this.length++
    return this 
  }

  insertFromHead(index, value) {
    const newNode = new Node(value)
    let currentNode= this.traverseToIndex(index)    
    let lastNode = currentNode.previous

    lastNode.next = newNode    
    newNode.previous = lastNode
    newNode.next = currentNode
    currentNode.previous = newNode
    this.length++
    return this
  }
  
  traverseToIndex(index) {
    let i = 0
    let currentNode = this.head
    while( i !== index ) {
      currentNode = currentNode.next
      i++
    }
    return currentNode
  }

  insertFromTail(index, value) {

  }

  insert(index, value) {
    if ( index >= this.length )
      return this.append(value)

    if ( index <= 0 )
      return this.prepend(value)

    if ( index < this.length/2 )
      return this.insertFromHead(index, value)
    else
      return this.insertFromTail(index, value)
  }

  printList() {
    const array = []
    let currentNode = this.head
    while( currentNode !== null ) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }  
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(2)
myLinkedList.insert(1, 3)

console.log(myLinkedList.printList())