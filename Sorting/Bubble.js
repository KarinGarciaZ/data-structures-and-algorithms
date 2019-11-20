let nums = [2,4,3,1,6,56,75,34]

for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++) {
        if(nums[j] < nums[i]) {
            let aux = nums[i]
            nums[i] = nums[j]
            nums[j] = aux
        }
    }

console.log(nums)