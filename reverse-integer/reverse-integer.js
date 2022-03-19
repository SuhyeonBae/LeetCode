/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let minus = false;
  if(x < 0) {
    minus = true;
  }
  let str = Math.abs(x).toString();
  let arr = [];
  let number = 0;
  for(let i=0; i < str.length; i++){
    arr.push(str[i]);
  }
  
  let rev = arr.reverse();
  for(let i=0; i < str.length; i++){
    number += rev[i] * (10**(str.length-1-i));
  }
  
  if(number > 2**31) {
    return 0;
  }
  
  return minus ? -number : number;
};