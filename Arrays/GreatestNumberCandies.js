/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxNumber = Math.max(...candies);
    return candies.map( candy => candy + extraCandies >= maxNumber );
};

var kidsWithCandies = function(candies, extraCandies) {
  const maxNumber = Math.max(...candies);

  let arrToReturn = [];

  for (let i = 0; i < candies.length; i++) {
    arrToReturn.push(candies[i] + extraCandies >= maxNumber);
  }

  return arrToReturn;
};