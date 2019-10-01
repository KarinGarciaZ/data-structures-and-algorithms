const maxSubArray = nums => {
  let lengthArr = nums.length
  let higherSum = nums[0]
  let sum = 0
  
  //=(n^3) Shit!
  for (let i = 0; i < lengthArr; i++) {    
    for (let j = lengthArr - 1; j >= i; j--) {      
      sum = 0
      
      for (let k = j; k >= i; k--) {
        sum += nums[k] 
      }
      
      if( sum > higherSum ) 
        higherSum = sum  
    }    
  }   
  return higherSum  
};


//nice solution
const maxSubArray2 = nums => {
  let maxSum = nums[0];
  let currentMaxSum = maxSum;
  
  for (let i = 0; i < nums.length; i++) {
      currentMaxSum = Math.max(nums[i], nums[i] + currentMaxSum);
      maxSum = Math.max(maxSum, currentMaxSum);
  }
  
  return maxSum;
}

let arrayExample = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(arrayExample))
console.log(maxSubArray2(arrayExample))