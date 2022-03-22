/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let regex = /[\W_]/g;
  let str = s.replace(regex, '').toLowerCase();

  // for(let i = 0; i < str.length/2; i++){
  //   if(str[i] !== str[str.length-1-i]) {
  //     return false;
  //   }
  // }
  // return true;
  
  if(str === str.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
};