/*
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. 
Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
For example, 
Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if(!root) return new TreeNode(val)
  
  let pointerNode = root

  while( pointerNode ) {
    if( pointerNode.val > val ) {
      if( !pointerNode.left ) {
        pointerNode.left = new TreeNode(val)
        return root
      }
      pointerNode = pointerNode.left
    } else {
      if( !pointerNode.right ) {
        pointerNode.right = new TreeNode(val)
        return root
      }
      pointerNode = pointerNode.right
    }
  }
};