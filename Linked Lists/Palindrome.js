/*
Given a singly linked list, determine if it is a palindrome.
Example 1:
Input: 1->2
Output: false
Example 2:
Input: 1->2->2->1
Output: true
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
 * @return {boolean}
 */


//98.15% and 20%
var isPalindrome = function(head) {
    let pointer = head
    let length = 0
    let returning = true

    let traverse = (node, index) => {
      if( !node ) return null
      index++
      length = index
      traverse(node.next, index)

      if( index > length / 2 ) {
        if( pointer.val !== node.val )
          returning = false
        pointer = pointer.next
      }
    }

    traverse(head, 0)

    return returning
};