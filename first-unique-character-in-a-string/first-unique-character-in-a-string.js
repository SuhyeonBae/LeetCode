/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map();
  for(let str of s){
    if(map.has(str)){
      map.set(str, map.get(str)+1)
    } else {
      map.set(str, 0);
    }
  }
  for(let i = 0; i < s.length; i++){
    if(map.get(s[i]) === 0){
      return i;
    }
  }
  return -1;
};