/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.
Example:
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */


 //6.98% and 100%
var partition = function(head, x) {
  if (!head || !head.next) return head

  let pointerLess = null
  let pointerMore = null
  let pointer = head

  while(pointer) {
    if( pointer.val < x && !pointerLess )
      pointerLess = pointer
    else if( pointer.val >= x && !pointerMore )
      pointerMore = pointer

    if( pointerMore && pointerLess )
      break

    pointer = pointer.next
  }
  
  if( !pointerLess )
    return pointerMore
  if( !pointerMore )
    return pointerLess

  let more = pointerMore
  let less = pointerLess
  pointer = head

  while(pointer) {
    if( pointer !== more && pointer !== less ) {
      if( pointer.val < x ) {
        pointerLess.next = pointer
        pointerLess = pointerLess.next
      }
      else {
        pointerMore.next = pointer
        pointerMore = pointerMore.next
      }
    }
    pointer = pointer.next
  }
  pointerMore.next = null
  pointerLess.next = more
  return less
};

//Chinese solution 92.15% and 100%

var partition = function(head, x) {
  const dummyLess = new ListNode();
  const dummyMore = new ListNode();
  let node = head;
  let less = dummyLess;
  let more = dummyMore;
  while (node) {
      if (node.val < x) {
          less = less.next = node;
      } else {
          more = more.next = node;
      }
      node = node.next;
  }
  less.next = dummyMore.next;
  more.next = null;
  return dummyLess.next;
};