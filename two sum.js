// 1. Two Sum
// Add to List

// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//  const comp = {};
// for(let i =0; i<= nums.length; i++){  //遍历数组 nums
//    if(comp[nums[i] ]>=0){
//         return [ comp[nums[i] ] , i]
//     }
//     comp[target-nums[i]] = i
// }
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] == target) {
                return [i, k]
            }
        }
    }
}