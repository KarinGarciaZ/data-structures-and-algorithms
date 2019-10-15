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

  insert(index, value) {
    if ( index >= this.length )
      return this.append(value)

    if ( index <= 0 )
      return this.prepend(value)

    let currentNode = null

    if ( index < this.length/2 )
      currentNode= this.traverseToIndexFromHead(index)
    else
      currentNode = this.traverseToIndexFromTail(index)

    const newNode = new Node(value) 
    let lastNode = currentNode.previous
    lastNode.next = newNode    
    newNode.previous = lastNode
    newNode.next = currentNode
    currentNode.previous = newNode
    this.length++
    return this
  }

  remove(index) {
    if ( index <= 0 ) {
      this.head = this.head.next
      this.head.previous = null
      this.length--
      return this
    }    

    if ( index >= this.length - 1 ) {
      this.tail = this.tail.previous
      this.tail.next = null
      this.length--
      return this
    }  

    let currentNode = null

    if ( index < this.length/2 )
      currentNode = this.traverseToIndexFromHead(index)
    else
      currentNode = this.traverseToIndexFromTail(index)

    let previousNode = currentNode.previous
    let nextNode = currentNode.next
    previousNode.next = nextNode
    nextNode.previous = previousNode
    this.length--
    return this
  }
  
  traverseToIndexFromHead(index) {
    let i = 0
    let currentNode = this.head
    while( i !== index ) {
      currentNode = currentNode.next
      i++
    }
    return currentNode
  }

  traverseToIndexFromTail(index) {
    let i = this.length - 1
    let currentNode = this.tail
    while( i !== index ) {
      currentNode = currentNode.previous
      i--
    }
    return currentNode
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
myLinkedList.insert(1, 11)
myLinkedList.remove(0)


console.log(myLinkedList.printList())