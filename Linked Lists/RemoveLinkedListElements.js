/*
Remove all elements from a linked list of integers that have value val.
Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */

 //faster than 88.48% and 37.50%
var removeElements = function(head, val) {
  if( !head ) return head

  let pointer = head
  let lastValidValue = null

  while( pointer ) {
    if( pointer.val !== val ) {
      lastValidValue = pointer
      head = lastValidValue
      pointer = null
    } else
      pointer = pointer.next
  }

  if( lastValidValue === null )
    return null

  pointer = lastValidValue.next

  while( pointer ) {
    if( pointer.val !== val ) {
      lastValidValue.next = pointer
      lastValidValue = lastValidValue.next
    }
    pointer = pointer.next
  }

  lastValidValue.next = null
  return head
};