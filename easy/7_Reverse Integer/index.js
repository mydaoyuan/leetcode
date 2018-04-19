// 给定一个 32 位有符号整数，将整数中的数字进行反转。
// 输入: 123
// 输出: 321
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return x
  }
  const min = Math.pow(-2, 31)
  const max = Math.pow(2, 31) - 1
  let symbol = x > 0 ? '' : '-'
  let strNumber = Math.abs(x) + ''
  let result = symbol
  for (let i = strNumber.length - 1; i >= 0; i--) {
    let character = strNumber[i]
    if (i !== 0 || character !== '0') {
      result += character
    }
  }
  if (+result > max || +result < min) {
    return 0
  }
  return +result
}

// better 
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x < 0;
    var result = 0;
    
    x = Math.abs(x);
    
    while(x) {
        var lastDigit = x%10;
        result *= 10;
        result += lastDigit;
        x = parseInt(x/10);
    }

    result = isNeg ? -result : result;
    
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) {
        return 0;
    }
    
    return result;
};