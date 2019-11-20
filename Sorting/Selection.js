let nums = [2,4,3,1,6,56,75,34]

for (let i = 0; i < nums.length; i++) {
    let min = nums[i]
    let index = i
    for (let j = i; j < nums.length; j++) {
        if(nums[j] < min) {
            index = j
            min = nums[j]
        }
    }
    nums[index] = nums[i]
    nums[i] = min
}

console.log(nums)