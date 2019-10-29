/*
Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.
Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

 //92.17% and 42.86%
var reverseBetween = function(head, m, n) {
  let pointer = head
  let index = 1
  let lastFirst 
  let firstlast 
  let lastNextNode 
  while( index < m - 1){
    pointer = pointer.next
    index++
  }

  let traverse = node => {
    if( index < n ) {
      index++
      let newnode = traverse(node.next)
      newnode.next = node
    } else {
      lastFirst = node
      lastNextNode = node.next
    }
    return node
  }

  if( m > 1 ) {
    index++
    firstlast = traverse( pointer.next )
    pointer.next = lastFirst
  } else {
    firstlast = traverse( pointer )
    head = lastFirst
  }   
  firstlast.next = lastNextNode

  return head
};

//A chinese solution
function reverseBetween(head, m, n) {
  const before = { next: head };
  let prev = before;

  while (--m) {
    prev = prev.next;
    --n;
  }

  let curr = prev.next;
  while (--n) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return before.next;
}