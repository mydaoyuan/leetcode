// Given a sorted array and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1, 3, 5, 6], 5
// Output: 2
// Example 2:

// Input: [1, 3, 5, 6], 2
// Output: 1
// Example 3:

// Input: [1, 3, 5, 6], 7
// Output: 4
// Example 1:

// Input: [1, 3, 5, 6], 0
// Output: 0

// 一个排序后的数组，一个target，如果数组中包含target就返回在数组中的索引，如果不包含就向数组中插入target，返回新数组target的索引
// 因为看到是排序后的数组，所以直接循环数组对比了。。。。感觉想提高性能就得从如何快速找到一个比target大的数字，看到75ms的算法果然用了二分法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1 ) {
    return nums.indexOf(target) 
  }
  for (var i = 0; i < nums.length;i++) {
    if (nums[i]> target) {
      nums.splice(i, 0, target)
      return i
    }
    if (i == nums.length -1) {
      nums.push(target)
      return i + 1
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var l = 0;
  var u = nums.length - 1;
  var mid;

  while (l <= u) {
    mid = parseInt((u + l) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      u = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
};