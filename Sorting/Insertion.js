let nums = [2,4,3,1,6,56,75,34]

for (let i = 0; i < nums.length; i++) {
    if(nums[0] > nums[i]) 
        nums.unshift(nums.splice(i, 1)[0])
    else if( i && nums[i] > nums[i - 1] )
        continue
    else 
        for (let j = 1; j < nums.length; j++)
            if(nums[i] > nums[j - 1] && nums[i] < nums[j])
                nums.splice(j, 0, nums.splice(i, 1)[0])
    
}
    
console.log(nums)