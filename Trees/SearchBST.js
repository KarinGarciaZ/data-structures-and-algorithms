/*
Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
For example, 
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2     
     / \   
    1   3
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

//MySolution 35.23% and 50%
var searchBST = function(root, val) {
  while( root ) {
      if( root.val === val ) return root
      if( root.val < val ) 
        root = root.right
      else
        root = root.left
  }
  return null
};

//A chinese Solution 58.74% and 6.25%
var searchBST = function(root, val) {
  var search = function(root, val) {
      if (root.val === val){
          return root;
      } else if (val < root.val && root.left !== null) {
          return search(root.left, val);
      } else if (val > root.val && root.right !== null) {
          return search(root.right, val);
      } else return [];
  }
  
  return search(root, val);
};