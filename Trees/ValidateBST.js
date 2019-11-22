/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root)
        return null

    let left = isValidBST(root.left)
    let right = isValidBST(root.right)

    if( (left && left.val >= root.val) || (right && right.val <= root.val) || left === false || right === false)
        return false

    return root
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root)
        return true

    let traverse = (node, min, max) => {
        if(!node) return null

        if( node.val <= min || node.val >= max )
            return false

        if (traverse(node.left, min, node.val) !== false && traverse(node.right, node.val, max) !== false)
            return true
        else 
            return false
    }

    return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};