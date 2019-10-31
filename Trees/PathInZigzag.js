/*
In an infinite binary tree where every node has two children, the nodes are labelled in row order.
In the odd numbered rows (ie., the first, third, fifth,...), 
the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.
Example 1:
Input: label = 14
Output: [1,3,4,14]
Example 2:
Input: label = 26
Output: [1,2,6,10,26]
*/

/**
 * @param {number} label
 * @return {number[]}
 */

//hard to do solution with result of 74.44% and 100%
var pathInZigZagTree = function(label) {
  let log = Math.floor(Math.log2(label))
  let results = [label]
  let position  
  let pot = Math.pow(2, log)

  if( log % 2 ) 
    position = Math.ceil( (pot * 2 - label) / 2)
  else 
    position = Math.ceil((label - pot + 1) / 2)
  
  for (let i = log-1; i >= 0; i--) {
    pot = Math.pow(2, i)
    if( i % 2 ) {
      label = pot * 2  - position
      results.push(label)
      position = Math.ceil( (pot * 2 - label) / 2)
    } else {
      label = pot - 1 + position
      results.push(label)
      position = Math.ceil((label - pot + 1) / 2)
    }
  }

  return results.reverse()   
};

console.log(pathInZigZagTree(100000))

