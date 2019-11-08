/*
Given a binary tree, return the inorder traversal of its nodes' values.
Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let numbers = []

    let traverse = node => {
        if(!node) return null

        traverse(node.left)
        numbers.push(node.val)
        traverse(node.right)
    }

    traverse(root)

    return numbers
};

//really nice solution
var inorderTraversal = function(root) {
    let stack = []
    let res = []

    while (stack.length || root) {
        if(root) {
            stack.push(root)
            root = root.left
        } else {
            let node = stack.pop()
            res.push(node.val)
            root = node.right
        }
    }
    return res
};