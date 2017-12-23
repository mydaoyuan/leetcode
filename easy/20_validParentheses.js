// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

// 给定一个只包含 '(', ')', '{', '}', '[', ']'的字符串, 判断标签是否正确闭合
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length
    let left = '([{'
    let right = ')]}'
    let myMap = {
      '(': ')',
      '[': ']',
      '{': '}',
      '}': '{',
      ']': '[',
      ')': '('
    }
    let stack = []
    for (let i = 0; i < len; i++) {
      let character = s[i]
      if (right.indexOf(character) === -1) {
        stack.push(character)
      } else {
        let index = stack.lastIndexOf(myMap[character])
        let content = stack.splice(index)
        if (content.length > 1 || index === -1) {
          return false
        }
      }
    }
    if (stack.length) {
      return false
    }
    return true
};

// faster
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var current = s.charAt(i);
    if (current == '(' ||
      current == '{' ||
      current == '[') {
      stack.push(current);
    }
    else if (current == ')') {
      var prev = stack.pop();
      if (prev != '(') {
        // console.log("it's not a ')'!!!");
        return false;
      }
      // console.log("it's a ')'");       
    }
    else if (current == ']') {
      // console.log("it's a ']'");
      var prev = stack.pop();
      if (prev != '[') {
        // console.log("it's not a '['!!!");
        return false;
      }
    }
    else if (current == '}') {
      // console.log("it's a '}'"); 
      var prev = stack.pop();
      if (prev != '{') {
        // console.log("it's not a '{'!!!");
        return false;
      }
    }
  }

  if (stack.pop()) {
    return false;
  }
  return true;

};