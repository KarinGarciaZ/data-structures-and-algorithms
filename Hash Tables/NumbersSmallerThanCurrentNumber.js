/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let map = {};
    let returningArray = [];
    let cont;

    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];

      if (map[current]) {
        returningArray[i] = map[current];
        continue;
      }

      cont = 0;
      for (let j = 0; j < nums.length; j++) {
        if ( nums[j] < current )
          cont++;
      }

      map[current] = cont;
      returningArray[i] = cont;
    }

    return returningArray;
};

var smallerNumbersThanCurrent = function(nums) {
  nums.sort(function(a, b){return a-b});
  let map = {};
  let returningArray = [];

  for (let i = 0; i < nums.length; i++) {
    if( map[nums[i]] ) {
      returningArray.push(map[nums[i]]);
    } else {
      map[nums[i]] = i;
      returningArray.push(i);
    }
  }

  return returningArray;
};

smallerNumbersThanCurrent([8,1,2,2,4,3])
