class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null}
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this 
  }

  insert(index, value) {
    if ( index >= this.length )
      return this.append(value)

    if ( index <= 0 )
      return this.prepend(value)

    const newNode = new Node(value)
    let lastNode = this.traverseToIndex(index - 1)    
    let currentNode = lastNode.next
    lastNode.next = newNode
    newNode.next = currentNode
    this.length++
    return this
  }

  remove( index ) {
    if ( index >= this.length ) {
      index = this.length - 1
    }

    if ( index <= 0 ) {
      this.head = this.head.next
      this.length--
      return this
    }      

    let lastNode = this.traverseToIndex(index - 1)
    lastNode.next = lastNode.next.next
    this.length--
    return this
  }

  reverse() {
    if (this.length === 1)
      return this.head
    
    let first = this.head
    this.tail = this.head
    let second = first.next
    while( second ) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }

    this.head.next = null
    this.head = first
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
myLinkedList.prepend(4)
myLinkedList.insert(1, 15)
myLinkedList.prepend(14)
myLinkedList.remove(3)
myLinkedList.reverse()

console.log(myLinkedList.printList())