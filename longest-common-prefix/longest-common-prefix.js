/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) { return ''}
  
  for(let i = 0; i < strs[0].length; i++){
    const c = strs[0].charAt(i);
    
    for(let j = 1; j < strs.length; j++){
      if(strs[j].charAt(i) !== c){
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};