/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let string = s.trim().replace(/A-Za-z./g, '');
  let result = parseInt(string, 10);
  
  if(result > 2**31 -1 ){
    return 2**31 -1;
  } else if (result < -(2**31)){
    return -(2**31);
  } else if(!result) {
    return 0;
  } else {
    return result;
  }
};