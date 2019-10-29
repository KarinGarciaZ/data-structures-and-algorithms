/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
Return the number of different transformations among all words we have.
Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations, "--...-." and "--...--.".
*/

/**
 * @param {string[]} words
 * @return {number}
 */

 //68.68% and 55.56%
var uniqueMorseRepresentations = function(words) {
  let morseLetters = [
    ".-","-...","-.-.","-..",".",//e
    "..-.","--.","....","..",".---",//j
    "-.-",".-..","--","-.","---",//o
    ".--.","--.-",".-.","...","-",//t
    "..-","...-",".--","-..-","-.--","--.."]

  let savedWords = {}
  let word = ''
  let count = 0

  for (let i = 0; i < words.length; i++) {

    word = ''
    for (let j = 0; j < words[i].length; j++) {
      word += morseLetters[words[i][j].charCodeAt(0) - 97]      
    }

    if( savedWords[word] === undefined ) {
      savedWords[word] = true
      count++
    }

  }

  return count
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])