/*
Given a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list.
Example 1:
Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:
Input: 1->1->1->2->3
Output: 2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let map = {}
    let pointer = head

    while(pointer) {
        if(map[pointer.val] === undefined) 
            map[pointer.val] = false
        else
            map[pointer.val] = true

        pointer = pointer.next
    }

    pointer = head
    let prev = head

    for(let key in map) {
        if(!map[key]){
            pointer.val = key
            prev = pointer
            pointer = pointer.next
        }
    }
    if ( pointer === head ) return null
    prev.next = null

    return head
};


//66.21% and 33.33%
var deleteDuplicates = function(head) {
    if( !head || !head.next ) return head

    let next = head.next
    if ( head.val === next.val && !next.next )
        return null

    let pointer = head
    let prev = null
    let node = pointer
    let prevPointer = null

    if ( head.val !== next.val ) {
        prevPointer = pointer
        pointer = pointer.next
        prev = node
        node = next
        next = next.next
    }
    else {
        prev = next
        node = next.next
        next = node.next
    }

    while(node.next) {
        if( node.val !== prev.val && node.val !== next.val ) {
            prevPointer = pointer
            pointer.val = node.val
            pointer = pointer.next
        }
        prev = node
        node = next
        next = next.next
    }
    if( node.val !== prev.val ) {
        prevPointer = pointer
        pointer.val = node.val
        pointer = pointer.next
    }
    if(!prevPointer) return null
    prevPointer.next = null

    return head
};
