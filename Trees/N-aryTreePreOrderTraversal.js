/*
Given an n-ary tree, return the postorder traversal of its nodes' values.
For example, given a 3-ary tree:
Return its postorder traversal as: [5,6,3,2,4,1].
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  let result = []
    
  const traverse = node => {
    if ( !node ) return null

    result.push(node.val)
    node.children.forEach( child => traverse(child) )
  }

  traverse(root)

  return result
};