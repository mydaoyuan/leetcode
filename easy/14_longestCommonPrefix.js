// Write a function to find the longest common prefix string amongst an array of strings.

// 匹配数组中所有字符串的公共前缀字符串 ex: ['abc', 'abbb', 'ac'] -> 'a'

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }
  return strs.reduce((a, b) => {
    return a.substr(0, same(a, b))
  })

  function same(str, str2) {
    let longLen = Math.max(str.length, str2.length)
    let i = -1
    let f = true
    while (i < longLen && f) {
      i++
      if (str[i] !== str2[i]) {
        f = false
      }
    }
    return i
  }
};


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let index = 1; index < strs.length; index++) {
    const element = strs[index];
    while (element.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return '';
      }
    }
  }
  return prefix;
}
