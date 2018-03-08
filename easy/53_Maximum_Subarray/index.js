// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] [4,-1,2,1] -> 6
/**
 * @param {number[]} nums
 * @return {number}
 */
// fail   timeout 
var maxSubArray = function(nums) {
    let result = []
    if (nums.length === 1) {
        return nums[0]
    }
    for (let i = 1; i < nums.length; i++) {
        let onceFind = []
        for (let j = 0; j < nums.length; j++) {
            let target = nums.slice(j, j + i)
            let count = target.reduce((a, b) => a + b)
            onceFind.push(count)
        }
        result.push(Math.max(...onceFind))
    }
    console.log(result)
    return Math.max(...result)
}

// standard
var maxSubArray = function(nums) {
    let len = nums.length
    let dp = []
    let max = nums[0]
    dp[0] = nums[0]
    for (let i = 1; i < len; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0)
        max = Math.max(max, dp[i])
    }
    return max
}
