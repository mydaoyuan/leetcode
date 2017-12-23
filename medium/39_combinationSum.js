// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7, 
// A solution set is: 
// [
//   [7],
//   [2, 2, 3]
// ]

// 正整数 数组C 和 目标数字 T， 找到数组 C 中能够相加等于 T 的组合， 其中 C 中的数字可以无限次使用

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = []
  let temp = []
  dfs(0, 0, temp)
  return result

  function dfs(value, index, temp) {
    if (value === target) {
      result.push(temp.concat())
      return
    } else if (value > target) {
      return
    } else {
      for (let i = index, len = candidates.length; i < len; i++) {
        let newtemp = temp.concat(candidates[i])
        dfs(value + candidates[i], i, newtemp)
      }
    }
  }
};



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var res = [];
    if (candidates.length === 0 || target < 0)
        return res;
    combinationSelect(candidates, 0, [], target, res);
    return res;
};

var combinationSelect = function(dataList, dataIndex, tmpList, targetNum, resList) {
    if (targetNum === 0) {
        resList.push(tmpList.slice());
        return;
    } else if (targetNum < 0) {
        return;
    }

    for (var i = dataIndex; i < dataList.length; i++) {
        targetNum -= dataList[i];
        tmpList.push(dataList[i]);
        combinationSelect(dataList, i, tmpList, targetNum, resList);
        tmpList.pop();
        targetNum += dataList[i];
    }
};