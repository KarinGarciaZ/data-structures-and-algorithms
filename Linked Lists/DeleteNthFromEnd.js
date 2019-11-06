/*
Given a linked list, remove the n-th node from the end of list and return its head.
Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
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
 * @param {number} n
 * @return {ListNode}
 */

 //82.21% and 13.54%
var removeNthFromEnd = function(head, n) {
    let pointer = head
    let cont = 0
    let traverse = (prev, node) => {
        if (!node) return null
        traverse(node, node.next) 
        cont++
        if(cont === n)
            prev.next = node.next
    }
    traverse(pointer, pointer.next)
    if(n > cont)
        head = head.next
    return head
};